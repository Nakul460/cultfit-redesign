"use client";;
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  ArrowLeft,
  ArrowRight,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

const CarouselContext = createContext({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({
  items,
  initialScroll = 0,
  autoScroll = true,
  autoScrollSpeed = 1,
}) => {
  const carouselRef = React.useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const rafRef = React.useRef(null);
  const pausedRef = React.useRef(false);
  const scrollPosRef = React.useRef(initialScroll);

  const doubledItems = React.useMemo(
    () => [...items, ...items],
    [items]
  );

  const singleSetWidth = React.useRef(0);

  useEffect(() => {
    if (!carouselRef.current) return;
    const el = carouselRef.current;

    const measureWidth = () => {
      const childWidth = el.scrollWidth / 2;
      singleSetWidth.current = childWidth;
    };
    measureWidth();

    const onResize = () => measureWidth();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [items]);

  useEffect(() => {
    if (!autoScroll || !carouselRef.current) return;

    const tick = () => {
      if (!pausedRef.current && carouselRef.current && singleSetWidth.current > 0) {
        scrollPosRef.current += autoScrollSpeed;

        if (scrollPosRef.current >= singleSetWidth.current) {
          scrollPosRef.current -= singleSetWidth.current;
          carouselRef.current.scrollLeft = scrollPosRef.current;
        } else {
          carouselRef.current.scrollLeft = scrollPosRef.current;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [autoScroll, autoScrollSpeed]);

  const pause = () => { pausedRef.current = true; };
  const resume = () => { pausedRef.current = false; };

  const scrollLeft = () => {
    if (!carouselRef.current || !singleSetWidth.current) return;
    pausedRef.current = true;
    scrollPosRef.current -= 400;
    if (scrollPosRef.current < 0) {
      scrollPosRef.current += singleSetWidth.current;
    }
    carouselRef.current.scrollTo({
      left: scrollPosRef.current,
      behavior: "smooth",
    });
    setTimeout(resume, 600);
  };

  const scrollRight = () => {
    if (!carouselRef.current || !singleSetWidth.current) return;
    pausedRef.current = true;
    scrollPosRef.current += 400;
    if (scrollPosRef.current >= singleSetWidth.current) {
      scrollPosRef.current -= singleSetWidth.current;
    }
    carouselRef.current.scrollTo({
      left: scrollPosRef.current,
      behavior: "smooth",
    });
    setTimeout(resume, 600);
  };

  const handleCardClose = (index) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384;
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return typeof window !== "undefined" && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div
        className="relative w-full"
        onMouseEnter={pause}
        onMouseLeave={resume}
        onTouchStart={pause}
        onTouchEnd={resume}
      >
        <div
          className="flex w-full overflow-x-auto py-10 [scrollbar-width:none] [-webkit-overflow-scrolling:touch] md:py-20"
          ref={carouselRef}>
          <div className="flex flex-row gap-4 pl-4 mx-auto max-w-7xl">
            {doubledItems.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.05 * (index % items.length), ease: "easeOut" },
                }}
                key={`card-${index % items.length}-${Math.floor(index / items.length)}`}
                className="rounded-3xl shrink-0">
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mr-10 flex justify-end gap-2">
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-colors hover:bg-white/20"
            onClick={scrollLeft}>
            <ArrowLeft className="h-6 w-6 text-white" />
          </button>
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-colors hover:bg-white/20"
            onClick={scrollRight}>
            <ArrowRight className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const { onCardClose } = useContext(CarouselContext);

  const handleClose = React.useCallback(() => {
    setOpen(false);
    onCardClose(index);
  }, [onCardClose, index]);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, handleClose]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg" />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="relative z-[60] mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-white p-4 font-sans md:p-10 dark:bg-neutral-900">
              <button
                className="sticky top-4 right-0 ml-auto flex h-11 w-11 items-center justify-center rounded-full bg-black dark:bg-white"
                onClick={handleClose}>
                <X className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>
              <motion.p
                layoutId={layout ? `category-${card.title}` : undefined}
                className="text-base font-medium text-black dark:text-white">
                {card.category}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="mt-4 text-2xl font-semibold text-neutral-700 md:text-5xl dark:text-white">
                {card.title}
              </motion.p>
              <div className="py-10">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="relative z-10 flex h-80 w-56 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 md:h-[40rem] md:w-96 dark:bg-neutral-900">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
        <div className="relative z-40 p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-left font-sans text-sm font-medium text-white md:text-base">
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="mt-2 max-w-xs text-left font-sans text-xl font-semibold [text-wrap:balance] text-white md:text-3xl">
            {card.title}
          </motion.p>
        </div>
        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="absolute inset-0 z-10 object-cover" />
      </motion.button>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}) => {
  const [isLoading, setLoading] = useState(true);
  // Remove Next.js-only props that shouldn't reach the DOM
  const imgProps = { ...rest };
  delete imgProps.fill;
  delete imgProps.priority;
  return (
    <img
      className={cn(
        "h-full w-full transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      alt={alt ? alt : "Background of a beautiful view"}
      {...imgProps} />
  );
};

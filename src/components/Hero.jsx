import { useState, useRef, useCallback, useMemo } from "react";
import { useReducedMotion } from "motion/react";
import FlipWords from "@/components/ui/flip-words";
import MovingBorderButton from "@/components/ui/moving-border-button";

const heroWords = ["Boxing", "Yoga", "Strength", "Dance", "HRX"];
const videos = ["/video/bg.mp4", "/video/bg1.mp4"];

export default function Hero() {
  const [active, setActive] = useState(0);
  const videoRef0 = useRef(null);
  const videoRef1 = useRef(null);
  const refs = useMemo(() => [videoRef0, videoRef1], []);
  const shouldReduceMotion = useReducedMotion();

  const onEnded = useCallback(() => {
    const next = (active + 1) % videos.length;
    refs[next].current.play();
    setActive(next);
  }, [active, refs]);

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden" aria-labelledby="hero-heading">
      {videos.map((src, i) => (
        <video
          key={src}
          ref={refs[i]}
          autoPlay={i === 0 && !shouldReduceMotion}
          muted
          playsInline
          onEnded={onEnded}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        >
          <source src={src} type="video/mp4" />
        </video>
      ))}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      <div className="relative z-10 flex flex-col items-center gap-6 px-4 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-orange-300/80">
          A fitness movement
        </p>

        <h1 id="hero-heading" className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          Make{" "}
          <FlipWords
            words={heroWords}
            duration={shouldReduceMotion ? 0 : 2500}
            className="text-5xl font-bold sm:text-6xl md:text-7xl lg:text-8xl"
          />{" "}
          fun
        </h1>

        <p className="max-w-xl text-lg text-neutral-300">
          One membership. Every way you move.
          From high-energy group workouts to gym sessions
          and at-home training — built around how you like to move.
        </p>

        <MovingBorderButton
          className="mt-4"
          aria-label="Explore cultpass membership plans"
          onClick={() => document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" })}
        >
          EXPLORE CULTPASS
        </MovingBorderButton>

        <p className="mt-2 text-xs font-semibold tracking-widest text-orange-400/70" aria-label="Be better every day">
          #BeBetterEveryDay
        </p>
      </div>
    </section>
  );
}

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export default function FlipWords({ words, duration = 3000, className }) {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [, setIndex] = useState(0);

  const startAnimation = useCallback(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % words.length;
        setCurrentWord(words[next]);
        return next;
      });
    }, duration);
    return interval;
  }, [words, duration]);

  useEffect(() => {
    const interval = startAnimation();
    return () => clearInterval(interval);
  }, [startAnimation]);

  return (
    <div className={cn("inline-flex", className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWord}
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -40, filter: "blur(8px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="inline-block bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 bg-clip-text text-transparent"
        >
          {currentWord}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

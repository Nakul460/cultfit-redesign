"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const cities = [
  "Bangalore",
  "Mumbai",
  "Delhi NCR",
  "Hyderabad",
  "Chennai",
  "Pune",
  "Kolkata",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
  "Chandigarh",
  "Kochi",
];

export default function CityPopup({ open, onOpenChange, onCityChange }) {
  const [selected, setSelected] = useState(null);
  const overlayRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!localStorage.getItem("cultfit-city")) {
      const timer = setTimeout(() => onOpenChange(true), 1200);
      return () => clearTimeout(timer);
    }
  }, [onOpenChange]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = useCallback(() => {
    onOpenChange(false);
    if (selected) {
      localStorage.setItem("cultfit-city", selected);
      onCityChange(selected);
    }
  }, [selected, onOpenChange, onCityChange]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") close();
    };
    if (open) {
      window.addEventListener("keydown", handleKey);
      return () => window.removeEventListener("keydown", handleKey);
    }
  }, [open, close]);

  const handleSelect = (city) => {
    setSelected(city);
    setTimeout(close, 200);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="city-popup-heading"
          onClick={(e) => {
            if (e.target === overlayRef.current) close();
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/8 bg-[#111111] shadow-2xl"
          >
            <button
              ref={closeButtonRef}
              onClick={close}
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg text-[#9a9a9a] transition-colors hover:bg-white/6 hover:text-white"
              aria-label="Close city selection"
            >
              <i className="bi bi-x-lg text-sm" />
            </button>

            <div className="px-6 pt-6 pb-4">
              <div className="mb-1 flex items-center gap-2">
                <i className="bi bi-geo-alt-fill text-orange-400" aria-hidden="true" />
                <span className="text-xs font-medium uppercase tracking-widest text-[#9a9a9a]">
                  Select your city
                </span>
              </div>
              <h2
                id="city-popup-heading"
                className="text-xl font-bold text-white"
              >
                Where do you want to work out?
              </h2>
              <p className="mt-1 text-sm text-[#757575]">
                We&apos;ll find centers near you
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 px-6 pb-6" role="radiogroup" aria-label="City list">
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => handleSelect(city)}
                  className={cn(
                    "rounded-xl border px-4 py-3 text-sm font-medium transition-all duration-200",
                    selected === city
                      ? "border-orange-500/60 bg-orange-500/10 text-orange-400"
                      : "border-white/6 bg-[#1a1a1a] text-[#c4c4c4] hover:border-white/12 hover:bg-[#222222] hover:text-white"
                  )}
                  role="radio"
                  aria-checked={selected === city}
                >
                  <span className="flex items-center gap-2">
                    <i className="bi bi-geo-alt text-xs text-[#757575]" aria-hidden="true" />
                    {city}
                  </span>
                </button>
              ))}
            </div>

            <div className="border-t border-white/6 px-6 py-3">
              <button
                onClick={close}
                className="w-full text-center text-xs text-[#757575] transition-colors hover:text-[#9a9a9a]"
              >
                Skip for now
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

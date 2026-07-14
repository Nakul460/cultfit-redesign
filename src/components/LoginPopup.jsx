import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function LoginPopup({ open, onOpenChange }) {
  const [phone, setPhone] = useState("");
  const overlayRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!localStorage.getItem("cultfit-logged-in")) {
      const timer = setTimeout(() => onOpenChange(true), 1200);
      return () => clearTimeout(timer);
    }
  }, [onOpenChange]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 300);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = useCallback(() => {
    onOpenChange(false);
  }, [onOpenChange]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") close();
    };
    if (open) {
      window.addEventListener("keydown", handleKey);
      return () => window.removeEventListener("keydown", handleKey);
    }
  }, [open, close]);

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    if (phone.length >= 10) {
      localStorage.setItem("cultfit-logged-in", "phone");
      close();
    }
  };

  const handleSocialLogin = (provider) => {
    localStorage.setItem("cultfit-logged-in", provider);
    close();
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
          aria-labelledby="login-heading"
          onClick={(e) => {
            if (e.target === overlayRef.current) close();
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-white/8 bg-[#111111] shadow-2xl"
          >
            <button
              onClick={close}
              className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-lg text-[#9a9a9a] transition-colors hover:bg-white/6 hover:text-white"
              aria-label="Close login"
            >
              <i className="bi bi-x-lg text-sm" />
            </button>

            <div className="px-6 pt-6 pb-4 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500">
                <span className="text-lg font-black text-white">c</span>
              </div>
              <h2 id="login-heading" className="text-xl font-bold text-white">
                Welcome to cult.fit
              </h2>
              <p className="mt-1 text-sm text-[#757575]">
                Log in to access your workouts
              </p>
            </div>

            <form onSubmit={handlePhoneSubmit} className="px-6 pb-4">
              <label htmlFor="phone-input" className="sr-only">
                Phone number
              </label>
              <div className="flex items-center gap-2 rounded-xl border border-white/8 bg-[#1a1a1a] px-4 py-3 transition-colors focus-within:border-orange-500/50">
                <span className="text-sm text-[#757575]">+91</span>
                <span className="h-4 w-px bg-white/8" aria-hidden="true" />
                <input
                  ref={inputRef}
                  id="phone-input"
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={10}
                  autoComplete="tel-national"
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                  className="w-full bg-transparent text-sm text-white placeholder-[#555] outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={phone.length < 10}
                className="mt-3 w-full rounded-xl bg-orange-500 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-40"
              >
                CONTINUE
              </button>
            </form>

            <div className="relative px-6 pb-2">
              <div
                className="absolute inset-x-6 top-1/2 h-px bg-white/6"
                aria-hidden="true"
              />
              <div className="flex justify-center">
                <span className="relative bg-[#111111] px-3 text-[11px] text-[#555]">
                  or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 px-6 pb-3">
              <button
                onClick={() => handleSocialLogin("google")}
                className="flex flex-col items-center gap-1.5 rounded-xl border border-white/6 bg-[#1a1a1a] py-3 text-[#c4c4c4] transition-all duration-200 hover:border-white/12 hover:bg-[#222222] hover:text-white"
                aria-label="Continue with Google"
              >
                <i className="bi bi-google text-lg" />
                <span className="text-[10px]">Google</span>
              </button>
              <button
                onClick={() => handleSocialLogin("facebook")}
                className="flex flex-col items-center gap-1.5 rounded-xl border border-white/6 bg-[#1a1a1a] py-3 text-[#c4c4c4] transition-all duration-200 hover:border-white/12 hover:bg-[#222222] hover:text-white"
                aria-label="Continue with Facebook"
              >
                <i className="bi bi-facebook text-lg" />
                <span className="text-[10px]">Facebook</span>
              </button>
              <button
                onClick={() => handleSocialLogin("email")}
                className="flex flex-col items-center gap-1.5 rounded-xl border border-white/6 bg-[#1a1a1a] py-3 text-[#c4c4c4] transition-all duration-200 hover:border-white/12 hover:bg-[#222222] hover:text-white"
                aria-label="Continue with Email"
              >
                <i className="bi bi-envelope text-lg" />
                <span className="text-[10px]">Email</span>
              </button>
            </div>

            <div className="border-t border-white/6 px-6 py-3">
              <p className="text-center text-[11px] text-[#555]">
                By continuing, you agree to our{" "}
                <a
                  href="#"
                  className="text-[#9a9a9a] underline hover:text-white"
                >
                  Terms
                </a>
                {" & "}
                <a
                  href="#"
                  className="text-[#9a9a9a] underline hover:text-white"
                >
                  Privacy Policy
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

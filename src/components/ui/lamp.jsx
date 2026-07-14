import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export default function LampContainer({ children, className }) {
  return (
    <div
      className={cn(
        "relative flex min-h-[40rem] w-full flex-col items-center justify-center overflow-hidden bg-neutral-950",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, width: "8rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 1, ease: "easeInOut" }}
          className="absolute top-1/2 h-[10rem] -translate-y-1/2"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="absolute inset-0"
          >
            <svg
              viewBox="0 0 600 100"
              className="mx-auto w-[50rem] -translate-y-12"
            >
              <defs>
                <linearGradient
                  id="lamp-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="30%" stopColor="rgba(255,87,34,0.5)" />
                  <stop offset="50%" stopColor="rgba(255,152,0,0.8)" />
                  <stop offset="70%" stopColor="rgba(255,87,34,0.5)" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
                <filter id="lamp-blur">
                  <feGaussianBlur stdDeviation="6" />
                </filter>
              </defs>
              <rect
                x="0"
                y="0"
                width="600"
                height="4"
                fill="url(#lamp-gradient)"
                filter="url(#lamp-blur)"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center px-4"
      >
        {children}
      </motion.div>

      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-[30rem] bg-gradient-to-t from-orange-500/10 via-orange-500/5 to-transparent rounded-full blur-3xl" />
    </div>
  );
}

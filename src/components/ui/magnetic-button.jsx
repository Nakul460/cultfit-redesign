import { useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function MagneticButton({
  children,
  className,
  strength = 0.3,
  ...props
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    setPosition({
      x: (clientX - centerX) * strength,
      y: (clientY - centerY) * strength,
    });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(
        "relative cursor-pointer px-4 py-2 text-sm font-bold text-white transition-colors duration-200",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}

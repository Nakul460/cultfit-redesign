import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function MovingBorderButton({
  children,
  className,
  borderClassName,
  ...props
}) {
  const containerRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    let animationId;
    const animate = () => {
      setAngle((prev) => (prev + 1) % 360);
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <button
      ref={containerRef}
      className={cn(
        "relative z-0 cursor-pointer overflow-hidden rounded-xl bg-neutral-900 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,87,34,0.4)]",
        className
      )}
      onMouseMove={(e) => {
        const rect = containerRef.current.getBoundingClientRect();
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
      {...props}
    >
      <div
        className={cn(
          "pointer-events-none absolute -inset-px rounded-xl opacity-100 transition-opacity duration-300",
          borderClassName
        )}
        style={{
          background: `conic-gradient(from ${angle}deg, transparent 0%, rgba(255,87,34,0.8) 10%, transparent 20%, transparent 40%, rgba(255,152,0,0.8) 50%, transparent 60%, transparent 80%, rgba(255,87,34,0.8) 90%, transparent 100%)`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "xor",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          padding: "2px",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(200px circle at ${position.x}px ${position.y}px, rgba(255,87,34,0.15), transparent 60%)`,
        }}
      />
      <span className="relative z-10">{children}</span>
    </button>
  );
}

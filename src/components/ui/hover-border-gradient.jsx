import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  clockwise = true,
  ...props
}) {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState(clockwise ? 0 : 360);

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prev) =>
          clockwise ? (prev + 1) % 360 : (prev - 1 + 360) % 360
        );
      }, 1000 / 60);
      return () => clearInterval(interval);
    }
  }, [hovered, clockwise]);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative z-0 flex items-center justify-center overflow-hidden rounded-xl border border-transparent [background:content-box] transition-all duration-300",
        containerClassName
      )}
      style={{
        padding: "1px",
      }}
      {...props}
    >
      <div
        className={cn("absolute inset-0 z-0", className)}
        style={{
          background: `conic-gradient(from ${direction}deg, transparent 25%, rgba(255,87,34,${hovered ? "0.8" : "0.2"}) 50%, transparent 75%)`,
        }}
      />
      <div className={cn("relative z-10 bg-neutral-950 rounded-xl w-full h-full", className)}>
        {children}
      </div>
    </Tag>
  );
}

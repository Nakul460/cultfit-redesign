import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export default function Vortex({ className, particleCount = 50, baseHue = 270 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const w = () => canvas.offsetWidth;
    const h = () => canvas.offsetHeight;

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.angle = Math.random() * Math.PI * 2;
        this.radius = Math.random() * Math.min(w(), h()) * 0.45;
        this.speed = 0.002 + Math.random() * 0.008;
        this.size = Math.random() * 2.5 + 0.5;
        this.life = Math.random();
        this.decay = 0.001 + Math.random() * 0.003;
        this.hue = baseHue + (Math.random() - 0.5) * 40;
        this.lightness = 50 + Math.random() * 30;
        this.drift = (Math.random() - 0.5) * 0.3;
      }
      update() {
        this.angle += this.speed;
        this.radius += this.drift;
        this.life -= this.decay;
        if (this.life <= 0 || this.radius < 10) this.reset();
      }
      draw(ctx) {
        const cx = w() / 2;
        const cy = h() / 2;
        const x = cx + Math.cos(this.angle) * this.radius;
        const y = cy + Math.sin(this.angle) * this.radius;
        ctx.beginPath();
        ctx.arc(x, y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 80%, ${this.lightness}%, ${this.life * 0.6})`;
        ctx.fill();
      }
    }

    particles = Array.from({ length: particleCount }, () => new Particle());

    const drawVortex = (time) => {
      ctx.clearRect(0, 0, w(), h());

      const gradient = ctx.createRadialGradient(
        w() / 2, h() / 2, 0,
        w() / 2, h() / 2, Math.max(w(), h()) * 0.5
      );
      gradient.addColorStop(0, `hsla(${baseHue}, 60%, 8%, 1)`);
      gradient.addColorStop(0.5, `hsla(${baseHue + 10}, 50%, 5%, 1)`);
      gradient.addColorStop(1, "hsla(0, 0%, 2%, 1)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w(), h());

      for (let i = 0; i < 5; i++) {
        const angle = time * 0.0002 * (i + 1);
        const radius = Math.min(w(), h()) * (0.1 + i * 0.08);
        ctx.beginPath();
        ctx.ellipse(
          w() / 2, h() / 2,
          radius, radius * 0.3,
          angle, 0, Math.PI * 2
        );
        ctx.strokeStyle = `hsla(${baseHue + i * 15}, 70%, 50%, ${0.04 - i * 0.005})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      animationId = requestAnimationFrame(drawVortex);
    };

    animationId = requestAnimationFrame(drawVortex);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [particleCount, baseHue]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 h-full w-full", className)}
    />
  );
}

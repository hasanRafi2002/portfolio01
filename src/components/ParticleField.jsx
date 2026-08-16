import { useEffect, useRef } from "react";

/**
 * Global atmospheric particle background.
 * Canvas-based for performance — safe at higher counts than DOM nodes.
 * Reads color from CSS variables so it re-themes with dark/light automatically.
 */
export default function ParticleField({ density = 0.00009, maxParticles = 90 }) {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef(null);
  const visibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const getAccentRGB = () => {
      const styles = getComputedStyle(document.documentElement);
      const raw = styles.getPropertyValue("--accent").trim();
      // Convert hex to rgb triplet; fall back to a safe teal-green
      if (raw.startsWith("#")) {
        const hex = raw.replace("#", "");
        const bigint = parseInt(hex.length === 3
          ? hex.split("").map((c) => c + c).join("")
          : hex, 16);
        return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
      }
      return [57, 255, 20];
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles();
    };

    const initParticles = () => {
      const count = Math.min(maxParticles, Math.floor(width * height * density));
      particlesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.8 + 0.4,
        baseOpacity: Math.random() * 0.4 + 0.15,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        drift: Math.random() * Math.PI * 2,
      }));
    };

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleVisibility = () => {
      visibleRef.current = document.visibilityState === "visible";
    };

    const draw = () => {
      if (!visibleRef.current) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, width, height);
      const [r, g, b] = getAccentRGB();
      const { x: mx, y: my } = mouseRef.current;

      for (const p of particlesRef.current) {
        p.drift += 0.003;
        p.x += p.vx + Math.sin(p.drift) * 0.03;
        p.y += p.vy + Math.cos(p.drift) * 0.03;

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Subtle parallax toward cursor, capped so it stays gentle
        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let opacity = p.baseOpacity;
        if (dist < 160) {
          opacity = Math.min(0.85, p.baseOpacity + (1 - dist / 160) * 0.4);
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", handleVisibility);
    if (!prefersReduced) {
      window.addEventListener("mousemove", handleMouseMove);
      rafRef.current = requestAnimationFrame(draw);
    } else {
      // Reduced motion: draw a single static frame, no loop
      resize();
      draw_static: {
        ctx.clearRect(0, 0, width, height);
        const [r, g, b] = getAccentRGB();
        for (const p of particlesRef.current) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.baseOpacity})`;
          ctx.fill();
        }
      }
    }

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("visibilitychange", handleVisibility);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [density, maxParticles]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none opacity-70"
    />
  );
}

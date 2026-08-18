import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

/**
 * Galaxy-style ambient particle field. Canvas-based, portaled to <body>
 * so it always stays pinned to the viewport regardless of any ancestor
 * CSS (transforms/perspective/filters all break `position: fixed`).
 */
export default function ParticleField({ density = 0.00022, maxParticles = 220 }) {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef(null);
  const visibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const palette = () => {
      const styles = getComputedStyle(document.documentElement);
      const toRgb = (name, fallback) => {
        const raw = styles.getPropertyValue(name).trim();
        if (raw.startsWith("#")) {
          const hex = raw.replace("#", "");
          const full = hex.length === 3 ? hex.split("").map((c) => c + c).join("") : hex;
          const bigint = parseInt(full, 16);
          return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
        }
        return fallback;
      };
      return [
        toRgb("--accent", [45, 212, 191]),
        toRgb("--accent-secondary", [167, 139, 250]),
        toRgb("--accent-tertiary", [251, 146, 60]),
      ];
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
      const colors = palette();
      const count = Math.min(maxParticles, Math.floor(width * height * density));
      particlesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2.6 + 1,
        baseOpacity: Math.random() * 0.4 + 0.55,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        drift: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        color: colors[Math.floor(Math.random() * colors.length)],
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
      const { x: mx, y: my } = mouseRef.current;

      for (const p of particlesRef.current) {
        p.drift += p.twinkleSpeed;
        p.x += p.vx + Math.sin(p.drift) * 0.12;
        p.y += p.vy + Math.cos(p.drift) * 0.12;

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        const twinkle = 0.6 + Math.sin(p.drift * 2) * 0.4;
        let opacity = p.baseOpacity * twinkle;

        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 160) {
          opacity = Math.min(1, opacity + (1 - dist / 160) * 0.5);
        }

        const [r, g, b] = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
        ctx.shadowColor = `rgba(${r}, ${g}, ${b}, ${Math.min(1, opacity + 0.2)})`;
        ctx.shadowBlur = p.r * 2.5;
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      rafRef.current = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("mousemove", handleMouseMove);
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("visibilitychange", handleVisibility);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [density, maxParticles]);

  return createPortal(
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-20 pointer-events-none"
    />,
    document.body
  );
}

import { useRef } from "react";

/**
 * Real per-pixel 3D tilt. Attach the returned ref to any element.
 * Rotates toward the cursor, springs back on leave.
 */
export default function useTilt3D({ max = 10, scale = 1.03 } = {}) {
  const ref = useRef(null);

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const rotateY = x * max * 2;
    const rotateX = -y * max * 2;
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return { ref, onMouseMove, onMouseLeave, style: { transition: "transform .25s ease", willChange: "transform" } };
}

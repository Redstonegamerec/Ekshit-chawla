import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow || window.matchMedia("(max-width: 900px)").matches) return undefined;

    let frameId;
    const position = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const target = { x: position.x, y: position.y };

    const handleMove = (event) => {
      target.x = event.clientX;
      target.y = event.clientY;
    };

    const render = () => {
      position.x += (target.x - position.x) * 0.16;
      position.y += (target.y - position.y) * 0.16;
      glow.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
      frameId = requestAnimationFrame(render);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    frameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />;
}

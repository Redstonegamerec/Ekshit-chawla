import { useEffect, useRef } from "react";
import { gsap } from "../animations/gsapSetup.js";

export default function Loader({ onComplete }) {
  const loaderRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: "power4.out" },
        onComplete,
      });

      timeline
        .set(".loader-word span", { yPercent: 105 })
        .set(".loader-line", { scaleX: 0 })
        .to(".loader-word span", {
          yPercent: 0,
          duration: 0.95,
          stagger: 0.045,
        })
        .to(".loader-line", { scaleX: 1, duration: 0.75 }, "-=0.35")
        .to(".loader-tag", { y: 0, autoAlpha: 1, duration: 0.7 }, "-=0.45")
        .to(loaderRef.current, {
          yPercent: -100,
          duration: 1.05,
          ease: "expo.inOut",
          delay: 0.35,
          pointerEvents: "none",
        });
    }, loaderRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div className="loader" ref={loaderRef} aria-label="Loading Ekshit Chawla portfolio">
      <div className="loader-inner">
        <div className="loader-word" aria-hidden="true">
          {"EKSHIT CHAWLA".split("").map((letter, index) => (
            <span key={`${letter}-${index}`}>{letter === " " ? "\u00A0" : letter}</span>
          ))}
        </div>
        <div className="loader-line" />
        <p className="loader-tag">Websites That Feel Expensive</p>
      </div>
    </div>
  );
}

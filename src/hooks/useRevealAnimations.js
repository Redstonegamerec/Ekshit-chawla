import { useEffect } from "react";
import { gsap, ScrollTrigger } from "../animations/gsapSetup.js";

export function useRevealAnimations(enabled) {
  useEffect(() => {
    if (!enabled) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reveal-up").forEach((item) => {
        gsap.fromTo(
          item,
          { y: 54, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 84%",
              once: true,
            },
          }
        );
      });

      gsap.utils.toArray(".section-heading h2").forEach((heading) => {
        gsap.fromTo(
          heading,
          { y: 38, autoAlpha: 0, clipPath: "inset(0 0 100% 0)" },
          {
            y: 0,
            autoAlpha: 1,
            clipPath: "inset(0 0 0% 0)",
            duration: 1.15,
            ease: "power4.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 84%",
              once: true,
            },
          }
        );
      });

      gsap.utils.toArray(".premium-card:not(.project-card):not(.case-card)").forEach((card) => {
        gsap.fromTo(
          card,
          { y: 38, autoAlpha: 0, scale: 0.985 },
          {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
          }
        );
      });

      gsap.utils.toArray(".case-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 54, autoAlpha: 0, scale: 0.97 },
          {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            duration: 0.95,
            delay: (index % 2) * 0.04,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 86%",
              once: true,
            },
          }
        );
      });

      gsap.fromTo(
        ".cinematic-band",
        { autoAlpha: 0, scaleY: 0.82 },
        {
          autoAlpha: 1,
          scaleY: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cinematic-band",
            start: "top 88%",
            once: true,
          },
        }
      );

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, [enabled]);
}

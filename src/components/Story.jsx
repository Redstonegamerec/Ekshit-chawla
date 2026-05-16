import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "../animations/gsapSetup.js";

const storyLines = [
  {
    label: "Attention",
    line: "A normal website gets ignored.",
    note: "Most visitors decide if a brand feels serious before they read the details.",
  },
  {
    label: "Trust",
    line: "A premium website builds trust.",
    note: "Luxury spacing, clear copy, and polished visuals make the business feel established.",
  },
  {
    label: "Clarity",
    line: "A clear website brings enquiries.",
    note: "The visitor should know the offer, the value, and the next step without thinking hard.",
  },
  {
    label: "Scale",
    line: "A smooth website makes the brand feel bigger.",
    note: "Motion, speed, and structure turn a local brand into a stronger online first impression.",
  },
  {
    label: "Build",
    line: "That is what I build.",
    note: "Premium websites that help businesses look sharper, cleaner, and more trustworthy.",
  },
];

export default function Story({ loaderDone }) {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!loaderDone) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const next = Math.min(storyLines.length - 1, Math.floor(self.progress * storyLines.length));
          setActive(next);
        },
      });

      gsap.to(".story-scan", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      gsap.fromTo(
        ".story-frame",
        { scale: 0.94, autoAlpha: 0.65 },
        {
          scale: 1,
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "top top",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [loaderDone]);

  return (
    <section className="story" id="story" ref={sectionRef} aria-labelledby="story-title">
      <div className="story-sticky">
        <div className="section-kicker">The First Impression</div>
        <div className="story-scan" aria-hidden="true" />
        <div className="story-frame">
          <h2 id="story-title">Most businesses do not need just a website.</h2>
          <p>They need a first impression.</p>
          <div className="story-lines" aria-live="polite">
            {storyLines.map((line, index) => (
              <span className={active === index ? "is-active" : ""} key={line.line}>
                {line.line}
              </span>
            ))}
          </div>
          <div className="story-detail">
            <strong>{storyLines[active].label}</strong>
            <p>{storyLines[active].note}</p>
          </div>
          <div className="story-steps" aria-label="Story steps">
            {storyLines.map((line, index) => (
              <span className={active === index ? "is-active" : ""} key={line.label}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {line.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

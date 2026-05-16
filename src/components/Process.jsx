import { useEffect, useRef } from "react";
import { gsap } from "../animations/gsapSetup.js";
import { processSteps } from "../data/site.js";

export default function Process() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".timeline-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 70%",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="process section-shell" id="process" ref={sectionRef} aria-labelledby="process-title">
      <div className="section-heading reveal-up">
        <span className="section-kicker">Process</span>
        <h2 id="process-title">My Process</h2>
      </div>

      <div className="timeline">
        <div className="timeline-line" aria-hidden="true" />
        {processSteps.map((step, index) => (
          <article className="timeline-item premium-card" key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{step}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

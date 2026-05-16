import { ArrowDown, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "../animations/gsapSetup.js";
import MagneticButton from "./MagneticButton.jsx";

const headline = "I Build Websites That Make Brands Look Expensive.";

export default function Hero({ loaderDone }) {
  const heroRef = useRef(null);

  useEffect(() => {
    if (!loaderDone) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    const ctx = gsap.context(() => {
      gsap.set(".hero-word", { yPercent: 115, autoAlpha: 0 });
      gsap.set([".hero-subtitle", ".hero-actions", ".hero-trust", ".hero-preview", ".scroll-cue"], {
        y: 36,
        autoAlpha: 0,
      });

      gsap
        .timeline({ defaults: { ease: "power4.out" } })
        .to(".hero-word", {
          yPercent: 0,
          autoAlpha: 1,
          duration: 0.95,
          stagger: 0.045,
        })
        .to(
          [".hero-subtitle", ".hero-actions", ".hero-trust", ".hero-preview", ".scroll-cue"],
          { y: 0, autoAlpha: 1, duration: 0.9, stagger: 0.08 },
          "-=0.55"
        )
        .to(
          ".preview-panel",
          {
            y: -16,
            rotateX: 7,
            rotateY: -6,
            duration: 5.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          },
          "-=0.4"
        );
    }, heroRef);

    return () => ctx.revert();
  }, [loaderDone]);

  return (
    <section className="hero section-shell" ref={heroRef} aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-content">
        <div className="eyebrow">
          <Sparkles size={16} strokeWidth={1.8} />
          Premium digital experiences for modern Indian businesses
        </div>

        <h1 id="hero-title" className="hero-title" aria-label={headline}>
          {headline.split(" ").map((word, index) => (
            <span className="word-mask" key={`${word}-${index}`} aria-hidden="true">
              <span className="hero-word">{word}</span>
            </span>
          ))}
        </h1>

        <p className="hero-subtitle">
          I design and develop premium websites for businesses, institutes, creators, gyms,
          interior studios, cafes, and brands that want to stand out online.
        </p>

        <div className="hero-actions">
          <MagneticButton href="#work">View My Work</MagneticButton>
          <MagneticButton href="#contact" variant="secondary">
            Start a Project
          </MagneticButton>
        </div>

        <p className="hero-trust">
          Portfolio / Business Websites / Landing Pages / Booking Systems / Brand Experiences
        </p>
      </div>

      <div className="hero-preview" aria-label="Premium website preview mockup">
        <div className="preview-panel">
          <div className="preview-browser">
            <span />
            <span />
            <span />
          </div>
          <div className="preview-grid">
            <div className="preview-copy">
              <small>Delhi Studio</small>
              <strong>Websites that feel expensive.</strong>
              <p>Strategy, design, motion, launch.</p>
            </div>
            <div className="preview-visual">
              <div />
              <span />
            </div>
          </div>
          <div className="preview-stats">
            <span>Premium UI</span>
            <span>Lead-ready</span>
            <span>Fast build</span>
          </div>
        </div>
      </div>

      <a className="scroll-cue" href="#story" aria-label="Scroll to story">
        <span>Scroll</span>
        <ArrowDown size={18} strokeWidth={1.7} />
      </a>
    </section>
  );
}

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../animations/gsapSetup.js";
import { projects } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";

export default function Projects({ loaderDone }) {
  const sectionRef = useRef(null);
  const railRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    if (!loaderDone) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.matchMedia("(min-width: 960px)").matches;
    if (reduceMotion || !isDesktop) return undefined;

    const ctx = gsap.context(() => {
      const rail = railRef.current;
      const section = sectionRef.current;
      const progress = progressRef.current;

      const horizontalTween = gsap.to(rail, {
        x: () => -(rail.scrollWidth - window.innerWidth + 96),
        ease: "none",
        scrollTrigger: {
          id: "projects-horizontal",
          trigger: section,
          start: "top top",
          end: () => `+=${rail.scrollWidth - window.innerWidth + 520}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progress) progress.style.transform = `scaleX(${self.progress})`;
          },
        },
      });

      gsap.utils.toArray(".project-card", section).forEach((card) => {
        gsap.fromTo(
          card,
          { y: 80, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              containerAnimation: horizontalTween,
              start: "left 85%",
            },
          }
        );
      });

      gsap.utils.toArray(".project-image-wrap img", section).forEach((image) => {
        gsap.to(image, {
          xPercent: -4,
          ease: "none",
          scrollTrigger: {
            trigger: image,
            containerAnimation: horizontalTween,
            start: "left right",
            end: "right left",
            scrub: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [loaderDone]);

  return (
    <section className="projects" id="work" ref={sectionRef} aria-labelledby="work-title">
      <div className="projects-intro section-shell">
        <div className="section-heading reveal-up">
          <span className="section-kicker">Selected Work</span>
          <h2 id="work-title">Selected Digital Launches</h2>
        </div>
        <p className="reveal-up">
          Concepts and builds designed to help local businesses feel more premium, more trusted,
          and easier to enquire with.
        </p>
      </div>

      <div className="projects-window">
        <div className="projects-rail" ref={railRef}>
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.id} />
          ))}
        </div>
        <div className="projects-progress" aria-hidden="true">
          <span ref={progressRef} />
        </div>
      </div>
    </section>
  );
}

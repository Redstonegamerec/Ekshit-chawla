import { qualities } from "../data/site.js";

export default function About() {
  return (
    <section className="about section-shell" id="about" aria-labelledby="about-title">
      <div className="section-heading reveal-up">
        <span className="section-kicker">About Ekshit</span>
        <h2 id="about-title">Creative developer. Visual thinker. Business-focused builder.</h2>
      </div>

      <div className="about-grid">
        <p className="about-copy reveal-up">
          I am Ekshit Chawla, a web designer and developer from Delhi. I create modern websites for
          real businesses - not just pretty screens. My focus is simple: premium design, smooth
          animations, clear messaging, and conversion-focused structure.
        </p>

        <div className="quality-grid">
          {qualities.map((quality, index) => (
            <div className="quality-card premium-card" key={quality}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{quality}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

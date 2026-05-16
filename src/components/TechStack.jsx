import { tools } from "../data/site.js";

export default function TechStack() {
  return (
    <section className="tech section-shell" aria-labelledby="tech-title">
      <div className="section-heading reveal-up">
        <span className="section-kicker">Tools</span>
        <h2 id="tech-title">Tools I Use</h2>
      </div>

      <div className="tool-cloud" aria-label="Tools Ekshit uses">
        {tools.map((tool, index) => (
          <span className="tool-pill premium-card" style={{ "--delay": `${index * 0.04}s` }} key={tool}>
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}

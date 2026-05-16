import { projects } from "../data/projects.js";

export default function CaseStudies() {
  return (
    <section className="case-studies section-shell" aria-labelledby="case-title">
      <div className="section-heading reveal-up">
        <span className="section-kicker">Case Study Experience</span>
        <h2 id="case-title">How the work is framed</h2>
        <p>
          Each project is shaped around one business question: what should a visitor believe, feel,
          and do after landing on the website?
        </p>
      </div>

      <div className="case-list">
        {projects.map((project, index) => (
          <article
            className="case-card premium-card"
            id={`case-${project.id}`}
            key={project.id}
            style={{ "--project-accent": project.accent }}
          >
            <div className="case-visual">
              <img src={project.image} alt={`${project.name} case study preview`} loading="lazy" />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="case-copy">
              <span className="case-category">{project.category}</span>
              <h3>{project.name}</h3>
              <p>{project.tone}</p>
              <div className="case-focus">
                <strong>{project.conversionFocus}</strong>
                <span>{project.launchType}</span>
              </div>
            </div>
            <dl>
              <div>
                <dt>Problem</dt>
                <dd>{project.caseStudy.problem}</dd>
              </div>
              <div>
                <dt>Goal</dt>
                <dd>{project.caseStudy.goal}</dd>
              </div>
              <div>
                <dt>Design Direction</dt>
                <dd>{project.caseStudy.designDirection}</dd>
              </div>
              <div>
                <dt>Features</dt>
                <dd className="feature-pills">
                  {project.caseStudy.features.map((feature) => (
                    <span key={feature}>{feature}</span>
                  ))}
                </dd>
              </div>
              <div>
                <dt>Impact</dt>
                <dd>{project.caseStudy.impact}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}

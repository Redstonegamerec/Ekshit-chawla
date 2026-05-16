import MagneticButton from "./MagneticButton.jsx";

export default function ProjectCard({ project, index }) {
  return (
    <article className="project-card premium-card" style={{ "--project-accent": project.accent }}>
      <div className="project-image-wrap">
        <span className="project-case-label">Case {String(index + 1).padStart(2, "0")}</span>
        <img src={project.image} alt={`${project.name} website preview`} loading={index > 1 ? "lazy" : "eager"} />
      </div>
      <div className="project-meta">
        <span>{project.category}</span>
        <small>{project.launchType}</small>
      </div>
      <h3>{project.name}</h3>
      <p className="project-spotlight">{project.spotlight}</p>
      <div className="project-case-grid">
        <div>
          <span>Problem</span>
          <p>{project.caseStudy.problem}</p>
        </div>
        <div>
          <span>Impact</span>
          <p>{project.caseStudy.impact}</p>
        </div>
      </div>
      <div className="tag-row" aria-label={`${project.name} tags`}>
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="project-actions">
        <MagneticButton href={project.caseStudyUrl} variant="secondary">
          View Case Study
        </MagneticButton>
        <MagneticButton href={project.liveUrl} variant="ghost">
          Visit Website
        </MagneticButton>
      </div>
    </article>
  );
}

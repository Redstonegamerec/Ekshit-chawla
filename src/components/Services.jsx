import { services } from "../data/site.js";

export default function Services() {
  return (
    <section className="services section-shell" id="services" aria-labelledby="services-title">
      <div className="section-heading reveal-up">
        <span className="section-kicker">Services</span>
        <h2 id="services-title">What I Can Build</h2>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <article className="service-card premium-card" key={service.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

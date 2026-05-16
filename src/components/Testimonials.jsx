import { testimonials } from "../data/site.js";

export default function Testimonials() {
  return (
    <section className="testimonials section-shell" aria-labelledby="testimonial-title">
      <div className="section-heading reveal-up">
        <span className="section-kicker">Trust</span>
        <h2 id="testimonial-title">What clients should feel</h2>
        <p>Placeholder testimonials - edit these once real client feedback is available.</p>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <figure className="testimonial-card premium-card" key={testimonial}>
            <blockquote>"{testimonial}"</blockquote>
            <figcaption>Editable client testimonial</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

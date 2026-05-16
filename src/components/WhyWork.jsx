import { CheckCircle2 } from "lucide-react";
import { reasons } from "../data/site.js";

export default function WhyWork() {
  return (
    <section className="why section-shell" aria-labelledby="why-title">
      <div className="section-heading reveal-up">
        <span className="section-kicker">Why Work With Me</span>
        <h2 id="why-title">Why clients choose me</h2>
      </div>

      <div className="why-grid">
        {reasons.map((reason) => (
          <div className="why-item premium-card" key={reason}>
            <CheckCircle2 size={21} strokeWidth={1.7} />
            <span>{reason}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

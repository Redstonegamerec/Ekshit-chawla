import { Instagram, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import MagneticButton from "./MagneticButton.jsx";

const whatsappLink =
  "https://wa.me/919911570209?text=Hi%20Ekshit%2C%20I%20want%20a%20premium%20website%20for%20my%20business.";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <section className="contact section-shell" id="contact" aria-labelledby="contact-title">
      <div className="contact-panel">
        <div className="contact-copy reveal-up">
          <span className="section-kicker">Start a Project</span>
          <h2 id="contact-title">Let&apos;s Build Something Premium.</h2>
          <p>
            If you want a website that makes your brand look bigger, cleaner, and more trustworthy,
            let&apos;s talk.
          </p>

          <div className="contact-proof">
            <div>
              <strong>24h</strong>
              <span>Reply window</span>
            </div>
            <div>
              <strong>Clear</strong>
              <span>Website direction</span>
            </div>
            <div>
              <strong>Fast</strong>
              <span>Launch mindset</span>
            </div>
          </div>

          <div className="contact-details">
            <span>Ekshit Chawla</span>
            <a href={whatsappLink}>WhatsApp: 9911570209</a>
            <a href="mailto:Ekshit.2013056@gmail.com">Ekshit.2013056@gmail.com</a>
            <a href="https://www.instagram.com/mrchawla.ekshit" target="_blank" rel="noreferrer">
              @mrchawla.ekshit
            </a>
          </div>

          <div className="contact-actions">
            <MagneticButton href={whatsappLink} icon={false}>
              <MessageCircle size={18} strokeWidth={1.7} />
              Message on WhatsApp
            </MagneticButton>
            <MagneticButton href="mailto:Ekshit.2013056@gmail.com" variant="secondary" icon={false}>
              <Mail size={18} strokeWidth={1.7} />
              Send Email
            </MagneticButton>
            <MagneticButton
              href="https://www.instagram.com/mrchawla.ekshit"
              target="_blank"
              rel="noreferrer"
              variant="ghost"
              icon={false}
            >
              <Instagram size={18} strokeWidth={1.7} />
              View Instagram
            </MagneticButton>
          </div>
        </div>

        <form className="contact-form premium-card" onSubmit={handleSubmit}>
          <div className="form-intro form-full">
            <span>Project Brief</span>
            <p>Share the business type, goal, and budget. Ekshit can respond with the best website direction.</p>
          </div>
          <label>
            <span>Name</span>
            <input name="name" type="text" placeholder="Your name" required />
          </label>
          <label>
            <span>Business Name</span>
            <input name="business" type="text" placeholder="Brand / business name" />
          </label>
          <label>
            <span>Phone Number</span>
            <input name="phone" type="tel" placeholder="+91" required />
          </label>
          <label>
            <span>Website Type</span>
            <select name="websiteType" defaultValue="">
              <option value="" disabled>
                Select a type
              </option>
              <option>Business Website</option>
              <option>Institute Website</option>
              <option>Gym Website</option>
              <option>Interior Design Website</option>
              <option>Cafe / Booking Website</option>
              <option>Landing Page</option>
              <option>Other Premium Website</option>
            </select>
          </label>
          <label>
            <span>Budget Range</span>
            <select name="budget" defaultValue="">
              <option value="" disabled>
                Select range
              </option>
              <option>Under Rs. 10,000</option>
              <option>Rs. 10,000 - Rs. 25,000</option>
              <option>Rs. 25,000 - Rs. 50,000</option>
              <option>Rs. 50,000+</option>
            </select>
          </label>
          <label className="form-full">
            <span>Message</span>
            <textarea name="message" placeholder="Tell me what you want to build" rows="5" />
          </label>
          <button className="form-submit" type="submit">
            Send Project Enquiry
          </button>
          {submitted ? (
            <p className="form-note" role="status">
              Thanks. This demo form is ready to connect to Formspree, Firebase, Supabase, or a custom backend.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

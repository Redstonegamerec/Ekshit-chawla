export default function Footer() {
  return (
    <footer className="footer section-shell">
      <div className="footer-brand">
        <a href="#top" aria-label="Back to top">
          EC
        </a>
        <div>
          <p>Designed and built by Ekshit Chawla.</p>
          <strong>Websites That Feel Expensive.</strong>
        </div>
      </div>

      <nav className="footer-links" aria-label="Footer navigation">
        <a href="#work">Work</a>
        <a href="#services">Services</a>
        <a href="#process">Process</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="footer-contact">
        <a href="mailto:Ekshit.2013056@gmail.com">Ekshit.2013056@gmail.com</a>
        <a href="https://wa.me/919911570209">WhatsApp</a>
      </div>
    </footer>
  );
}

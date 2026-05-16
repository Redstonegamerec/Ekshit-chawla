import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import MagneticButton from "./MagneticButton.jsx";

const navItems = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("top");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = ["top", "story", "about", "services", "work", "process", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-34% 0px -52% 0px", threshold: 0.01 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-nav">
      <a className="brand-mark" href="#top" aria-label="Ekshit Chawla home">
        <span>EC</span>
        <small>Delhi</small>
      </a>

      <nav className={`nav-links ${open ? "is-open" : ""}`} aria-label="Main navigation">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={active === item.href.replace("#", "") ? "is-active" : ""}
            aria-current={active === item.href.replace("#", "") ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <MagneticButton href="#contact" variant="ghost" className="nav-cta">
          Start a Project
        </MagneticButton>
        <button
          className="nav-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}

import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

export default function MagneticButton({
  href,
  children,
  variant = "primary",
  icon = true,
  className = "",
  ...props
}) {
  const ref = useRef(null);

  const move = (event) => {
    const element = ref.current;
    if (!element || window.matchMedia("(max-width: 767px)").matches) return;

    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    element.style.transform = `translate(${x * 0.18}px, ${y * 0.24}px)`;
  };

  const reset = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0, 0)";
  };

  const classes = `magnetic-button magnetic-button--${variant} ${className}`.trim();

  if (href) {
    return (
      <a ref={ref} href={href} className={classes} onMouseMove={move} onMouseLeave={reset} {...props}>
        <span>{children}</span>
        {icon ? <ArrowUpRight size={18} strokeWidth={1.8} aria-hidden="true" /> : null}
      </a>
    );
  }

  return (
    <button ref={ref} className={classes} onMouseMove={move} onMouseLeave={reset} {...props}>
      <span>{children}</span>
      {icon ? <ArrowUpRight size={18} strokeWidth={1.8} aria-hidden="true" /> : null}
    </button>
  );
}

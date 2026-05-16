import { useState } from "react";
import About from "./components/About.jsx";
import CaseStudies from "./components/CaseStudies.jsx";
import CinematicBand from "./components/CinematicBand.jsx";
import Contact from "./components/Contact.jsx";
import CursorGlow from "./components/CursorGlow.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Loader from "./components/Loader.jsx";
import Navbar from "./components/Navbar.jsx";
import Process from "./components/Process.jsx";
import Projects from "./components/Projects.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import Services from "./components/Services.jsx";
import Story from "./components/Story.jsx";
import TechStack from "./components/TechStack.jsx";
import Testimonials from "./components/Testimonials.jsx";
import WhyWork from "./components/WhyWork.jsx";
import { useLenis } from "./hooks/useLenis.js";
import { useRevealAnimations } from "./hooks/useRevealAnimations.js";

export default function App() {
  const [loaderDone, setLoaderDone] = useState(false);

  useLenis(loaderDone);
  useRevealAnimations(loaderDone);

  return (
    <>
      {!loaderDone ? <Loader onComplete={() => setLoaderDone(true)} /> : null}
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main id="top">
        <Hero loaderDone={loaderDone} />
        <Story loaderDone={loaderDone} />
        <CinematicBand />
        <About />
        <Services />
        <Projects loaderDone={loaderDone} />
        <CaseStudies />
        <Process />
        <WhyWork />
        <TechStack />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

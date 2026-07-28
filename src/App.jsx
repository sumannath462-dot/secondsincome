import { useEffect } from "react";
import AOS from "aos";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Process from "./components/Process";
import About from "./components/About";
import ContactCTA from "./components/ContactCTA";
import ContactForm from "./components/ContactForm";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Services />
      <Portfolio />
      <Pricing />
      <Process />
      <About />
      <ContactCTA />
      <ContactForm />
      <Testimonials />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
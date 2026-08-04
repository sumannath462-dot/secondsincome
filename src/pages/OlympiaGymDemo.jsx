import Navbar from "../components/olympia/Navbar";
import Hero from "../components/olympia/Hero";
import Facilities from "../components/olympia/Facilities";
import Membership from "../components/olympia/Membership";
import Testimonials from "../components/olympia/Testimonials";
import Gallery from "../components/olympia/Gallery";
import ContactCTA from "../components/olympia/ContactCTA";
import ContactForm from "../components/olympia/ContactForm";
import Footer from "../components/olympia/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function OlympiaGymDemo() {
  return (
    <>
      <Navbar />
      <Hero />
      <Facilities />
      <Membership />
      <Testimonials />
      <Gallery />
      <ContactCTA />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import WhoWeAreSection from "@/components/who-we-are-section"
import ServicesSection from "@/components/services-section"
import WhatWeDoSection from "@/components/what-we-do-section"
import TechnologyStackSection from "@/components/technology-stack-section"
import TestimonialsSection from "@/components/testimonials-section"
import BlogSection from "@/components/blog-section"
import FAQSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100">
      <Header />
      <div id="hero" className="pt-16">
        <HeroSection />
      </div>
      <div id="about">
        <WhoWeAreSection />
      </div>
      <div id="services">
        <ServicesSection />
        <WhatWeDoSection />
        <TechnologyStackSection />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="blog">
        <BlogSection />
        <FAQSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}

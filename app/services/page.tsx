import Header from "@/components/header"
import Footer from "@/components/footer"
import ServicesSection from "@/components/services-section"
import WhatWeDoSection from "@/components/what-we-do-section"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6 text-balance">
              Our <span className="text-orange-500">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Comprehensive DevOps and cloud consulting services to accelerate your digital transformation.
            </p>
          </div>
        </div>
        <ServicesSection />
        <WhatWeDoSection />
      </main>
      <Footer />
    </div>
  )
}

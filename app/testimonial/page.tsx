import Header from "@/components/header"
import Footer from "@/components/footer"
import TestimonialsSection from "@/components/testimonials-section"

export default function TestimonialPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6 text-balance">
              Client <span className="text-orange-500">Testimonials</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Hear what our clients say about their experience working with CLOUDLEM.
            </p>
          </div>
        </div>
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}

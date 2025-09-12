import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactSection from "@/components/contact-section"

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6 text-balance">
              Get In <span className="text-orange-500">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Ready to transform your business with our DevOps expertise? Let's start the conversation.
            </p>
          </div>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

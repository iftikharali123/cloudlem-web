import Header from "@/components/header"
import Footer from "@/components/footer"
import WhoWeAreSection from "@/components/who-we-are-section"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6 text-balance">
              About <span className="text-orange-500">CLOUDLEM</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Learn more about our journey, mission, and the team behind CLOUDLEM's success in DevOps consulting.
            </p>
          </div>
        </div>
        <WhoWeAreSection />
      </main>
      <Footer />
    </div>
  )
}

import Header from "@/components/header"
import Footer from "@/components/footer"
import BlogSection from "@/components/blog-section"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6 text-balance">
              Latest <span className="text-orange-500">Insights</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Stay updated with the latest trends, tips, and insights from the world of DevOps and cloud computing.
            </p>
          </div>
        </div>
        <BlogSection />
      </main>
      <Footer />
    </div>
  )
}

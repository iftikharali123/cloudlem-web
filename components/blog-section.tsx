"use client"

import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    id: 1,
    title: "The ultimate guide to DevOps",
    image: "/coding-setup-with-multiple-monitors-and-developmen.jpg",
    date: "2024 MARCH",
  },
  {
    id: 2,
    title: "Devops Consultancy",
    image: "/hands-working-on-laptop-with-charts-and-analytics.jpg",
    date: "2024 MARCH",
  },
  {
    id: 3,
    title: "Deployment",
    image: "/development-workspace-with-dual-monitors-and-codin.jpg",
    date: "2024 MARCH",
  },
  {
    id: 4,
    title: "The definitive guide to UX/UI",
    image: "/clean-workspace-with-design-materials-and-ux-ui-to.jpg",
    date: "2024 MARCH",
  },
]

export default function BlogSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-gray-400 text-sm font-medium tracking-wider uppercase">BLOGS</span>
            <div className="h-px bg-orange-500 w-16"></div>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-2">GET LATEST ABOUT THE COMPANY</h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {blogPosts.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs text-gray-600 font-medium">
                    {post.date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                    {post.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <div className="text-center">
          <Button
            variant="outline"
            className="border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white px-8 py-2 rounded-md font-medium transition-all duration-300 bg-transparent"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}

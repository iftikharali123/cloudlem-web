"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    text: "I've worked with Cloudlem's Engineer Rehmat on two separate projects and have been really pleased with the results each times! I originally recruited him to assist with what I thought were easy web development concerns, but both turned out to be much more difficult jobs that much surpassed my area of competence.",
    author: "Client Name",
    company: "Company Name",
  },
  {
    id: 2,
    text: "Cloudlem's team delivered exceptional results for our cloud migration project. Their expertise in DevOps and infrastructure management helped us reduce costs by 40% while improving system reliability. The communication throughout the project was outstanding.",
    author: "Sarah Johnson",
    company: "Tech Solutions Inc.",
  },
]

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-gray-400 text-sm font-medium tracking-wider uppercase">TESTIMONIALS</span>
            <div className="h-px bg-orange-500 w-16"></div>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-8">TESTIMONIALS</h2>
        </div>

        {/* Testimonial Content */}
        <div className="relative">
          {/* Pagination */}
          <div className="absolute top-0 right-0 text-sm text-gray-500">
            {currentTestimonial + 1} of {testimonials.length}
          </div>

          {/* Testimonial Header */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">A Word From Our Customer</h3>
            <p className="text-gray-600 text-lg">we've been helping businesses since 2020.</p>
          </div>

          {/* Testimonial Text */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8 mb-8 min-h-[200px] flex items-center">
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                {testimonials[currentTestimonial].text}
              </p>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? "bg-orange-500" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Mail, Phone, CheckCircle, AlertCircle } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: data.message || "Thank you for your message! We will get back to you soon.",
        })
        // Reset form on success
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Something went wrong. Please try again.",
        })
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-br from-background via-card to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_3px_3px,_theme(colors.accent)_3px,_transparent_0)] bg-[size:60px_60px] animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 animate-slide-up">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-muted text-sm font-medium tracking-wider uppercase">CONTACT</span>
            <div className="h-px bg-accent w-16"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 hover-lift">CONTACT US</h2>
          <p className="text-muted text-lg">we are here for you! How can we help?</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="space-y-6 card-3d bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50">
            {submitStatus.type && (
              <div
                className={`p-4 rounded-xl flex items-center gap-3 ${
                  submitStatus.type === "success"
                    ? "bg-green-50 border border-green-200 text-green-800"
                    : "bg-red-50 border border-red-200 text-red-800"
                }`}
              >
                {submitStatus.type === "success" ? (
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                )}
                <p className="text-sm font-medium">{submitStatus.message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Full-Name..."
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 hover-lift text-foreground placeholder:text-muted"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Valid Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 hover-lift text-foreground placeholder:text-muted"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 hover-lift text-foreground placeholder:text-muted"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message here..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-6 py-4 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-none hover-lift text-foreground placeholder:text-muted"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-3d px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg flex items-center justify-center gap-2 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-accent hover:bg-accent/90 text-accent-foreground"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Illustration and Contact Info */}
          <div className="relative">
            {/* Illustration */}
            <div className="relative mb-12 animate-float">
              <div className="absolute inset-0 bg-accent/10 rounded-full w-80 h-80 mx-auto animate-pulse"></div>
              <div className="relative z-10 flex justify-center">
                <img
                  src="/professional-woman-in-orange-top-holding-document.jpg"
                  alt="Professional woman holding document"
                  className="w-64 h-64 object-cover rounded-full img-3d shadow-2xl"
                />
              </div>
              {/* Decorative elements */}
              <div
                className="absolute top-10 right-10 w-16 h-16 bg-accent/20 backdrop-blur-sm rounded-2xl card-3d animate-float"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute bottom-10 left-10 w-12 h-12 bg-accent/30 backdrop-blur-sm rounded-full card-3d animate-float"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 hover-lift">
                <div className="w-12 h-12 bg-accent/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 btn-3d">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Address</p>
                  <p className="text-muted text-sm leading-relaxed">
                    2ND FLOOR BAKHTAWAR-SHAH PLAZA,
                    <br />
                    ZULFIQARABAD JUTIAL, GILGIT 15100
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 hover-lift">
                <div className="w-12 h-12 bg-accent/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 btn-3d">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Email</p>
                  <p className="text-muted text-sm">contact@cloudlem.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 hover-lift">
                <div className="w-12 h-12 bg-accent/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 btn-3d">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Phone</p>
                  <p className="text-muted text-sm">0355-4502615</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

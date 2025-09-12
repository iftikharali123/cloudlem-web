"use client"

import type React from "react"

import { useState } from "react"
import { Linkedin, Twitter, Instagram, Facebook, ArrowRight } from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email)
    setEmail("")
  }

  return (
    <footer className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 via-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>
            </div>
          </div>

          {/* Cloudlem Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Cloudlem</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* Resource Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Resource</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                  FAQ'S
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Career
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Join Our Community */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Join Our Community
              <span className="text-orange-500 ml-1">🔥</span>
            </h3>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="bg-orange-500 text-white px-4 py-2 rounded-r-full hover:bg-orange-600 transition-colors flex items-center justify-center"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-300 text-center">
          <p className="text-gray-600 mb-2">
            © Copyright <span className="font-semibold">CLOUDLEM</span>. All Rights Reserved
          </p>
          <p className="text-sm text-gray-500">
            Designed by{" "}
            <a href="mailto:Development@CLOUDLEM.COM" className="text-orange-500 hover:underline">
              Development@CLOUDLEM.COM
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

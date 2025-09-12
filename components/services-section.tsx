"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const services = [
  {
    id: "devops",
    title: "DevOps & DevSecOps Engineers",
    icon: "•••",
    content: {
      heading: "DevOps and DevSecOps Engineers.",
      description: [
        "DevOps is a set of practices tools and a cultural philosophy that automates and integrates the processes between software development and IT teams. It emphasizes team empowerment, cross-team communication and collaboration, and technology automation.",
        "DevSecOps engineers are the professionals responsible for bringing development, security, and operations together to enhance the security stance of the organization. They monitor and automate security processes and test systems. This results in the protection of data and information technology (IT) infrastructure.",
      ],
      keyDuties: "Key duties of DevSecOps engineers:",
    },
  },
  {
    id: "reliability",
    title: "Site Reliability Engineers",
    icon: "👤",
    content: {
      heading: "Site Reliability Engineers.",
      description: [
        "Site Reliability Engineers (SREs) are responsible for keeping all user-facing services and other production systems running smoothly. SREs apply sound engineering principles, operational discipline, and mature automation to operate production systems and services.",
        "They bridge the gap between development and operations by applying a software engineering mindset to system administration topics.",
      ],
      keyDuties: "Key responsibilities of SRE:",
    },
  },
  {
    id: "cloud",
    title: "Cloud Consultants",
    icon: "⚙️",
    content: {
      heading: "Cloud Consultants.",
      description: [
        "Cloud consultants help organizations migrate to and optimize their cloud infrastructure. They provide expertise in cloud architecture, security, and cost optimization across various cloud platforms.",
        "They work closely with clients to understand their business needs and design scalable, secure, and cost-effective cloud solutions.",
      ],
      keyDuties: "Key areas of cloud consulting:",
    },
  },
  {
    id: "architecture",
    title: "Software Architectures",
    icon: "💼",
    content: {
      heading: "Software Architects.",
      description: [
        "Software architects design and oversee the implementation of software systems. They make high-level design choices and define technical standards, including software coding standards, tools, and platforms.",
        "They ensure that the software architecture aligns with business requirements and can scale to meet future needs.",
      ],
      keyDuties: "Key responsibilities of software architects:",
    },
  },
]

export default function ServicesSection() {
  const [activeService, setActiveService] = useState("devops")
  const currentService = services.find((service) => service.id === activeService)

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Service Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={`p-6 rounded-lg border-2 text-left transition-all duration-300 ${
                activeService === service.id
                  ? "border-orange-500 bg-orange-50"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{service.icon}</span>
                <h3 className="font-semibold text-gray-800 text-sm leading-tight">{service.title}</h3>
              </div>
            </button>
          ))}
        </div>

        {/* Service Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">{currentService?.content.heading}</h2>

            <div className="space-y-4">
              {currentService?.content.description.map((paragraph, index) => (
                <p key={index} className="text-gray-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex items-center gap-2 text-gray-800 font-semibold">
              <span>{currentService?.content.keyDuties}</span>
              <ChevronDown className="w-5 h-5 text-orange-500" />
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <img
                src="/professional-woman-in-green-top-pointing-at-comput.jpg"
                alt="Professional presenting analytics dashboard"
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

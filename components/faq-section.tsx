"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What is Devops?",
    answer:
      "DevOps is a set of practices, tools, and a cultural philosophy that automates and integrates the processes between software development and IT teams. It emphasizes team empowerment, cross-team communication and collaboration, and technology automation.",
  },
  {
    question: "What services do you offer in Devops?",
    answer:
      "We offer comprehensive DevOps services including CI/CD pipeline setup, infrastructure automation, cloud migration, containerization with Docker and Kubernetes, monitoring and logging solutions, security integration, and 24/7 managed services.",
  },
  {
    question: "What is Continuous Integration and Continuous Delivery (CI/CD)?",
    answer:
      "CI/CD is a method to frequently deliver apps to customers by introducing automation into the stages of app development. CI focuses on automatically building and testing code changes, while CD automates the deployment process to various environments.",
  },
  {
    question: "What is Infrastructure as Code?",
    answer:
      "Infrastructure as Code (IaC) is the practice of managing and provisioning computing infrastructure through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools. This enables version control, testing, and automation of infrastructure.",
  },
  {
    question: "What are the benefits of using Devops for cloud management?",
    answer:
      "DevOps for cloud management provides scalability, cost optimization, improved security, faster deployment cycles, better resource utilization, automated backup and disaster recovery, and enhanced monitoring and alerting capabilities.",
  },
  {
    question: "What are the benefits of monitoring and logging in Devops?",
    answer:
      "Monitoring and logging provide real-time visibility into system performance, enable proactive issue detection, facilitate faster troubleshooting, support capacity planning, ensure compliance, and help maintain high availability and reliability of services.",
  },
  {
    question: "How does Devops improve security?",
    answer:
      "DevOps improves security through DevSecOps practices, integrating security testing into CI/CD pipelines, automated vulnerability scanning, infrastructure as code security policies, continuous compliance monitoring, and shift-left security approaches.",
  },
  {
    question: "What is the difference between UI and UX design?",
    answer:
      "UI (User Interface) design focuses on the visual elements and interactive components of a product, while UX (User Experience) design encompasses the overall experience and journey a user has with a product, including research, wireframing, and usability testing.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-gray-400 text-sm font-medium tracking-wider uppercase">F.A.Q</span>
            <div className="h-px bg-orange-500 w-16"></div>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-8">FREQUENTLY ASKED QUESTIONS</h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-orange-500 font-medium text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-orange-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-orange-500 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 pt-2 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

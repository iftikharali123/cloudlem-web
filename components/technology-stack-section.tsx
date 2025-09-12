"use client"

import { useState } from "react"

const technologyData = {
  FrontEnd: [
    { name: "React", icon: "⚛️", color: "text-blue-500" },
    { name: "Angular", icon: "🅰️", color: "text-red-500" },
    { name: "Bootstrap", icon: "🅱️", color: "text-purple-500" },
    { name: "CSS3", icon: "🎨", color: "text-blue-600" },
    { name: "HTML5", icon: "🌐", color: "text-orange-500" },
    { name: "jQuery", icon: "💫", color: "text-blue-400" },
    { name: "JavaScript", icon: "🟨", color: "text-yellow-500" },
    { name: "Tailwind", icon: "🌊", color: "text-teal-500" },
    { name: "Vue.js", icon: "💚", color: "text-green-500" },
    { name: "Redux", icon: "🔄", color: "text-purple-600" },
  ],
  BackEnd: [
    { name: "Node.js", icon: "🟢", color: "text-green-600" },
    { name: "Python", icon: "🐍", color: "text-blue-500" },
    { name: "Java", icon: "☕", color: "text-orange-600" },
    { name: "PHP", icon: "🐘", color: "text-purple-500" },
    { name: "Ruby", icon: "💎", color: "text-red-500" },
    { name: "Go", icon: "🔵", color: "text-blue-400" },
    { name: "C#", icon: "🔷", color: "text-purple-600" },
    { name: ".NET", icon: "🔹", color: "text-blue-600" },
  ],
  Cloud: [
    { name: "AWS", icon: "☁️", color: "text-orange-500" },
    { name: "Azure", icon: "🔷", color: "text-blue-500" },
    { name: "Google Cloud", icon: "🌤️", color: "text-blue-400" },
    { name: "DigitalOcean", icon: "🌊", color: "text-blue-600" },
    { name: "Heroku", icon: "🟣", color: "text-purple-500" },
    { name: "Vercel", icon: "▲", color: "text-black" },
    { name: "Netlify", icon: "🔺", color: "text-teal-500" },
  ],
  DevOps: [
    { name: "Docker", icon: "🐳", color: "text-blue-500" },
    { name: "Kubernetes", icon: "⚙️", color: "text-blue-600" },
    { name: "Jenkins", icon: "🔧", color: "text-blue-400" },
    { name: "GitLab CI", icon: "🦊", color: "text-orange-500" },
    { name: "GitHub Actions", icon: "🐙", color: "text-gray-700" },
    { name: "Terraform", icon: "🏗️", color: "text-purple-500" },
    { name: "Ansible", icon: "🔴", color: "text-red-500" },
  ],
  DataBase: [
    { name: "MySQL", icon: "🐬", color: "text-blue-500" },
    { name: "PostgreSQL", icon: "🐘", color: "text-blue-600" },
    { name: "MongoDB", icon: "🍃", color: "text-green-500" },
    { name: "Redis", icon: "🔴", color: "text-red-500" },
    { name: "SQLite", icon: "💾", color: "text-blue-400" },
    { name: "Oracle", icon: "🔶", color: "text-red-600" },
    { name: "Cassandra", icon: "🗄️", color: "text-blue-500" },
  ],
}

export default function TechnologyStackSection() {
  const [activeTab, setActiveTab] = useState("FrontEnd")

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-gray-400 text-sm font-medium tracking-wider uppercase">TECHNOLOGIES</span>
            <div className="h-px bg-orange-500 w-16"></div>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 text-balance">TECHNOLOGY STACK</h2>
        </div>

        {/* Technology Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            {Object.keys(technologyData).map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-8 py-3 rounded-lg border-2 font-medium transition-all duration-300 ${
                  activeTab === category
                    ? "border-orange-500 bg-orange-50 text-orange-600"
                    : "border-gray-200 bg-white text-gray-600 hover:border-orange-300 hover:bg-orange-25"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Technology Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 gap-8">
          {technologyData[activeTab as keyof typeof technologyData].map((tech, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer">
              <div className="w-16 h-16 flex items-center justify-center text-3xl mb-3 rounded-lg bg-gray-50 group-hover:bg-orange-50 transition-all duration-300 group-hover:scale-110">
                <span className={tech.color}>{tech.icon}</span>
              </div>
              <span className="text-sm font-medium text-gray-700 text-center group-hover:text-orange-600 transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

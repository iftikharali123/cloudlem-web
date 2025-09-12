import { Network, Cloud, Monitor, Server, Database, Settings } from "lucide-react"

const services = [
  {
    icon: Network,
    title: "DevOps Cycle",
  },
  {
    icon: Cloud,
    title: "Hybrid Multi Cloud Services",
  },
  {
    icon: Monitor,
    title: "Product Design Development",
  },
  {
    icon: Server,
    title: "Server Management",
  },
  {
    icon: Database,
    title: "Database Administration",
  },
  {
    icon: Settings,
    title: "Cloud Managed Services",
  },
]

export default function WhatWeDoSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-card to-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,_theme(colors.accent)_2px,_transparent_0)] bg-[size:40px_40px] animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-slide-up">
          <p className="text-muted text-sm font-medium tracking-wider uppercase mb-4 relative">
            SERVICES
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-accent"></span>
          </p>
          <h2 className="text-4xl font-bold text-foreground mb-8 hover-lift">WHAT WE DO</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-3d bg-card/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-border/50 group relative overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-2xl bg-accent/10 group-hover:bg-accent/20 transition-all duration-300 btn-3d">
                    <service.icon
                      className="w-12 h-12 text-accent group-hover:scale-110 transition-transform duration-300"
                      strokeWidth={2}
                    />
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-card-foreground leading-tight group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

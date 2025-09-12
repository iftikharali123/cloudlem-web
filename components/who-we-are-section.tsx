import { Button } from "@/components/ui/button"

export default function WhoWeAreSection() {
  return (
    <section id="about" className="py-16 px-4 bg-gradient-to-br from-background to-card relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_theme(colors.accent)_1px,_transparent_0)] bg-[size:20px_20px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12 text-center animate-slide-up">
          <p className="text-muted text-sm font-medium tracking-wider uppercase mb-2 relative">
            ABOUT
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-accent"></span>
          </p>
          <h2 className="text-4xl font-bold text-foreground mb-8 hover-lift">WHO WE ARE</h2>
        </div>

        {/* Two Column Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left Column */}
          <div className="space-y-6 card-3d bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50">
            <div className="flex items-start gap-3 hover-lift">
              <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0 neon-glow animate-pulse"></div>
              <p className="text-card-foreground leading-relaxed">
                Cloudlem is an emerging DevOps consulting company with a wealth of experience in supporting customers
                globally to implement DevOps practices.
              </p>
            </div>

            <div className="flex items-start gap-3 hover-lift">
              <div
                className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0 neon-glow animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <p className="text-card-foreground leading-relaxed">
                Cloudlem's expertise includes cloud migration, maintenance, and supporting customers in building
                scalable and highly available architecture on well-known cloud service providers such as AWS, Azure,
                GCP, and more
              </p>
            </div>

            <div className="flex items-start gap-3 hover-lift">
              <div
                className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0 neon-glow animate-pulse"
                style={{ animationDelay: "0.4s" }}
              ></div>
              <p className="text-card-foreground leading-relaxed">
                The company's services include deployment, automation, infrastructure, dockerization, security recovery
                planning, and execution to benefit its customers.
              </p>
            </div>

            <div className="flex items-start gap-3 hover-lift">
              <div
                className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0 neon-glow animate-pulse"
                style={{ animationDelay: "0.6s" }}
              ></div>
              <p className="text-card-foreground leading-relaxed">
                Cloudlem offers 24/7 managed services with a 10-minute SLA, providing customers with timely and
                efficient support.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 card-3d bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50">
            <div className="flex items-start gap-3 hover-lift">
              <div
                className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0 neon-glow animate-pulse"
                style={{ animationDelay: "0.8s" }}
              ></div>
              <p className="text-card-foreground leading-relaxed">
                Cloudlem has a team of talented and experienced engineers who are passionate about helping clients
                succeed in the ever-evolving world of technology.
              </p>
            </div>

            <div className="flex items-start gap-3 hover-lift">
              <div
                className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0 neon-glow animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <p className="text-card-foreground leading-relaxed">
                The company helps various organizations transform by utilizing data, analytics, and the cloud.
              </p>
            </div>

            <div className="flex items-start gap-3 hover-lift">
              <div
                className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0 neon-glow animate-pulse"
                style={{ animationDelay: "1.2s" }}
              ></div>
              <p className="text-card-foreground leading-relaxed">
                Cloudlem's goal is to help clients automate their manual processes using DevOps tools and techniques to
                exceed their expectations.
              </p>
            </div>

            <div className="flex items-start gap-3 hover-lift">
              <div
                className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0 neon-glow animate-pulse"
                style={{ animationDelay: "1.4s" }}
              ></div>
              <p className="text-card-foreground leading-relaxed">
                In addition, Cloudlem offers a cloud infrastructure consulting service to help clients manage their
                applications.
              </p>
            </div>
          </div>
        </div>

        {/* Learn More Button */}
        <div className="text-center">
          <Button
            variant="outline"
            className="btn-3d px-8 py-4 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-medium bg-transparent rounded-xl shadow-lg"
          >
            Learn More
            <svg className="inline-block ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
        </div>

        {/* Floating Chat Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <button className="w-14 h-14 bg-accent hover:bg-accent/90 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 btn-3d animate-pulse">
            <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

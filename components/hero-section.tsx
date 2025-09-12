import TechIcons from "@/components/tech-icons"

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden parallax-container bg-gradient-to-br from-background via-card to-background"
    >
      {/* Tech Icons Background */}
      <TechIcons />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 depth-2 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground hover-lift">
                Welcome To{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-secondary to-accent neon-glow">
                  CLOUDLEM
                </span>
              </h1>

              <div className="space-y-4 text-muted leading-relaxed">
                <p className="text-lg">
                  <span className="font-semibold text-accent">CLOUDLEM</span> facilitates you to get brand new features
                  and products to market with a faster delivery and few bugs. It boosts the customer experience and
                  greater saving that can be invested somewhere else in business. It optimizes cloud implementations and
                  minimizes costs while improving reliability.
                </p>
              </div>

              <div className="pt-6">
                <button className="btn-3d bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                  Get Started Today
                  <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative depth-3">
            <div className="relative z-10 flex justify-center">
              {/* Main illustration container */}
              <div className="relative animate-float">
                {/* Person working on laptop */}
                <div className="relative">
                  <img
                    src="/person-working-on-laptop-with-orange-shirt-and-blu.jpg"
                    alt="Person working on laptop"
                    className="w-full max-w-md img-3d rounded-2xl shadow-2xl"
                  />
                </div>

                {/* Infinity symbol with icons */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-glow">
                  <div className="relative w-32 h-16">
                    {/* Infinity symbol background */}
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-destructive to-chart-4 rounded-full transform rotate-45 shadow-lg"
                      style={{ clipPath: "polygon(0% 40%, 60% 40%, 60% 60%, 0% 60%)" }}
                    ></div>
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-destructive to-chart-4 rounded-full transform -rotate-45 shadow-lg"
                      style={{ clipPath: "polygon(40% 0%, 100% 0%, 100% 100%, 40% 100%)" }}
                    ></div>

                    {/* Play button icon */}
                    <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-chart-3 rounded-full flex items-center justify-center btn-3d">
                      <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>

                    {/* Gear icon */}
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center btn-3d">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Floating tech elements */}
                <div
                  className="absolute -top-10 -right-10 w-16 h-12 bg-chart-3/20 backdrop-blur-sm rounded-lg flex items-center justify-center card-3d animate-float"
                  style={{ animationDelay: "0.5s" }}
                >
                  <svg className="w-8 h-6 text-chart-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                  </svg>
                </div>

                <div
                  className="absolute -bottom-5 -left-10 w-14 h-10 bg-chart-2/20 backdrop-blur-sm rounded-lg flex items-center justify-center card-3d animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <svg className="w-6 h-6 text-chart-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H7V4h10v16z" />
                  </svg>
                </div>

                <div
                  className="absolute top-5 -left-5 w-12 h-12 bg-accent/20 backdrop-blur-sm rounded-full flex items-center justify-center card-3d animate-float"
                  style={{ animationDelay: "1.5s" }}
                >
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle2, ArrowRight } from "lucide-react"

const PathwaySpotlight = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const features = [
    { text: "Guided IR1 / IR2 / IR5 flows", subtext: "with contextual tips." },
    { text: "Document checklists", subtext: "auto-generated from your profile." },
    { text: "Form assistance", subtext: "(coming soon) to reduce errors and delays." },
    { text: "Milestone tracking", subtext: "from USCIS to NVC to interview." },
  ]

  const journeySteps = [
    "Petition",
    "USCIS",
    "NVC",
    "Interview",
    "Visa",
    "Arrival & Documents",
  ]

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-blue-950 py-20 px-4 sm:px-6 lg:px-8 text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            IR Pathway Spotlight —{" "}
            <span className="text-blue-400">Family Reunification</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            We&apos;re starting where impact is highest: helping families reunite
            from{" "}
            <span className="text-blue-400 font-semibold">Pakistan → U.S.</span>
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* What's Included Card */}
          <div
            className={`group relative transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative bg-blue-900/40 backdrop-blur-md border border-blue-700/50 rounded-2xl p-8 shadow-xl shadow-blue-900/40 hover:shadow-blue-700/50 transition-all duration-500 hover:scale-[1.02] overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-1 w-12 bg-blue-400 rounded-full" />
                  <h2 className="text-sm font-semibold text-blue-400 tracking-wider uppercase">
                    What&apos;s Included
                  </h2>
                </div>

                <ul className="space-y-6">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-4 transition-all duration-500"
                      style={{
                        transitionDelay: `${(index + 1) * 150}ms`,
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                      }}
                    >
                      <div className="flex-shrink-0 mt-1 relative">
                        <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-md" />
                        <CheckCircle2 className="relative h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <span className="font-semibold text-white">{feature.text}</span>{" "}
                        <span className="text-gray-400">{feature.subtext}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* High-Level Journey Card */}
          <div
            className={`group relative transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative bg-blue-900/40 backdrop-blur-md border border-blue-700/50 rounded-2xl p-8 shadow-xl shadow-blue-900/40 hover:shadow-blue-700/50 transition-all duration-500 hover:scale-[1.02] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-1 w-12 bg-blue-400 rounded-full" />
                  <h2 className="text-sm font-semibold text-blue-400 tracking-wider uppercase">
                    High-Level Journey
                  </h2>
                </div>

                <div className="border border-dashed border-blue-700/50 rounded-lg p-6 mb-6 bg-blue-950/40">
                  <div className="flex flex-wrap items-center gap-3">
                    {journeySteps.map((step, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3"
                        style={{
                          animation: isVisible
                            ? `fade-in 0.5s ease-out ${(index + 1) * 100}ms backwards`
                            : "none",
                        }}
                      >
                        <span className="text-sm md:text-base text-gray-300 hover:text-white transition-colors duration-300 whitespace-nowrap">
                          {step}
                        </span>
                        {index < journeySteps.length - 1 && (
                          <ArrowRight className="h-4 w-4 text-blue-400/60 flex-shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <p
                  className={`text-gray-400 leading-relaxed transition-all duration-700 delay-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                >
                  Arachne keeps you on track with reminders, checklists, and clear next steps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PathwaySpotlight

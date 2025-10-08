"use client"
import { useEffect, useRef, useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

const PathwaySpotlight = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      text: "Guided IR1 / IR2 / IR5 flows",
      subtext: "with contextual tips.",
    },
    {
      text: "Document checklists",
      subtext: "auto-generated from your profile.",
    },
    {
      text: "Form assistance",
      subtext: "(coming soon) to reduce errors and delays.",
    },
    {
      text: "Milestone tracking",
      subtext: "from USCIS to NVC to interview.",
    },
  ];

  const journeySteps = [
    "Petition",
    "USCIS",
    "NVC",
    "Interview",
    "Visa",
    "Arrival & Documents",
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            IR Pathway Spotlight —{" "}
            <span className="text-primary">Family Reunification</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We&apos;re starting where impact is highest: helping families reunite
            from{" "}
            <span className="text-primary font-semibold">Pakistan → U.S.</span>
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* What's Included Card */}
          <div
            className={`group relative transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative bg-card border border-border rounded-xl p-8 shadow-card hover:shadow-glow transition-all duration-500 hover:scale-[1.02] overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-1 w-12 bg-primary rounded-full" />
                  <h2 className="text-sm font-semibold text-primary tracking-wider uppercase">
                    What&apos;s Included
                  </h2>
                </div>

                <ul className="space-y-6">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className={`flex items-start gap-4 transition-all duration-500`}
                      style={{
                        transitionDelay: `${(index + 1) * 150}ms`,
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                          ? "translateX(0)"
                          : "translateX(-20px)",
                      }}
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="relative">
                          <div className="absolute inset-0 bg-primary/20 rounded-full blur-md" />
                          <CheckCircle2 className="relative h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <div>
                        <span className="text-foreground font-semibold">
                          {feature.text}
                        </span>{" "}
                        <span className="text-muted-foreground">
                          {feature.subtext}
                        </span>
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
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative bg-card border border-border rounded-xl p-8 shadow-card hover:shadow-glow transition-all duration-500 hover:scale-[1.02] overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-1 w-12 bg-primary rounded-full" />
                  <h2 className="text-sm font-semibold text-primary tracking-wider uppercase">
                    High-Level Journey
                  </h2>
                </div>

                {/* Journey Flow */}
                <div className="border border-dashed border-border/50 rounded-lg p-6 mb-6 bg-background/50">
                  <div className="flex flex-wrap items-center gap-3">
                    {journeySteps.map((step, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3"
                        style={{
                          animation: isVisible
                            ? `fade-in 0.5s ease-out ${
                                (index + 1) * 100
                              }ms backwards`
                            : "none",
                        }}
                      >
                        <span className="text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors duration-300 whitespace-nowrap">
                          {step}
                        </span>
                        {index < journeySteps.length - 1 && (
                          <ArrowRight className="h-4 w-4 text-primary/60 flex-shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p
                  className={`text-muted-foreground leading-relaxed transition-all duration-700 delay-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                >
                  Arachnie keeps you on track with reminders, checklists, and
                  clear next steps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathwaySpotlight;

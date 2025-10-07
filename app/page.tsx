"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import AboutSection from "@/components/AboutSection";
import VisaCategoriesSection from "@/components/VisaCategoriesSection";

export default function Home() {
  const router = useRouter();
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1 } });

      tl.from(".hero-badge", { y: -30, opacity: 0 })
        .from(".hero-title", { y: 20, opacity: 0 }, "-=0.4")
        .from(".hero-desc", { y: 20, opacity: 0 }, "-=0.5")
        .from(".hero-buttons", { y: 30, opacity: 0, stagger: 0.2 }, "-=0.4");
    }, heroRef);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <main className="w-full" ref={heroRef}>
      {/* ================= HERO SECTION ================= */}
      <section className="flex flex-col items-start text-center my-24 px-6 max-w-4xl mx-auto">
        <h2 className="hero-badge text-sm text-gray-600 uppercase tracking-widest border border-gray-600 px-3 py-1 rounded-full">
          Intelligence That Moves You Forward
        </h2>

        <h1 className="hero-title text-3xl md:text-4xl font-bold mt-4">
          AI-Powered Global Mobility — Your Personal Immigration Consultant
        </h1>

        <p className="hero-desc text-gray-400 max-w-[90%] mt-4">
          Arachnie is an agentic AI platform that guides people across borders —
          from visa selection and form-filling to arrival, documents, and settling in.
          Phase 1 focuses on Pakistan → U.S. (IR category) with expansion to student,
          business, work, and visitor pathways.
        </p>

        <div className="hero-buttons mt-8 flex gap-4">
          <button
            onClick={() => router.push("/chat")}
            className="bg-gradient-to-r from-[#A5F871] to-[#3DDCFF] text-black px-6 py-3 rounded-full font-semibold hover:opacity-90 cursor-pointer"
          >
            Chat Demo (Preview)
          </button>

          <button className="border border-gray-600 px-6 py-3 rounded-full hover:bg-gray-800">
            Learn More
          </button>
        </div>
      </section>

      <hr className="border-gray-700 my-12" />

      {/* ================= ABOUT SECTION ================= */}
      <AboutSection />

      <hr className="border-gray-700 my-12" />

      {/* ================= VISA CATEGORIES SECTION ================= */}
      <VisaCategoriesSection />

      <hr className="border-gray-700 my-12" />
    </main>
  );
}

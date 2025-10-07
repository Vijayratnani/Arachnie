"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VisaCategoriesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(".visa-header", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Cards animation with stagger
      gsap.from(".visa-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 60,
        opacity: 0,
        duration: 1.1,
        stagger: 0.25,
        ease: "power2.out",
      });

      // CTA button animation
      gsap.from(".visa-cta", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="my-28 px-6 text-center max-w-6xl mx-auto visa-section"
    >
      {/* ======= Section Header ======= */}
      <div className="visa-header flex flex-col md:flex-row md:items-center md:justify-between mb-12 space-y-4 md:space-y-0">
        <h2 className="text-3xl font-bold mb-2">Visa Categories</h2>
        <p className="text-gray-400 md:max-w-lg">
          From IR family visas to student and work pathways — expanding fast
          from our first corridor.
        </p>
      </div>

      {/* ======= Cards Grid ======= */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="visa-card bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 text-left border border-gray-700 shadow-lg">
          <h3 className="text-blue-400 text-sm font-semibold uppercase mb-3">
            Current Focus
          </h3>
          <h4 className="text-xl font-semibold mb-2">IR (Immediate Relative)</h4>
          <p className="text-gray-400 mb-4">
            IR1, IR2, IR5 guidance, document checklists, and milestones tracking.
          </p>
          <button className="border border-blue-400 text-blue-400 px-4 py-1 rounded-full text-sm hover:bg-blue-500 hover:text-black transition">
            Phase 1
          </button>
        </div>

        {/* Card 2 */}
        <div className="visa-card bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 text-left border border-gray-700 shadow-lg">
          <h3 className="text-blue-400 text-sm font-semibold uppercase mb-3">
            Education
          </h3>
          <h4 className="text-xl font-semibold mb-2">Student (F / M / J)</h4>
          <p className="text-gray-400">
            Program fit, I-20/DS-2019 steps, interview prep, arrival checklists.
          </p>
        </div>

        {/* Card 3 */}
        <div className="visa-card bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 text-left border border-gray-700 shadow-lg">
          <h3 className="text-blue-400 text-sm font-semibold uppercase mb-3">
            Work & Business
          </h3>
          <h4 className="text-xl font-semibold mb-2">H / L / O & B</h4>
          <p className="text-gray-400">
            Employer docs, timelines, RFEs, and travel compliance reminders.
          </p>
        </div>

        {/* Card 4 */}
        <div className="visa-card bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 text-left border border-gray-700 shadow-lg">
          <h3 className="text-blue-400 text-sm font-semibold uppercase mb-3">
            Travel
          </h3>
          <h4 className="text-xl font-semibold mb-2">Visitor (B1/B2)</h4>
          <p className="text-gray-400">
            Purpose articulation, itinerary basics, and common pitfalls.
          </p>
        </div>
      </div>

      {/* ======= CTA Button ======= */}
      <div className="flex justify-center mt-10">
        <button className="visa-cta border border-gray-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 hover:text-green-400 transition">
          Learn about the IR pathway
        </button>
      </div>
    </section>
  );
}

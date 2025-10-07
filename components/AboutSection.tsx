"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade-in for heading and paragraph
      gsap.from(".about-header", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Animate cards with stagger
      gsap.from(".about-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 50,
        opacity: 0,
        duration: 1.1,
        stagger: 0.25,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="my-28 px-6 text-center max-w-6xl mx-auto about-section"
    >
      {/* Header */}
      <div className="about-header flex flex-col md:flex-row md:items-center md:justify-between mb-12 space-y-4 md:space-y-0">
        <h2 className="text-3xl font-bold">About Arachnie</h2>
        <p className="text-gray-400 md:max-w-lg">
          A professional, approachable platform designed for anyone — simple,
          empathetic, and precise.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="about-card bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 text-left border border-gray-700 shadow-lg">
          <h3 className="text-blue-400 text-sm font-semibold uppercase mb-3">
            What We’re Building
          </h3>
          <h4 className="text-xl font-semibold mb-6">
            Your personal immigration consultant
          </h4>
          <p className="text-gray-400">
            An AI agent that understands your goal, documents, and timeline —
            providing step-by-step guidance from application to arrival.
          </p>
        </div>

        {/* Card 2 */}
        <div className="about-card bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 text-left border border-gray-700 shadow-lg">
          <h3 className="text-blue-400 text-sm font-semibold uppercase mb-3">
            Core Principles
          </h3>
          <ul className="text-gray-400 list-disc ml-4 space-y-4">
            <li>
              <span className="font-semibold text-white">Innovation First:</span>{" "}
              experiment, learn, iterate fast.
            </li>
            <li>
              <span className="font-semibold text-white">Excellence:</span>{" "}
              quality that earns trust.
            </li>
            <li>
              <span className="font-semibold text-white">Empathy:</span>{" "}
              human-centered, accessible for all.
            </li>
            <li>
              <span className="font-semibold text-white">Simplicity:</span> clear
              UX, fewer steps.
            </li>
            <li>
              <span className="font-semibold text-white">Shared Ownership:</span>{" "}
              every choice matters.
            </li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="about-card bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 text-left border border-gray-700 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-blue-400 text-sm font-semibold uppercase mb-3">
              Vision (3–5 Years)
            </h3>
            <p className="text-gray-400 mb-4">
              Become the world’s most trusted AI for international mobility —
              a one-stop platform integrated with travel, local services, and
              post-arrival needs.
            </p>
          </div>
          <button className="mt-2 w-fit border border-blue-400 text-blue-400 px-4 py-1 rounded-full text-sm hover:bg-blue-500 hover:text-black transition">
            Global Connector
          </button>
        </div>
      </div>
    </section>
  );
}

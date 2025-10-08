"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-center text-white">
      <motion.h1
        className="text-3xl md:text-5xl font-semibold tracking-tight text-balance"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        Chat with Arachne — Preview
      </motion.h1>

      <motion.p
        className="mt-3 text-gray-300 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        A lightweight demo of the conversation experience. New capabilities are landing soon.
      </motion.p>

      <motion.div
        className="mt-6 flex flex-wrap items-center justify-center gap-3"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Button
          asChild
          className="bg-blue-600 hover:bg-blue-500 focus-visible:ring-2 focus-visible:ring-blue-400 text-white px-6 py-5 rounded-full shadow-lg shadow-blue-600/30"
        >
          <Link href="#chat">Open Chat Demo</Link>
        </Button>
        <Button
          variant="outline"
          asChild
          className="rounded-full border-white/30 text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-blue-400 bg-transparent"
        >
          <Link href="#waitlist">Join Waitlist</Link>
        </Button>
      </motion.div>

      {/* soft glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-pink-400/20 blur-3xl"
      />
    </section>
  )
}

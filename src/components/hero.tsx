"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <motion.h1
        className="text-3xl md:text-5xl font-semibold tracking-tight text-balance"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        Chat with Arachne — Preview
      </motion.h1>

      <motion.p
        className="mt-3 text-muted-foreground max-w-2xl"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        A lightweight demo of the conversation experience. New capabilities are landing soon.
      </motion.p>

      <motion.div
        className="mt-6 flex flex-wrap items-center gap-3"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Button asChild className="btn-gradient px-5 py-5 rounded-full">
          <Link href="#chat">Open Chat Demo</Link>
        </Button>
        <Button variant="outline" asChild className="rounded-full bg-transparent">
          <Link href="#waitlist">Join Waitlist</Link>
        </Button>
      </motion.div>

      {/* soft glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
      />
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import useSWR from "swr"

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export default function TryTodayCard() {
  const { data } = useSWR<{ count: number }>("/api/waitlist", fetcher)

  return (
    <motion.div
      className="glass"
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Card className="bg-blue-900/40 backdrop-blur-md border border-blue-700/50 shadow-xl shadow-blue-900/30 text-white rounded-2xl p-2 hover:shadow-blue-700/40 transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-white">
            What You Can Try Today
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-blue-400 shadow-sm shadow-blue-400/70" aria-hidden />
              Open the demo chat and ask a sample question.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-blue-400 shadow-sm shadow-blue-400/70" aria-hidden />
              Explore suggested prompts to get started quickly.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-blue-400 shadow-sm shadow-blue-400/70" aria-hidden />
              Join the waitlist to get notified when the full agent launches.
            </li>
          </ul>

          <div className="flex flex-wrap gap-3 pt-4">
            <Button
              asChild
              className="bg-blue-900 hover:bg-gray-900 hover:text-white text-white px-5 py-5 rounded-full shadow-lg shadow-blue-700/40 transition-transform hover:scale-105"
            >
              <Link href="#chat">Open Chat Demo</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="rounded-full  text-gray-200 bg-white/10  hover:bg-gray-900 hover:text-white transition-all"
            >
              <Link href="#waitlist">
                Join Waitlist
                {typeof data?.count === "number" && (
                  <span className="ml-2 text-xs text-gray-400">({data.count})</span>
                )}
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

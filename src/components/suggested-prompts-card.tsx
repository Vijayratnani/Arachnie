"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import useSWR from "swr"

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export default function SuggestedPromptsCard() {
  const { data } = useSWR<string[]>("/api/prompts", fetcher)

  return (
    <motion.div
      className="glass"
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Card className="bg-blue-900/50 backdrop-blur-md border border-blue-700/60 shadow-xl shadow-blue-900/30 text-white rounded-2xl p-2 hover:shadow-blue-700/50 transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-white">Suggested Prompts</CardTitle>
        </CardHeader>

        <CardContent>
          <ul className="space-y-4 text-gray-200">
            {(
              data ?? [
                "What can you do?",
                "Give me 3 next steps for my case.",
                "Explain this document in simple words.",
              ]
            ).map((prompt, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3 text-pretty"
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <span className="mt-2 h-2 w-2 rounded-full bg-blue-400 shadow-sm shadow-blue-400/70" aria-hidden />
                <span className="italic text-gray-100">“{prompt}”</span>
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}

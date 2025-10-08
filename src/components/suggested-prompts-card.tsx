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
      <Card className="bg-transparent border-none">
        <CardHeader>
          <CardTitle className="text-xl">Suggested prompts</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {(
              data ?? [
                "What can you do?",
                "Give me 3 next steps for my case.",
                "Explain this document in simple words.",
              ]
            ).map((p, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3 text-pretty"
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <span className="mt-2 h-2 w-2 rounded-full bg-primary" aria-hidden />“{p}”
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}

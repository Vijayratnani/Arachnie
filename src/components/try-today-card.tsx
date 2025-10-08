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
      <Card className="bg-transparent border-none">
        <CardHeader>
          <CardTitle className="text-xl">What you can try today</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-accent" aria-hidden />
              Open the demo chat and ask a sample question.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-accent" aria-hidden />
              Explore suggested prompts to get started quickly.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-accent" aria-hidden />
              Join the waitlist to get notified when the full agent launches.
            </li>
          </ul>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild className="btn-gradient rounded-full px-5 py-5">
              <Link href="#chat">Open Chat Demo</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full bg-transparent">
              <Link href="#waitlist">
                Join Waitlist
                {typeof data?.count === "number" && (
                  <span className="ml-2 text-xs text-muted-foreground">({data.count})</span>
                )}
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

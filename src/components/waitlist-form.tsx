"use client"

import React, { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function WaitlistForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      })
      if (res.ok) {
        setStatus("success")
        setName("")
        setEmail("")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <Card className="bg-background border border-border/50 text-foreground shadow-md">
      <CardContent className="pt-6">
        <form onSubmit={submit} className="grid gap-3 md:grid-cols-[1fr_1fr_auto]">
          <label className="sr-only" htmlFor="full-name">
            Full name
          </label>
          <Input
            id="full-name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-muted/20 text-foreground placeholder:text-muted-foreground border-border/60"
          />

          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <Input
            id="email"
            type="email"
            inputMode="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-muted/20 text-foreground placeholder:text-muted-foreground border-border/60"
          />

          <Button
            type="submit"
            disabled={status === "loading"}
            className="btn-gradient rounded-full px-6"
          >
            {status === "loading" ? "Joining..." : "Join Waitlist"}
          </Button>
        </form>

        <p className="mt-3 text-sm text-muted-foreground">
          We respect your privacy. By submitting, you agree to be contacted about updates.
        </p>

        {status === "success" && (
          <p className="mt-2 text-sm text-green-500">Thanks! You’re on the list.</p>
        )}
        {status === "error" && (
          <p className="mt-2 text-sm text-red-500">Something went wrong. Please try again.</p>
        )}
      </CardContent>
    </Card>
  )
}

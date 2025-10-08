import { Suspense } from "react"
import Hero from "@/components/hero"

import TryTodayCard from "@/components/try-today-card"
import SuggestedPromptsCard from "@/components/suggested-prompts-card"
import WaitlistForm from "@/components/waitlist-form"
// import ChatDemo from "@/components/chat-demo"

export default function Page() {
  return (
    <main className="px-6 md:px-12 lg:px-24 py-16 md:py-24 space-y-16 bg-blue-950">
      <Hero />
      <section className="grid md:grid-cols-2 gap-6">
        <TryTodayCard />
        <SuggestedPromptsCard />
      </section>

      <section id="chat" aria-labelledby="chat-demo-title" className="space-y-6">
        <h2 id="chat-demo-title" className="text-2xl md:text-3xl font-semibold text-balance">
          Lightweight Chat Demo
        </h2>
        <Suspense>
          {/* <ChatDemo /> */}
        </Suspense>
      </section>

      <section id="waitlist" aria-labelledby="waitlist-title" className="space-y-6">
        <h2 id="waitlist-title" className="text-2xl md:text-3xl font-semibold text-balance">
          Get Early Access
        </h2>
        <WaitlistForm />
      </section>

      <footer className="pt-8 mt-12 border-t border-border/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 rounded-full bg-primary/20 ring-1 ring-primary/40" aria-hidden />
          <div>
            <p className="font-semibold">Arachne</p>
            <p className="text-xs">Connecting people, simplifying journeys.</p>
          </div>
        </div>
        <nav className="flex gap-6">
          <a href="#" className="hover:text-foreground">
            Privacy
          </a>
          <a href="#" className="hover:text-foreground">
            Terms
          </a>
          <a href="#waitlist" className="hover:text-foreground">
            Contact
          </a>
        </nav>
        <p className="text-xs">© {new Date().getFullYear()} Arachne, Inc.</p>
      </footer>
    </main>
  )
}

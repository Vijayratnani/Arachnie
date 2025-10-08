import { Suspense } from "react"
import Hero from "@/components/hero"
import TryTodayCard from "@/components/try-today-card"
import SuggestedPromptsCard from "@/components/suggested-prompts-card"
import WaitlistForm from "@/components/waitlist-form"

export default function Page() {
  return (
    <main className="px-6 md:px-12 lg:px-24 py-16 md:py-24 space-y-16 bg-blue-950 text-white">
      <Hero />

      <section className="grid md:grid-cols-2 gap-6">
        <TryTodayCard />
        <SuggestedPromptsCard />
      </section>

      <section id="chat" aria-labelledby="chat-demo-title" className="space-y-6">
        <h2 id="chat-demo-title" className="text-2xl md:text-3xl font-semibold text-white">
          Lightweight Chat Demo
        </h2>
        <Suspense>
          {/* <ChatDemo /> */}
        </Suspense>
      </section>

      <section id="waitlist" aria-labelledby="waitlist-title" className="space-y-6">
        <h2 id="waitlist-title" className="text-2xl md:text-3xl font-semibold text-white">
          Get Early Access
        </h2>
        <WaitlistForm />
      </section>

      <footer className="pt-8 mt-12 border-t border-gray-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-gray-400">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 rounded-full bg-blue-500/30 ring-1 ring-blue-400/40" aria-hidden />
          <div>
            <p className="font-semibold text-white">Arachne</p>
            <p className="text-xs text-gray-400">Connecting people, simplifying journeys.</p>
          </div>
        </div>

        <nav className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms
          </a>
          <a href="#waitlist" className="hover:text-white transition-colors">
            Contact
          </a>
        </nav>

        <p className="text-xs text-gray-400">© {new Date().getFullYear()} Arachne, Inc.</p>
      </footer>
    </main>
  )
}

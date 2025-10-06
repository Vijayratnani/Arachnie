import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <header className="flex justify-between items-center px-8 py-6 border-b border-gray-800">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <Image src="/image.png" alt="Arachnie Logo" className="dark:invert" width={30} height={30}/>
          Arachnie
        </h1>
        <nav className="space-x-6">
          <a href="#" className="hover:text-green-400">Home</a>
          <a href="#" className="hover:text-green-400">About</a>
          <a href="#" className="hover:text-green-400">Visa Catagories</a>
          <a href="#" className="hover:text-green-400">IR Pathway</a>
          <a href="#" className="hover:text-green-400">Chat</a>
          <a href="#" className="hover:text-green-400">Contact</a>
          <button className="bg-green-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-green-300">
            Get Started
          </button>
        </nav>
      </header>
      <section className="flex flex-col items-start text-center mt-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-sm text-green-300 uppercase tracking-widest border border-gray-600 px-3 py-1 rounded-full">
          Intelligence That Moves You Forward
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold mt-4">
          AI-Powered Global Mobility -- Your Personal Immigration Consultant
        </h1>
        <p className="text-gray-400 max-w-11/12 mt-4">
          Arachnie is an agentic AI platform that guides people across borders —
          from visa selection and form-filling to arrival, documents, and settling in.
          Phase 1 focuses on Pakistan → U.S. (IR category) with expansion to student, business, work, and visitor pathways.
        </p>
        <div className="mt-8 flex gap-4">
          <button className="bg-gradient-to-r from-green-400 to-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-green-300">
            Chat Demo (Preview)
          </button>
          <button className="border border-gray-600 px-6 py-3 rounded-full hover:bg-gray-800">
            Learn More
          </button>
        </div>
      </section>
    </main>
  );
}

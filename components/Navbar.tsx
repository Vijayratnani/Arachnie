"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/chat", label: "Chat" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="flex justify-between items-center px-8 py-6 border-b border-gray-700">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <Image src="/image.png" alt="Arachnie Logo" className="dark:invert rounded-b-full " width={30} height={30}/>
          Arachnie
        </h1>
        <nav className="space-x-6">
          <Link href="/" className="hover:text-green-400">Home</Link>
          <Link href="/about" className="hover:text-green-400">About</Link>
          <Link href="/visa-categories" className="hover:text-green-400">Visa Categories</Link>
          <Link href="/ir-pathway" className="hover:text-green-400">IR Pathway</Link>
          <Link href="/chat" className="hover:text-green-400">Chat</Link>
          <Link href="/contact" className="hover:text-green-400">Contact</Link>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-full font-semibold hover:bg-gray-900 hover:text-green-400 cursor-pointer">
            Get Started
          </button>
        </nav>
      </header>
  );
}

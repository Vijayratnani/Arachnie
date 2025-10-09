export default function Footer() {
  return (
    // <footer className="text-center text-gray-500 text-sm py-8 border-t border-gray-800">
    //   <p>© {new Date().getFullYear()} Arachnie Inc. All rights reserved.</p>
    // </footer>
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
  );
}

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 bg-amber-300 rounded flex items-center justify-center font-bold text-black text-sm">
              B
            </div>
            <p className="text-white font-serif font-semibold">BUSINESS NUGGETS</p>
          </div>
          <p className="text-sm italic">Timeless Biblical Wisdom for Today&apos;s Marketplace.</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Platform</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/library" className="hover:text-white">Library</Link></li>
            <li><Link href="/library/musical" className="hover:text-white">Musicals</Link></li>
            <li><Link href="/library/scripture-index" className="hover:text-white">Scripture Index</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/philosophy" className="hover:text-white">Our Philosophy</Link></li>
            <li><Link href="/authors" className="hover:text-white">Authors</Link></li>
            <li><Link href="/support" className="hover:text-white">Support</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs">
          <p>© 2026 Business Nuggets from the Bible. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-white">Terms of Use</Link>
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
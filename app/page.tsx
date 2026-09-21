import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { Compass, ArrowRight, Images } from "lucide-react";
 
const topics = [
  { title: "Leadership & Governance", count: "42 NUGGETS", img: "/images/visiting-homepage2.png" },
  { title: "Money & Stewardship", count: "38 NUGGETS", img: "/images/visiting-homepage3.png" },
  { title: "Strategy & Planning", count: "29 NUGGETS", img: "/images/visiting-homepage4.png" },
  { title: "Perseverance Under Pressure", count: "31 NUGGETS", img: "/images/visiting-homepage5.png" },
  { title: "Vision & Innovation", count: "50 NUGGETS", img: "/images/visiting-homepage6.png" },
  { title: "Team Building & Culture", count: "25 NUGGETS", img: "/images/visiting-homepage7.png" },
];
 
const wisdomTags = [
  "Starting a Business",
  "Money & Cashflow Problems",
  "Managing Difficult People",
  "Strategic Decision Making",
  "Scaling & Growth Pressures",
  "Leadership Burnout",
];
 
const musicalTracks = [
  {
    reference: "Genesis 41",
    title: "Joseph's Seven-Year Reserve Blueprint",
    artist: "David O. & London Symphony",
    time: "12:45",
    Images:"/images/playlist-details1.png",
  },
  {
    reference: "Nehemiah 3",
    title: "The Architectural Mind: Building with Nehemiah",
    artist: "Amina Vance & BNB Sound",
    time: "15:10",
    Images:"/images/playlist-details3.png",
  },
];
 
export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
 
      <main className="flex-1">
        {/* Hero */}
        <section
          className="relative bg-cover bg-center py-16 sm:py-24 px-4 sm:px-6 text-center"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative max-w-3xl mx-auto mt-12">
            <p className="text-amber-300 text-xs tracking-widest uppercase mb-3">
              Timeless Biblical Wisdom for Today&apos;s Marketplace
            </p>
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-serif font-semibold mb-6 leading-tight">
              Command Your Business with Absolute Clarity
            </h1>
 
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search by scripture, business challenge, or book..."
                className="w-full bg-neutral-900 border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
              />
              <button className="w-full sm:w-auto bg-amber-300 text-black font-medium px-6 py-2 rounded-md hover:bg-amber-400 transition whitespace-nowrap">
                Start Discovering
              </button>
            </div>
          </div>
        </section>
 
        {/* Today's Business Nugget */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <h2 className="text-white text-xl font-serif font-semibold mb-6">Today&apos;s Business Nugget</h2>
 
          <div className="bg-neutral-950 h-[250px] border border-amber-900/40 rounded-xl overflow-hidden md:flex">
            <div
              className="w-full h-48 sm:h-56 md:h-auto md:w-1/2 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/nugget-featured.jpg')" }}
            />
            <div className="p-5 sm:p-6 md:w-1/2 flex flex-col justify-center">
              <p className="text-amber-300 text-xs tracking-wide uppercase mb-2">
                Integrity &amp; Character &middot; 6 Min Listen
              </p>
              <h3 className="text-white text-lg font-semibold mb-3">
                The Law of Just Balances in Corporate Negotiation
              </h3>
              <p className="text-gray-400 text-sm italic mb-6">
                &ldquo;A false balance is an abomination to the Lord, but a just weight is His delight.&rdquo; &mdash; Proverbs 11:1
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-amber-300 text-black text-sm font-medium px-4 py-2 rounded-md hover:bg-amber-400 transition">
                  Listen Audio (Musical)
                </button>
                <button className="border border-gray-700 text-gray-300 text-sm px-4 py-2 rounded-md hover:border-gray-500 transition">
                  Read Commentary
                </button>
              </div>  
            </div>
          </div>
        </section>
 
        {/* I Need Wisdom About */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
          <h2 className="text-white text-xl font-serif font-semibold mb-6">I Need Wisdom About...</h2>
          <div className="flex flex-wrap  gap-3">
            {wisdomTags.map((tag, i) => (
              <span
                key={tag}
                className={`text-12 px-4 py-2 rounded-full border ${
                  i === 0
                    ? "bg-amber-300 text-black border-amber-300"
                    : "text-gray-300 border-gray-700 hover:border-gray-500"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </section>
 
        {/* Browse by Core Topic */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
          <h2 className="text-white text-xl font-serif font-semibold mb-6">Browse by Core Topic</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {topics.map((topic) => (
              <div
                key={topic.title}
                className="relative h-40 rounded-lg overflow-hidden bg-cover bg-center flex items-end p-4"
                style={{ backgroundImage: `url('${topic.img}')` }}
              >
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute top-3 left-3 w-7 h-7 rounded-full border border-amber-300/40 flex items-center justify-center">
                  <Compass size={13} className="text-amber-300" />
                </div>
                <span className="absolute top-3 right-3 text-[10px] bg-black/60 text-amber-300 px-2 py-1 rounded">
                  {topic.count}
                </span>
                <p className="relative text-white font-medium">{topic.title}</p>
              </div>
            ))}
          </div>
        </section>
 
        {/* Featured Wisdom Musicals */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
          <h2 className="text-white text-xl font-serif font-semibold mb-1">Featured Wisdom Musicals</h2>
          <p className="text-gray-400 text-sm mb-6">
            Immersive audio teachings layered over professional cinematic soundtracks and ambient orchestration.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {musicalTracks.map((track) => (
              <div
                key={track.title}
                className="flex items-center gap-3 sm:gap-4 bg-neutral-950 border border-gray-800 rounded-lg p-3"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded bg-neutral-800 shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium truncate">{track.title}</p>
                  <p className="text-gray-500 text-xs truncate">{track.meta}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-gray-500 text-xs hidden sm:inline">{track.time}</span>
                  <button className="w-8 h-8 rounded-full bg-amber-300 text-black flex items-center justify-center">
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
 
        {/* Latest Biblical Nuggets */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
          <h2 className="text-white text-xl font-serif font-semibold mb-6">Latest Biblical Nuggets</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {["/images/nugget-1.jpg", "/images/nugget-2.jpg", "/images/nugget-3.jpg", "/images/nugget-4.jpg"].map(
              (img, i) => (
                <div
                  key={i}
                  className="h-28 sm:h-32 rounded-lg bg-cover bg-center"
                  style={{ backgroundImage: `url('${img}')` }}
                />
              )
            )}
          </div>
        </section>
      </main>
 
      <Footer />
    </div>
  );
}
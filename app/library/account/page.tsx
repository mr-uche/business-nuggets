"use client";

import { useState, type ElementType } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import {
  Bell,
  BookOpen,
  Music2,
  ShieldCheck,
  Check,
  ChevronDown,
  Download,
  Lock,
  Monitor,
  Smartphone,
  LogOut,
  Trash2,
  User,
  Users,
  Volume2,
} from "lucide-react";

/* =========================================================
   NAVIGATION
========================================================= */

const navItems = [
  "Personal Details",
  "Interests & Goals",
  "Following Channels",
  "Playback Preferences",
  "Download Settings",
  "Notification Channels",
  "Account Security",
  "Devices & Sessions",
  "Data Export",
  "Delete Account",
  "Sign Out",
] as const;

type NavItem = (typeof navItems)[number];

/* =========================================================
   INTERESTS
========================================================= */

const interestOptions = [
  "Starting a Business",
  "Money & Stewardship",
  "Managing Difficult People",
  "Strategic Decisions",
  "Leadership Integrity",
  "Innovation",
];

/* =========================================================
   NOTIFICATIONS
========================================================= */

const todayNotifications = [
  {
    icon: BookOpen,
    label: "TODAY'S NUGGET",
    time: "10 min ago",
    title: "The Law of Just Balances in Corporate Negotiation",
    description:
      "New daily commentary on Proverbs 11:1. Honesty is not a moral compromise; it is tactical dominion.",
  },
  {
    icon: Bell,
    label: "FOLLOWED TOPIC UPDATE",
    time: "2 hours ago",
    title: "New Nuggets added to 'Leadership & Governance'",
    description:
      "Exodus 18: Jethro's delegation plan for scale is now available in premium format.",
  },
];

const yesterdayNotifications = [
  {
    icon: Music2,
    label: "NEW WISDOM MUSICAL",
    time: "1 day ago",
    title: "Genesis 41: Joseph's Reserve Blueprint Released",
    description:
      "Immersive orchestral track featuring Arima Vance & London Symphony. Listen now.",
  },
  {
    icon: ShieldCheck,
    label: "SYSTEM NOTICE",
    time: "1 day ago",
    title: "Subscription status updated to BNB Premium",
    description:
      "Congratulations! You have unlocked absolute access to full-length scripture commentary.",
  },
];

/* =========================================================
   NOTIFICATION CARD
========================================================= */

function NotificationCard({
  notification,
}: {
  notification: {
    icon: ElementType;
    label: string;
    time: string;
    title: string;
    description: string;
  };
}) {
  const Icon = notification.icon;

  return (
    <div className="flex min-h-[72px] items-center gap-4 rounded-md border border-white/10 bg-[#141416] px-4 py-3">

      {/* Icon */}
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/5 bg-[#1b1b1f]">
        <Icon
          size={15}
          className="text-[#C9A227]"
        />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[9px] font-medium uppercase tracking-wide text-[#C9A227]">
            {notification.label}
          </span>

          <span className="text-[8px] text-white/30">
            • {notification.time}
          </span>
        </div>

        <h3 className="mt-1 font-serif text-[13px] text-white">
          {notification.title}
        </h3>

        <p className="mt-1 text-[9px] leading-relaxed text-white/40">
          {notification.description}
        </p>

      </div>

      {/* View */}
      <button
        type="button"
        className="shrink-0 rounded-md border border-white/10 px-3 py-1.5 text-[9px] text-white/55 transition hover:border-white/20 hover:text-white"
      >
        View
      </button>

    </div>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function AccountSettingsPage() {

  /* -----------------------------
     General state
  ----------------------------- */

  const [active, setActive] =
    useState<NavItem>("Personal Details");

  const [mobileNavOpen, setMobileNavOpen] =
    useState(false);

  /* -----------------------------
     Personal details
  ----------------------------- */

  const [fullName, setFullName] =
    useState("Amina Vance");

  const [email, setEmail] =
    useState("amina.vance@marketplacekingdom.com");

  /* -----------------------------
     Interests
  ----------------------------- */

  const [selectedInterests, setSelectedInterests] =
    useState<string[]>([
      "Starting a Business",
      "Strategic Decisions",
      "Innovation",
    ]);

  /* -----------------------------
     Playback
  ----------------------------- */

  const [audioSpeed, setAudioSpeed] =
    useState("1.0x (Normal)");

  const [autoplay, setAutoplay] =
    useState(true);

  /* -----------------------------
     Notifications
  ----------------------------- */

  const [notificationsRead, setNotificationsRead] =
    useState(false);

  /* -----------------------------
     Following
  ----------------------------- */

  const [followedTopics, setFollowedTopics] =
    useState(true);

  const [followedCollections, setFollowedCollections] =
    useState(true);

  /* =========================================================
     FUNCTIONS
  ========================================================= */

  const handleNavigation = (item: NavItem) => {
    setActive(item);
    setMobileNavOpen(false);
  };

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((item) => item !== interest)
        : [...prev, interest]
    );
  };

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <div className="min-h-screen bg-black text-[#EDEAE3]">

      <Navbar />

      <main className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-10 lg:px-16 lg:py-12">

        {/* =====================================================
            PAGE HEADER
        ===================================================== */}

        <div>
          <h1 className="font-serif text-2xl text-white sm:text-3xl">
            Account &amp; Workspace Settings
          </h1>

          <p className="mt-2 max-w-2xl text-xs leading-relaxed text-white/40 sm:text-sm">
            Configure your personal preferences, spiritual targets,
            and playback defaults.
          </p>
        </div>


        {/* MOBILE NAVIGATION*/}

       {/* ================= MOBILE NAVIGATION ================= */}

{/* ================= MOBILE TAB DROPDOWN ================= */}

<div className="relative z-50 mt-7 w-full lg:hidden">

  <button
    type="button"
    onClick={() => setMobileNavOpen((prev) => !prev)}
    className="flex w-full items-center justify-between rounded-md border border-white/10 bg-[#0d0d0d] px-4 py-3 text-left"
  >
    <span className="truncate pr-4 text-sm font-medium text-white">
      {active}
    </span>

    <ChevronDown
      size={18}
      className={`shrink-0 text-white/60 transition-transform duration-200 ${
        mobileNavOpen ? "rotate-180" : ""
      }`}
    />
  </button>

  {mobileNavOpen && (
    <div className="mt-2 w-full overflow-hidden rounded-md border border-white/10 bg-[#111111] shadow-xl">

      {navItems.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => handleNavigation(item)}
          className={`block w-full px-4 py-3 text-left text-sm transition-colors ${
            active === item
              ? "bg-[#C9A227] font-medium text-black"
              : "text-white/60 hover:bg-white/5 hover:text-white"
          }`}
        >
          <span className="whitespace-nowrap">
            {item}
          </span>
        </button>
      ))}

    </div>
  )}

</div>

        {/* DESKTOP NAV + CONTENT */}

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[220px_1fr]">

          {/* DESKTOP LEFT NAVIGATION */}

          <nav className="hidden lg:flex lg:flex-col lg:gap-1">

            {navItems.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => handleNavigation(item)}
                className={`rounded-md px-3 py-2.5 text-left text-sm transition-colors ${
                  active === item
                    ? "bg-[#C9A227] font-medium text-[#0B0B0A]"
                    : item === "Delete Account"
                    ? "text-red-400 hover:bg-white/5"
                    : item === "Sign Out"
                    ? "text-white/60 hover:bg-white/5 hover:text-white"
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}

          </nav>


          {/* CONTENT AREA */}

          <div className="min-w-0">

            {/* PERSONAL DETAILS */}

            {active === "Personal Details" && (
              <div className="space-y-6">

                <div className="rounded-lg border border-white/10 bg-white/[0.02] p-5 sm:p-6">

                  <h2 className="mb-5 text-base font-semibold text-white">
                    Personal Details
                  </h2>

                  <div className="space-y-5">

                    {/* Full name */}
                    <div>
                      <label className="mb-1.5 block text-[11px] font-medium tracking-wide text-white/40">
                        FULL NAME
                      </label>

                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) =>
                          setFullName(e.target.value)
                        }
                        className="w-full rounded-md border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition focus:border-[#C9A227]"
                      />
                    </div>


                    {/* Email */}
                    <div>
                      <label className="mb-1.5 block text-[11px] font-medium tracking-wide text-white/40">
                        EMAIL ADDRESS
                      </label>

                      <input
                        type="email"
                        value={email}
                        onChange={(e) =>
                          setEmail(e.target.value)
                        }
                        className="w-full rounded-md border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition focus:border-[#C9A227]"
                      />
                    </div>

                  </div>

                </div>

             {/* Core Business Interests */}
            <div className="rounded-lg border border-white/10 bg-white/[0.02] p-6">
              <h2 className="text-base font-semibold text-white">Core Business Interests</h2>
              <p className="mt-1 mb-4 text-xs text-white/40">
                Select targets you need consistent biblical strategy inputs for.
              </p>
 
              <div className="flex flex-wrap gap-2">
                {interestOptions.map((interest) => {
                  const selected = selectedInterests.includes(interest);
                  return (
                    <button
                      key={interest}
                      onClick={() => toggleInterest(interest)}
                      className={`rounded-full px-4 py-2 text-xs font-medium transition-colors ${
                        selected
                          ? "bg-[#C9A227] text-[#0B0B0A]"
                          : "border border-white/15 text-white/60 hover:bg-white/5"
                      }`}
                    >
                      {interest}
                    </button>
                  );
                })}
              </div>
            </div>
 

               {/* Playback & Streaming Preferences */}
            <div className="rounded-lg border border-white/10 bg-white/[0.02] p-6">
              <h2 className="mb-5 text-base font-semibold text-white">
                Playback &amp; Streaming Preferences
              </h2>
 
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="text-sm font-medium text-white">Default Audio Speed</p>
                  <p className="text-xs text-white/40">
                    Speed rate for premium wisdom musicals.
                  </p>
                </div>
                <select
                  value={audioSpeed}
                  onChange={(e) => setAudioSpeed(e.target.value)}
                  className="rounded-md border border-white/10 bg-black px-3 py-2 text-xs text-white outline-none focus:border-[#C9A227]"
                >
                  <option>0.75x</option>
                  <option>1.0x (Normal)</option>
                  <option>1.25x</option>
                  <option>1.5x</option>
                  <option>2.0x</option>
                </select>
              </div>
 
              <div className="flex items-center justify-between border-t border-white/10 py-3">
                <div>
                  <p className="text-sm font-medium text-white">Autoplay Next Segment</p>
                  <p className="text-xs text-white/40">
                    Automatically spin contiguous chapters of scripture.
                  </p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={autoplay}
                  onClick={() => setAutoplay((v) => !v)}
                  className={`relative h-6 w-11 shrink-0  flex item-start rounded-full transition-colors ${
                    autoplay ? "bg-[#C9A227]" : "bg-white/15"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 h-5 w-5 rounded-full bg-black transition-transform ${
                      autoplay ? "translate-x-5" : "translate-x-0.5"
                    }`}
                  />
                </button>
              </div>
            </div>


                {/* Actions */}
                <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

                  <button
                    type="button"
                    className="rounded-md px-4 py-2.5 text-sm text-white/50 hover:text-white"
                  >
                    Cancel Changes
                  </button>

                  <button
                    type="button"
                    className="rounded-md bg-[#C9A227] px-5 py-2.5 text-sm font-medium text-[#0B0B0A] hover:bg-[#DDB93A]"
                  >
                    Save All Changes
                  </button>

                </div>

              </div>
            )}


            {/* =================================================
                INTERESTS & GOALS
            ================================================= */}

            {active === "Interests & Goals" && (
              <div className="space-y-6">

                

              </div>
            )}


            {/* =================================================
                FOLLOWING CHANNELS
            ================================================= */}

            {active === "Following Channels" && (
              <div className="space-y-4">

                

              </div>
            )}


            {/* =================================================
                PLAYBACK PREFERENCES
            ================================================= */}

            {active === "Playback Preferences" && (
              <div className="rounded-lg border border-white/10 bg-white/[0.02] p-5 sm:p-6">

               
              </div>
            )}


            {/* =================================================
                DOWNLOAD SETTINGS
            ================================================= */}

            {active === "Download Settings" && (
              <div>
              </div>
            )}


            {/* =================================================
                NOTIFICATION CHANNELS
            ================================================= */}

            {active === "Notification Channels" && (
              <div className="space-y-6">

                {/* Notification header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                  <div>
                    <h2 className="font-serif text-2xl text-white sm:text-[27px]">
                      Notification Centre
                    </h2>

                    <p className="mt-2 text-xs leading-relaxed text-white/40 sm:text-sm">
                      Stay updated on direct updates, followed topics,
                      and daily corporate wisdom.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setNotificationsRead(true)
                    }
                    className="flex w-fit items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-[10px] text-white/60 transition hover:border-white/20 hover:text-white"
                  >
                    <Check size={13} />
                    {notificationsRead
                      ? "All notifications read"
                      : "Mark all as read"}
                  </button>

                </div>


                {/* Notification container */}
                <section className="rounded-lg border border-white/10 bg-[#0d0d0d] p-4 sm:p-5">

                  {/* Today */}
                  <div>

                    <h3 className="mb-4 text-[10px] font-medium uppercase tracking-wide text-[#C9A227]">
                      Today
                    </h3>

                    <div className="space-y-2">

                      {todayNotifications.map(
                        (notification) => (
                          <NotificationCard
                            key={notification.title}
                            notification={notification}
                          />
                        )
                      )}

                    </div>

                  </div>


                  {/* Yesterday */}
                  <div className="mt-7">

                    <h3 className="mb-4 text-[10px] font-medium uppercase tracking-wide text-[#C9A227]">
                      Yesterday
                    </h3>

                    <div className="space-y-2">

                      {yesterdayNotifications.map(
                        (notification) => (
                          <NotificationCard
                            key={notification.title}
                            notification={notification}
                          />
                        )
                      )}

                    </div>

                  </div>

                </section>

              </div>
            )}


            {/* =================================================
                ACCOUNT SECURITY
            ================================================= */}

            {active === "Account Security" && (
              <div className="rounded-lg border border-white/10 bg-white/[0.02] p-5 sm:p-6">

                

              </div>
            )}


            {/* =================================================
                DEVICES & SESSIONS
            ================================================= */}

            {active === "Devices & Sessions" && (
              <div className="rounded-lg border border-white/10 bg-white/[0.02] p-5 sm:p-6">

                

              </div>
            )}


            {/* =================================================
                DATA EXPORT
            ================================================= */}

            {active === "Data Export" && (
              <div className="rounded-lg border border-white/10 bg-white/[0.02] p-5 sm:p-6">

                

              </div>
            )}


            {/* =================================================
                DELETE ACCOUNT
            ================================================= */}

            {active === "Delete Account" && (
              <div className="rounded-lg border border-red-500/20 bg-red-500/[0.02] p-5 sm:p-6">

               

              </div>
            )}


            {/* =================================================
                SIGN OUT
            ================================================= */}

            {active === "Sign Out" && (
              <div className="rounded-lg border border-white/10 bg-white/[0.02] p-5 sm:p-6">

                

              </div>
            )}

          </div>
        </div>

      </main>

      <Footer />

    </div>
  );
}
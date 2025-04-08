"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SectionArrows from "@/components/SectionArrows";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col bg-white overflow-x-hidden relative">
      {/* Add the section arrows - hidden on small screens for performance */}
      <div className="absolute inset-0 z-[1] hidden md:block">
        <SectionArrows />
      </div>

      {/* Simple mobile-only arrow decorations */}
      <div className="absolute right-0 top-[60vh] w-[100px] z-[1] md:hidden">
        <svg viewBox="890 100 250 500" width="100%" height="100%">
          <path
            fill="none"
            stroke="#1e90ff"
            strokeWidth="12"
            strokeLinecap="round"
            d="M899.91,549.5c9.49-58.49,25.61-104.06,38.96-135.33,26.56-62.22,58.35-105.78,96.37-157.89,28.63-39.23,54.67-70.42,73.82-92.27"
          />
        </svg>
      </div>

      <div className="absolute left-0 top-[160vh] w-[100px] z-[1] md:hidden">
        <svg viewBox="410 750 380 280" width="100%" height="100%">
          <path
            fill="none"
            stroke="#ff008c"
            strokeWidth="12"
            strokeLinecap="round"
            d="M427.91,1013.12c8.47-46.73,27.18-77.56,39.43-94.3,13.27-18.13,25.75-34.67,46.29-37.72,23.91-3.55,44.57,13.27,51.44,18.86"
          />
        </svg>
      </div>

      <header className="flex h-16 items-center justify-between px-4 md:px-6 backdrop-blur-md bg-white/70 border-b border-white/20 sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <img
            src="/nextgig-logo.svg"
            alt="NextGig"
            className="h-8 animate-fade-in-down"
          />{" "}
        </div>
        <nav className="hidden sm:flex gap-4 md:gap-6">
          <Link
            href="#features"
            className="text-sm font-medium hover:underline hover:text-blue-500 transition-colors duration-300"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium hover:underline hover:text-blue-500 transition-colors duration-300"
          >
            How It Works
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium hover:underline hover:text-blue-500 transition-colors duration-300"
          >
            Pricing
          </Link>
        </nav>
        <div className="flex items-center gap-2 sm:gap-4">
          <Link href="/login">
            <Button
              variant="ghost"
              className="hover:bg-white/30 transition-all duration-300 text-sm px-2 sm:px-4 sm:text-base"
            >
              Log In
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:shadow-[0_8px_25px_-5px_rgba(30,144,255,0.6)] transition-all duration-300 animate-pulse-slow text-sm px-2 sm:px-4 sm:text-base">
              Sign Up
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 z-10">
        <section className="w-full py-8 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <div className="flex flex-col justify-center space-y-4 animate-fade-in-up">
                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl animate-slide-up">
                    Job hunting is{" "}
                    <span className="animate-text-shimmer bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600">
                      broken.
                    </span>
                     <br></br> We fixed it.
                  </h1>
                  <p className="max-w-[600px] text-gray-600 text-base md:text-xl lg:text-base xl:text-xl animate-fade-in delay-200">
                    Stop wasting time refreshing job boards. NextGig delivers
                    fresh opportunities to your inbox every 8 hours. Because the
                    best gigs wait for no one.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center mt-8 lg:mt-0">
                <div className="backdrop-blur-md bg-white/30 border border-white/20 rounded-xl p-2 shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)] hover:shadow-[0_20px_80px_rgba(8,_112,_184,_0.3)] transition-all duration-700 animate-float w-full max-w-[450px] lg:max-w-none">
                  <img
                    src="/Dash.png"
                    alt="NextGig Dashboard"
                    className="rounded-lg object-cover w-full h-auto"
                    width={550}
                    height={310}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-8 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl animate-fade-in-up">
                  What we do differently
                </h2>
                <p className="max-w-[600px] text-gray-600 text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-fade-in-up delay-100">
                  Finding jobs shouldn't feel like a second job.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-8 md:py-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              <Card className="backdrop-blur-md bg-white/30 border border-white/20 shadow-[0_15px_30px_rgba(8,_112,_184,_0.1)] hover:shadow-[0_20px_40px_rgba(8,_112,_184,_0.2)] transition-all duration-500 hover:-translate-y-2 transform-gpu animate-fade-in-up delay-100">
                <CardHeader>
                  <CardTitle className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-400">
                    Fresh finds every 8 hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    While others sleep, we keep looking. New opportunities land
                    on your dashboard three times daily.
                  </p>
                </CardContent>
              </Card>
              <Card className="backdrop-blur-md bg-white/30 border border-white/20 shadow-[0_15px_30px_rgba(8,_112,_184,_0.1)] hover:shadow-[0_20px_40px_rgba(8,_112,_184,_0.2)] transition-all duration-500 hover:-translate-y-2 transform-gpu animate-fade-in-up delay-200">
                <CardHeader>
                  <CardTitle className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-400">
                    Uncannily accurate matches
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Our algorithm gets you. It learns what you want and filters
                    out what you don't. No more scrolling through irrelevant
                    listings.
                  </p>
                </CardContent>
              </Card>
              <Card className="backdrop-blur-md bg-white/30 border border-white/20 shadow-[0_15px_30px_rgba(8,_112,_184,_0.1)] hover:shadow-[0_20px_40px_rgba(8,_112,_184,_0.2)] transition-all duration-500 hover:-translate-y-2 transform-gpu animate-fade-in-up delay-300 sm:col-span-2 md:col-span-1">
                <CardHeader>
                  <CardTitle className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-400">
                    Apply with confidence
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Get the inside track with salary insights, company culture
                    notes, and interview tips for each listing.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="w-full py-8 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 backdrop-blur-sm"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl animate-fade-in-up">
                  Three steps to your next big break
                </h2>
                <p className="max-w-[600px] text-gray-600 text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-fade-in-up delay-100">
                  Simple enough for a Monday morning. Powerful enough to change
                  your career.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-8 md:py-12 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center animate-fade-in-up delay-100">
                <div className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-[0_10px_20px_rgba(30,144,255,0.4)] animate-pulse-slow">
                  <span className="text-xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold">Tell us what you want</h3>
                <p className="text-gray-600">
                  Set your skills, salary expectations, and dream companies.
                  Take 2 minutes, save 200 hours.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center animate-fade-in-up delay-200">
                <div className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-[0_10px_20px_rgba(30,144,255,0.4)] animate-pulse-slow">
                  <span className="text-xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold">Let us hunt for you</h3>
                <p className="text-gray-600">
                  Our AI scours the job market while you focus on what matters.
                  New matches every 8 hours.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center animate-fade-in-up delay-300 sm:col-span-2 md:col-span-1">
                <div className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-[0_10px_20px_rgba(30,144,255,0.4)] animate-pulse-slow">
                  <span className="text-xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold">Apply only to the best</h3>
                <p className="text-gray-600">
                  Choose from curated opportunities that actually match your
                  worth and ambitions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-8 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl animate-fade-in-up">
                  Ridiculously affordable
                </h2>
                <p className="max-w-[600px] text-gray-600 text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-fade-in-up delay-100">
                  Less than a coffee, more valuable than a recruiter.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-lg py-8 md:py-12">
              <Card className="backdrop-blur-lg bg-white/40 border border-white/30 shadow-[0_20px_80px_rgba(8,_112,_184,_0.3)] hover:shadow-[0_30px_100px_rgba(8,_112,_184,_0.4)] transition-all duration-500 animate-float">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">NextGig Premium</CardTitle>
                  <CardDescription className="text-3xl font-bold">
                    £2.99/month
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-4">
                    <li className="flex items-center gap-2 animate-fade-in-up delay-100">
                      <span className="text-lg text-green-500 animate-scale-in">
                        ✓
                      </span>
                      <span>Fresh job alerts every 8 hours</span>
                    </li>
                    <li className="flex items-center gap-2 animate-fade-in-up delay-200">
                      <span className="text-lg text-green-500 animate-scale-in">
                        ✓
                      </span>
                      <span>Personalised dashboard</span>
                    </li>
                    <li className="flex items-center gap-2 animate-fade-in-up delay-300">
                      <span className="text-lg text-green-500 animate-scale-in">
                        ✓
                      </span>
                      <span>Salary insights and comparisons</span>
                    </li>
                    <li className="flex items-center gap-2 animate-fade-in-up delay-400">
                      <span className="text-lg text-green-500 animate-scale-in">
                        ✓
                      </span>
                      <span>Application tracking tools</span>
                    </li>
                    <li className="flex items-center gap-2 animate-fade-in-up delay-500">
                      <span className="text-lg text-green-500 animate-scale-in">
                        ✓
                      </span>
                      <span>Email and browser notifications</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-col gap-2">
                  <Button className="w-full text-base md:text-lg py-4 md:py-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:shadow-[0_10px_30px_rgba(30,144,255,0.5)] hover:scale-105 transform-gpu transition-all duration-300 animate-pulse-slow">
                    Start 7-day free trial
                  </Button>
                  <p className="text-sm text-center text-gray-500">
                    No commitment. Cancel anytime.
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-8 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 backdrop-blur-sm">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl mb-4 md:mb-6 animate-fade-in-up">
              Stop missing out on your dream role
            </h2>
            <p className="max-w-[800px] mx-auto text-gray-600 text-base md:text-xl mb-6 md:mb-8 animate-fade-in-up delay-100">
              The best opportunities don't wait around. Neither should you.
            </p>
            <Button
              size="lg"
              className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:shadow-[0_15px_30px_rgba(30,144,255,0.6)] hover:scale-110 transform-gpu transition-all duration-300 animate-bounce-light"
            >
              Get started now
            </Button>
          </div>
        </section>
      </main>

      <footer className="backdrop-blur-md bg-white/30 py-6 md:py-8 w-full px-4 md:px-6 border-t border-white/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="animate-fade-in-up col-span-2 md:col-span-1">
              <h3 className="text-lg font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-400">
                NextGig
              </h3>
              <p className="text-sm text-gray-600">
                Finding your next career move shouldn't be a full-time job.
              </p>
            </div>
            <div className="animate-fade-in-up delay-100">
              <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">
                Links
              </h3>
              <ul className="space-y-1 md:space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-xs md:text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-xs md:text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-xs md:text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="animate-fade-in-up delay-200">
              <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">
                Legal
              </h3>
              <ul className="space-y-1 md:space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-xs md:text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-xs md:text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-xs md:text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 pt-6 md:mt-8 md:pt-8 border-t border-white/20 text-center animate-fade-in-up delay-300">
            <p className="text-xs text-gray-500">
              © 2025 NextGig. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

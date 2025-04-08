"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import SectionArrows from "@/components/SectionArrows";
import CookieSettings from "@/components/CookieSettings";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [isCookieSettingsOpen, setIsCookieSettingsOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col bg-white overflow-x-hidden relative">
      {/* Section arrows for visual interest */}
      <div className="absolute inset-0 z-[1] hidden md:block">
        <SectionArrows />
      </div>

      {/* Mobile arrow decorations */}
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

      {/* Header with improved shadcn styling */}
      <header className="flex h-16 items-center justify-between px-4 md:px-6 bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <Image
            src="/nextgig-logo.svg"
            alt="NextGig"
            width={32}
            height={32}
            className="h-8 w-auto animate-fade-in-down"
          />
        </div>

        <nav className="hidden sm:flex gap-4 md:gap-6">
          <Button
            variant="ghost"
            onClick={() => scrollToSection("features")}
            className="text-sm font-medium hover:text-blue-500 transition-colors"
          >
            Features
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("how-it-works")}
            className="text-sm font-medium hover:text-blue-500 transition-colors"
          >
            How It Works
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("pricing")}
            className="text-sm font-medium hover:text-blue-500 transition-colors"
          >
            Pricing
          </Button>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <Link href="https://next-gig.co.uk/login" className="cursor-pointer">
            <Button
              variant="ghost"
              className="hover:bg-blue-50 transition-all text-sm px-2 sm:px-4 sm:text-base cursor-pointer"
            >
              Log In
            </Button>
          </Link>
          <Link href="https://next-gig.co.uk/complete-profile">
            <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:shadow-lg hover:scale-105 transition-all text-sm px-2 sm:px-4 sm:text-base cursor-pointer">
              Sign Up
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 z-10">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <div className="flex flex-col justify-center space-y-4">
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
                    Job hunting is{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600">
                      broken.
                    </span>
                    <br /> We fixed it.
                  </h1>
                  <p className="max-w-[600px] text-gray-600 text-base md:text-xl lg:text-base xl:text-xl">
                    Stop wasting time refreshing job boards. NextGig delivers
                    fresh opportunities to your inbox every 8 hours. Because the
                    best gigs wait for no one.
                  </p>
                </motion.div>
              </div>

              <motion.div
                className="flex items-center justify-center mt-8 lg:mt-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-white border border-gray-100 rounded-xl p-2 shadow-md hover:shadow-xl transition-all duration-700 w-full max-w-[450px] lg:max-w-none">
                  <Image
                    src="/Dash.png"
                    alt="NextGig Dashboard"
                    width={550}
                    height={310}
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                  What we do differently
                </h2>
                <p className="max-w-[600px] text-gray-600 text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Finding jobs shouldn't feel like a second job.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-6 py-8 md:py-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-2 h-full">
                  <CardHeader>
                    <CardTitle className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-400">
                      Fresh finds every 8 hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      While others sleep, we keep looking. New opportunities
                      land on your dashboard three times daily.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-transparent border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-2 h-full">
                  <CardHeader>
                    <CardTitle className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-400">
                      Uncannily accurate matches
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Our algorithm gets you. It learns what you want and
                      filters out what you don't. No more scrolling through
                      irrelevant listings.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="sm:col-span-2 md:col-span-1"
              >
                <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-2 h-full">
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
              </motion.div>
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="w-full py-16 md:py-24 bg-gray-300/20 backdrop-blur-sm border-y border-gray-200/70">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Powering your job search{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600">
                  everywhere it matters
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600">
                We connect with the world's leading job platforms so you don't
                miss any opportunities
              </p>
            </div>

            <Tabs defaultValue="active" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="active">Active Integrations</TabsTrigger>
                <TabsTrigger value="coming">Coming Soon</TabsTrigger>
              </TabsList>

              <TabsContent value="active" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="transition-all hover:shadow-md">
                    <CardHeader className="pb-2">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <span className="font-semibold text-blue-600">
                            Li
                          </span>
                        </div>
                        <CardTitle className="text-lg">LinkedIn</CardTitle>
                        <Badge
                          variant="default"
                          className="ml-auto bg-green-500"
                        >
                          Live
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">
                        Professional network jobs, including premium listings
                        and exclusive opportunities
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="transition-all hover:shadow-md">
                    <CardHeader className="pb-2">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <span className="font-semibold text-blue-600">
                            Iy
                          </span>
                        </div>
                        <CardTitle className="text-lg">If You Could</CardTitle>
                        <Badge
                          variant="default"
                          className="ml-auto bg-green-500"
                        >
                          Live
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">
                        Curated job board specialising in flexible and
                        progressive roles for creative professionals
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="transition-all hover:shadow-md">
                    <CardHeader className="pb-2">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <span className="font-semibold text-blue-600">
                            UN
                          </span>
                        </div>
                        <CardTitle className="text-lg">UNJobs</CardTitle>
                        <Badge
                          variant="default"
                          className="ml-auto bg-green-500"
                        >
                          Live
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">
                        International development and humanitarian sector
                        opportunities from UN agencies and NGOs
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="coming" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="transition-all hover:shadow-md opacity-80">
                    <CardHeader className="pb-2">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                          <span className="font-semibold text-gray-500">
                            GD
                          </span>
                        </div>
                        <CardTitle className="text-lg">Glassdoor</CardTitle>
                        <Badge
                          variant="outline"
                          className="ml-auto bg-blue-50 text-blue-600 border-blue-200"
                        >
                          Soon
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">
                        Search jobs while accessing company ratings, salary
                        insights, and authentic employee reviews
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="transition-all hover:shadow-md opacity-80">
                    <CardHeader className="pb-2">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                          <span className="font-semibold text-gray-500">
                            WK
                          </span>
                        </div>
                        <CardTitle className="text-lg">Workable</CardTitle>
                        <Badge
                          variant="outline"
                          className="ml-auto bg-blue-50 text-blue-600 border-blue-200"
                        >
                          Soon
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">
                        Access high-quality positions directly from thousands of
                        companies' recruitment systems
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="transition-all hover:shadow-md opacity-80">
                    <CardHeader className="pb-2">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                          <span className="font-semibold text-gray-500">
                            ZR
                          </span>
                        </div>
                        <CardTitle className="text-lg">ZipRecruiter</CardTitle>
                        <Badge
                          variant="outline"
                          className="ml-auto bg-blue-50 text-blue-600 border-blue-200"
                        >
                          Soon
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">
                        Benefit from AI-powered job matching technology that
                        connects candidates with ideal employers
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* How It Works Section */}
        <section
          id="how-it-works"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                  Three steps to your next big break
                </h2>
                <p className="max-w-[600px] text-gray-600 text-base md:text-xl/relaxed lg:text-base/snug xl:text-xl/relaxed">
                  Simple enough for a Monday morning.
                  <br />
                  Powerful enough to change your career.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-8 md:py-12 sm:grid-cols-2 md:grid-cols-3">
              <motion.div
                className="flex flex-col items-center space-y-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-md">
                  <span className="text-xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold">Tell us what you want</h3>
                <p className="text-gray-600">
                  Select the job roles you know you can get hired for. Take 2
                  minutes, save 200 hours.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col items-center space-y-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-md">
                  <span className="text-xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold">Let us hunt for you</h3>
                <p className="text-gray-600">
                  Our platform scours the job market while you focus on what
                  matters. New matches every 8 hours.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col items-center space-y-4 text-center sm:col-span-2 md:col-span-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-md">
                  <span className="text-xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold">Apply only to the best</h3>
                <p className="text-gray-600">
                  Choose from curated opportunities that actually match your
                  worth and ambitions.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-300/20 backdrop-blur-sm border-y border-gray-200/70"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                  Ridiculously affordable
                </h2>
                <p className="max-w-[600px] text-gray-600 text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Less than a coffee, more valuable than a recruiter.
                </p>
              </div>
            </div>

            <motion.div
              className="mx-auto max-w-lg py-8 md:py-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">NextGig Premium</CardTitle>
                  <CardDescription className="text-3xl font-bold">
                    £2.99/month
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-4">
                    <motion.li
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-lg text-green-500">✓</span>
                      <span>Fresh job alerts every 8 hours</span>
                    </motion.li>
                    <motion.li
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-lg text-green-500">✓</span>
                      <span>Personalised dashboard</span>
                    </motion.li>
                    <motion.li
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-lg text-green-500">✓</span>
                      <span>Salary insights and comparisons</span>
                    </motion.li>
                    <motion.li
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-lg text-green-500">✓</span>
                      <span>Application tracking tools</span>
                    </motion.li>
                    <motion.li
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-lg text-green-500">✓</span>
                      <span>Email and browser notifications</span>
                    </motion.li>
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-col gap-2">
                  <Link
                    href="https://next-gig.co.uk/complete-profile"
                    className="w-full"
                  >
                    <Button
                      size="lg"
                      className="w-full text-base md:text-lg py-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:shadow-lg hover:scale-[1.03] transition-all cursor-pointer"
                    >
                      Start 7-day free trial
                    </Button>
                  </Link>
                  <p className="text-sm text-center text-gray-500">
                    No commitment. Cancel anytime.
                  </p>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-transparent">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12">
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                  How people use{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600">
                    NextGig
                  </span>
                </h2>
                <p className="max-w-[600px] text-gray-600 text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover how NextGig fits into different career journeys
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 overflow-hidden relative pb-14">
                  {/* Remove this div to remove the dot */}
                  <CardHeader className="relative">
                    <div className="w-12 h-12 rounded-full bg-[#ff8c00] flex items-center justify-center mb-4 shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    <CardTitle className="text-xl">Active job seeker</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Get daily updates for your dream role without spending
                      hours scrolling. Set alerts based on exact salary
                      requirements and skills.
                    </p>
                  </CardContent>
                  <div className="absolute bottom-7 left-5 right-6">
                    <Badge
                      variant="outline"
                      className="bg-[#ff8c00]/10 text-[#ff8c00] border-[#ff8c00]/20"
                    >
                      Perfect for new graduates
                    </Badge>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 50,
                }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 overflow-hidden relative pb-14">
                  {/* Remove this div to remove the dot */}
                  <CardHeader className="relative">
                    <div className="w-12 h-12 rounded-full bg-[#00cd55] flex items-center justify-center mb-4 shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </div>
                    <CardTitle className="text-xl">Passive explorer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Keep an eye on the market while happily employed. Stay
                      informed about salary trends and exciting opportunities
                      without actively searching.
                    </p>
                  </CardContent>
                  <div className="absolute bottom-7 left-5 right-6">
                    <Badge
                      variant="outline"
                      className="bg-[#00cd55]/10 text-[#00cd55] border-[#D6FF33]/20"
                    >
                      Ideal for professionals
                    </Badge>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  type: "spring",
                  stiffness: 50,
                }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 overflow-hidden relative pb-14">
                  {/* Remove this div to remove the dot */}
                  <CardHeader className="relative">
                    <div className="w-12 h-12 rounded-full bg-[#ff008c] flex items-center justify-center mb-4 shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                        />
                      </svg>
                    </div>
                    <CardTitle className="text-xl">Career changer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Find roles that match your transferable skills. Our AI
                      identifies positions where your experience is relevant,
                      even in new industries.
                    </p>
                  </CardContent>
                  <div className="absolute bottom-7 left-5 right-6">
                    <Badge
                      variant="outline"
                      className="bg-[#ff008c]/10 text-[#ff008c] border-[#ff008c]/20"
                    >
                      Best for industry switchers
                    </Badge>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-300/20 backdrop-blur-sm border-y border-gray-200/70">
          <div className="container px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl mb-4 md:mb-6">
                Great jobs don't wait for perfect timing
              </h2>
              <p className="max-w-[800px] mx-auto text-gray-600 text-base md:text-xl mb-6 md:mb-8">
                Take control of your career journey today. We'll handle the
                searching so you can focus on landing the role.
              </p>
              <Link
                href="https://next-gig.co.uk/complete-profile"
                className="inline-block"
              >
                <Button
                  size="lg"
                  className="text-base md:text-lg px-8 py-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:shadow-lg hover:scale-[1.03] transition-all cursor-pointer"
                >
                  Start your free trial
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-15 w-full px-4 md:px-6 border-t border-gray-100 z-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="col-span-2 md:col-span-1">
              {/* Logo and tagline */}
              <div className="flex items-center mb-4">
                <img
                  src="/nextgig-logo.svg"
                  alt="NextGig Logo"
                  className="h-8 w-auto mr-2"
                />
              </div>
              <p className="text-sm text-gray-600">
                Dream gigs delivered. Not searched for.
              </p>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://next.gig.jack-robertson.co.uk/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://next.gig.jack-robertson.co.uk/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://next.gig.jack-robertson.co.uk/cookies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>

            {/* Added dedicated cookies policy section */}
            <div>
              <h3 className="text-base md:text-lg font-bold mb-4">
                Cookie Policy
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                We use essential cookies to make our site work.
              </p>
              <button
                className="text-sm px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors cursor-pointer"
                onClick={() => setIsCookieSettingsOpen(true)}
              >
                Cookie Settings
              </button>

              {/* Modal component */}
              <CookieSettings
                isOpen={isCookieSettingsOpen}
                onClose={() => setIsCookieSettingsOpen(false)}
              />
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-xs text-gray-500 mb-4 md:mb-0">
                © 2025 NextGig. All rights reserved.
              </p>

              {/* Created by section with logo that links to website */}
              <div className="flex items-center">
                <Link
                  href="https://jack-robertson.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:opacity-80 transition-opacity"
                >
                  <span className="text-xs text-gray-500 mr-2">Created by</span>
                  <img
                    src="/Blue_LogoV2.svg"
                    alt="Creator Logo"
                    className="h-6 w-auto transition-transform hover:scale-105"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

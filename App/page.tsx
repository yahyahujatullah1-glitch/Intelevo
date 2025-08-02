"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Brain, Palette, Rocket, CheckCircle, ArrowRight, Linkedin, Menu, X } from "lucide-react"
import { submitContactForm } from "./actions"

// Package data structure
const packageData = [
  {
    category: "🔹 AI-Powered App Upgrades",
    description: "Add modern AI features to your app in just days.",
    packages: [
      {
        id: "starter-ai",
        title: "Starter AI",
        tagline: "Add GPT-powered chatbot to your app",
        features: ["GPT-powered chatbot", "Basic UI integration", "API setup included"],
        price: "Starting at $1,500",
        delivery: "4 days",
        icon: "🤖",
        gradient: "from-blue-500 to-cyan-500",
        ctaText: "Book Free Call",
        popular: false,
      },
      {
        id: "pro-ai",
        title: "Pro AI",
        tagline: "Add NLP or Image-based AI feature",
        features: ["Advanced AI integration", "Custom API setup", "Performance optimization"],
        price: "Starting at $3,500",
        delivery: "6 days",
        icon: "🧠",
        gradient: "from-purple-500 to-pink-500",
        ctaText: "View Example",
        popular: true,
      },
    ],
  },
  {
    category: "🚀 MVP in a Week",
    description: "Build a clean, working version of your idea — fast.",
    packages: [
      {
        id: "rapid-mvp",
        title: "Rapid MVP",
        tagline: "UI/UX design + core features",
        features: ["UI/UX design", "Auth + 2–3 features", "Deploy to Vercel"],
        price: "$3,000 – $5,000",
        delivery: "7 days",
        icon: "⚡",
        gradient: "from-green-500 to-emerald-500",
        ctaText: "Launch in 7 Days",
        popular: false,
      },
      {
        id: "launch-ready-mvp",
        title: "Launch-Ready MVP",
        tagline: "Scalable backend + advanced features",
        features: ["Scalable backend", "Payments or real-time features", "Launch support included"],
        price: "$6,000 – $9,000",
        delivery: "7 days",
        icon: "🎯",
        gradient: "from-indigo-500 to-purple-500",
        ctaText: "Build Now",
        popular: true,
      },
    ],
  },
  {
    category: "🌐 Web App Modernization",
    description: "Rebuild or upgrade your existing website or internal tool.",
    packages: [
      {
        id: "ui-refresh",
        title: "UI Refresh",
        tagline: "New design using modern frameworks",
        features: ["Modern UI design", "Mobile responsive", "Performance optimized"],
        price: "$2,000",
        delivery: "5 days",
        icon: "✨",
        gradient: "from-teal-500 to-cyan-500",
        ctaText: "Upgrade UI",
        popular: false,
      },
      {
        id: "full-redesign",
        title: "Full Redesign",
        tagline: "UI + backend optimization",
        features: ["Complete UI overhaul", "Backend optimization", "Performance upgrades"],
        price: "$6,000+",
        delivery: "7 days",
        icon: "🔄",
        gradient: "from-red-500 to-orange-500",
        ctaText: "Book Now",
        popular: false,
      },
    ],
  },
]

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  useEffect(() => {
    setIsVisible(true)

    // Animate process steps
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 6)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      const result = await submitContactForm(formData)
      if (result.success) {
        setSubmitMessage(result.message)
        // Reset form
        const form = document.getElementById("contact-form") as HTMLFormElement
        form?.reset()
      }
    } catch (error) {
      setSubmitMessage(
        "Sorry, there was an error sending your message. Please try again or contact us directly via email.",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">IntelevoAgency</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => scrollToSection("packages")}
                  className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
                >
                  Packages
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-indigo-600">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-lg mt-2 shadow-lg">
                <button
                  onClick={() => scrollToSection("packages")}
                  className="block text-gray-700 hover:text-indigo-600 px-3 py-2 w-full text-left font-medium"
                >
                  Packages
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block text-gray-700 hover:text-indigo-600 px-3 py-2 w-full text-left font-medium"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block text-gray-700 hover:text-indigo-600 px-3 py-2 w-full text-left font-medium"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-500 to-cyan-500 animate-gradient-x pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/90 via-indigo-500/80 to-cyan-500/90" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className={`text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="inline-block animate-typing">Build Smarter Apps.</span>
            <br />
            <span className="text-cyan-200">Launch Faster. Grow Bigger.</span>
          </h1>

          <p
            className={`text-xl sm:text-2xl text-indigo-100 mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            I help founders and business owners turn ideas into powerful web, mobile, and AI-integrated
            products—designed for scale, speed, and impact.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Button
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl"
              onClick={() => scrollToSection("packages")}
            >
              View Packages
              <div className="ml-2 animate-bounce">
                <CheckCircle className="w-5 h-5" />
              </div>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-indigo-600 transform hover:scale-105 transition-all duration-300 text-lg px-8 py-4 rounded-full group bg-transparent"
              onClick={() => scrollToSection("contact")}
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-400/20 rounded-full animate-float-delayed" />
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Our Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Choose from our productized service packages designed to solve specific problems for startup founders and
              business owners.
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-lg font-medium">
              ⚡ All packages delivered in 7 days or less
            </div>
          </div>

          {packageData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{category.category}</h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">{category.description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {category.packages.map((pkg, index) => (
                  <div
                    key={pkg.id}
                    className={`group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border overflow-hidden ${
                      pkg.popular ? "border-2 border-purple-200 relative" : "border border-gray-100"
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 text-sm font-semibold">
                        MOST POPULAR
                      </div>
                    )}
                    <div className={`p-6 ${pkg.popular ? "pt-12" : ""}`}>
                      {/* Icon and Title */}
                      <div className="flex items-center mb-6">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br ${pkg.gradient} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <span className="text-2xl">{pkg.icon}</span>
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-gray-900 mb-1">{pkg.title}</h4>
                          <div className="flex items-center text-sm text-gray-500">
                            <span className="inline-flex items-center px-2 py-1 bg-gray-100 rounded-full">
                              🕒 Delivered in {pkg.delivery}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Tagline */}
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">{pkg.tagline}</p>

                      {/* Features */}
                      <ul className="space-y-3 mb-8">
                        {pkg.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-gray-700">
                            <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Price and CTA */}
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-2xl font-bold text-gray-900">{pkg.price}</div>
                          <div className="text-sm text-gray-500">Fixed price, no surprises</div>
                        </div>
                        <Button
                          className={`bg-gradient-to-r ${pkg.gradient} hover:opacity-90 text-white px-6 py-3 rounded-full transform hover:scale-105 transition-all duration-200 font-semibold`}
                          onClick={() => scrollToSection("contact")}
                        >
                          {pkg.ctaText}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Trust Indicators */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-8 px-8 py-4 bg-gray-50 rounded-2xl">
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>Money-back guarantee</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>Free revisions included</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>24/7 support</span>
              </div>
            </div>
          </div>

          {/* Client Testimonials Strip */}
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-6">Trusted by 50+ startups and growing businesses</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-2xl font-bold text-gray-400">TechCorp</div>
              <div className="text-2xl font-bold text-gray-400">StartupXYZ</div>
              <div className="text-2xl font-bold text-gray-400">InnovateCo</div>
              <div className="text-2xl font-bold text-gray-400">GrowthLab</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 animate-slide-up">
              Turn Your{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent animate-pulse">
                Idea
              </span>{" "}
              Into Reality
            </h2>

            <div className="relative max-w-4xl mx-auto">
              <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed animate-fade-in-left mb-8">
                We transform your vision into powerful, scalable applications that drive real business results.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="group transform hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">💡</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ideation</h3>
                  <p className="text-gray-600">From concept to blueprint</p>
                </div>

                <div className="group transform hover:scale-105 transition-all duration-300 delay-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Development</h3>
                  <p className="text-gray-600">Cutting-edge technology</p>
                </div>

                <div className="group transform hover:scale-105 transition-all duration-300 delay-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">🚀</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Launch</h3>
                  <p className="text-gray-600">Your success story begins</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-16">What I Can Do for You</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Custom App Development",
                description:
                  "Cross-platform mobile and web apps, tailored for your business operations, customers, and growth.",
                icon: Smartphone,
                delay: "0ms",
              },
              {
                name: "AI-Powered Solutions",
                description:
                  "Integrate smart features like chatbots, automation, and predictive analytics to give your business an edge.",
                icon: Brain,
                delay: "200ms",
              },
              {
                name: "UI/UX Design with Micro Animations",
                description: "Intuitive, clean, and interactive interfaces that engage users and reflect your brand.",
                icon: Palette,
                delay: "400ms",
              },
              {
                name: "MVPs & Startup Prototypes",
                description: "Quick launch MVPs for startups — with scalable architecture and clean codebase.",
                icon: Rocket,
                delay: "600ms",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-16">My Process</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Discovery Call – Understand your vision & goals",
              "Planning & Proposal – Timeline, tools, milestones",
              "Design & Prototype – Wireframes and interactive UI/UX",
              "Development – Build your app using latest tech stack",
              "Testing & Feedback – Ensure smooth performance",
              "Launch & Support – Go live with ongoing updates",
            ].map((step, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-lg transition-all duration-500 ${
                  activeStep === index
                    ? "bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-xl scale-105"
                    : "bg-white text-gray-700 shadow-lg"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mb-4 ${
                    activeStep === index ? "bg-white text-indigo-600" : "bg-indigo-500 text-white"
                  } transform ${activeStep === index ? "rotate-360" : ""} transition-all duration-500`}
                >
                  {index + 1}
                </div>
                <p className="font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-16">What Clients Say</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                name: "Michael Johnson",
                role: "Startup Founder",
                text: "IntelevoAgency helped bring our app to life from scratch — on time, on budget, and with great performance.",
                animation: "animate-fade-in-left",
              },
              {
                name: "Sarah Williams",
                role: "Retail Business Owner",
                text: "Their attention to detail and understanding of business logic makes them stand out.",
                animation: "animate-fade-in-right",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className={`p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ${testimonial.animation}`}
              >
                <CardContent className="p-0">
                  <div className="text-4xl text-indigo-500 mb-4">"</div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">{testimonial.text}</p>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-indigo-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-indigo-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
              Choose your package above and contact me directly. I'll respond within 24 hours to discuss your project
              and get started immediately.
            </p>

            {/* Social Media Links */}
            <p className="text-lg text-indigo-100 mb-6 font-medium">Contact me directly:</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
              <a
                href="https://www.linkedin.com/in/intelevo-agency-347587378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 min-w-[200px] justify-center"
              >
                <Linkedin className="w-5 h-5 text-white" />
                <span className="text-white font-medium">LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/intelevoagency?igsh=MW9kdHY1NDhrMnV0bA=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 min-w-[200px] justify-center"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.40z" />
                </svg>
                <span className="text-white font-medium">Instagram</span>
              </a>
              <a
                href="mailto:invetevoagency@hotmail.com"
                className="flex items-center space-x-3 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 min-w-[200px] justify-center"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.91L12 10.09l9.455-6.269h.909c.904 0 1.636.732 1.636 1.636z" />
                </svg>
                <span className="text-white font-medium">Email</span>
              </a>
            </div>
          </div>

          <Card className="shadow-2xl">
            <CardContent className="p-8">
              <form id="contact-form" action={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      required
                      className="h-12 focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="h-12 focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    name="business"
                    placeholder="Business Type"
                    className="h-12 focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                  />
                </div>

                {submitMessage && (
                  <div
                    className={`p-4 rounded-lg ${submitMessage.includes("error") ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}
                  >
                    {submitMessage}
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-700 hover:to-cyan-600 transform hover:scale-105 transition-all duration-200 h-12 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5" />}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© 2025 IntelevoAgency. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline">
                Privacy Policy
              </a>
              <a
                href="https://www.linkedin.com/in/intelevo-agency-347587378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/intelevoagency?igsh=MW9kdHY1NDhrMnV0bA=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.40z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

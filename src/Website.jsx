import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles, Shield, Zap, Phone, Mail, MapPin } from "lucide-react";

const CONFIG = {
  brand: "Breaksweat",
  tagline: "Do more with a beautifully simple website.",
  primaryCTA: "Get Started",
  secondaryCTA: "See Pricing",
  features: [
    { title: "Fast setup", desc: "Launch in minutes, not weeks.", icon: Zap },
    { title: "Secure by default", desc: "Best-practice security baked in.", icon: Shield },
    { title: "Delightful UI", desc: "Clean, modern, responsive design.", icon: Sparkles },
  ],
  plans: [
    { name: "Starter", price: "£0", period: "/mo", features: ["1 page", "Basic styling", "Email capture"], highlight: false },
    { name: "Pro", price: "£29", period: "/mo", features: ["Up to 5 pages", "Blog section", "Priority support"], highlight: true },
    { name: "Business", price: "£99", period: "/mo", features: ["Unlimited pages", "CRM integration", "Custom components"], highlight: false },
  ],
  contact: { phone: "+44 20 7123 4567", email: "hello@yourbrand.com", address: "London, UK" },
};

export default function Website() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Header />
      <Hero />
      <Features />
      <Showcase />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

function Container({ children }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>;
}

function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <div className="h-8 w-8 rounded-xl bg-slate-900"></div>
            <span>{CONFIG.brand}</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#features" className="text-sm text-slate-600 hover:text-slate-900">Features</a>
            <a href="#pricing" className="text-sm text-slate-600 hover:text-slate-900">Pricing</a>
            <a href="#faq" className="text-sm text-slate-600 hover:text-slate-900">FAQ</a>
            <a href="#contact" className="text-sm text-slate-600 hover:text-slate-900">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#pricing" className="rounded-2xl bg-slate-900 px-4 py-2 text-white">{CONFIG.primaryCTA}</a>
          </div>
        </div>
      </Container>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b">
      <Container>
        <div className="grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-extrabold tracking-tight sm:text-5xl"
            >
              {CONFIG.tagline}
            </motion.h1>
            <p className="mt-4 text-lg text-slate-600">
              A polished, conversion-ready landing page with sensible defaults. Swap the copy, drop in your logo, and you're live.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#pricing" className="rounded-2xl bg-slate-900 px-5 py-2 text-white inline-flex items-center">
                {CONFIG.primaryCTA}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#pricing" className="rounded-2xl border px-5 py-2 inline-flex items-center">
                {CONFIG.secondaryCTA}
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2"><Shield className="h-4 w-4"/>SSL</div>
              <div className="flex items-center gap-2"><Zap className="h-4 w-4"/>Performance</div>
              <div className="flex items-center gap-2"><Sparkles className="h-4 w-4"/>Aesthetic</div>
            </div>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="aspect-[16/10] overflow-hidden rounded-3xl border bg-white shadow-sm">
                <div className="grid h-full w-full place-items-center text-center">
                  <div>
                    <div className="mx-auto h-16 w-16 rounded-2xl bg-slate-900/90"></div>
                    <p className="mt-4 text-sm text-slate-500">Drop product shot / screenshot here</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="py-16 md:py-24">
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Everything you need — nothing you don't</h2>
          <p className="mt-3 text-slate-600">Thoughtful defaults and clean components that just work on mobile and desktop.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CONFIG.features.map((f, i) => (
            <div key={i} className="rounded-2xl border bg-white p-6">
              <div className="mb-2 inline-flex rounded-xl border p-2">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Showcase() {
  return (
    <section className="border-y bg-white py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="aspect-[16/10] rounded-3xl border bg-[linear-gradient(120deg,rgba(15,23,42,0.9),rgba(100,116,139,0.6))]" />
          <div>
            <h3 className="text-2xl font-semibold">Show, don't tell</h3>
            <p className="mt-3 text-slate-600">Swap this block for your product image or gallery. Keep it real with screenshots or photos so visitors trust what they see.</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4"/> Responsive and accessible</li>
              <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4"/> Lightweight, production-ready React</li>
              <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4"/> Smooth, subtle motion with Framer</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple pricing</h2>
          <p className="mt-3 text-slate-600">Start free. Upgrade when you're ready.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CONFIG.plans.map((p, i) => (
            <div key={i} className={`rounded-2xl border bg-white p-6 ${p.highlight ? "border-slate-900 shadow" : ""}`}>
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{p.price}</span>
                <span className="text-slate-500">{p.period}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4"/>{f}</li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 block rounded-2xl bg-slate-900 px-4 py-2 text-center text-white">Choose {p.name}</a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "Is this ready to deploy?", a: "Yes. It's a single React component with Tailwind classes." },
    { q: "How do I customize it?", a: "Edit the CONFIG object at the top and the section copy. Swap images and tweak sections as needed." },
    { q: "Can you add a blog or CMS?", a: "Yep. We can extend this with a blog, forms, or integrations if you share your stack preferences." },
  ];
  return (
    <section id="faq" className="border-t py-16 md:py-24">
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">FAQs</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((item, i) => (
            <div key={i} className="rounded-2xl border bg-white p-6">
              <h3 className="text-lg font-semibold">{item.q}</h3>
              <p className="mt-2 text-slate-600">{item.a}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-slate-50 py-16 md:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold">Let's talk</h3>
            <p className="mt-3 text-slate-600">Have questions or want this tailored for your business? Send a note and we'll get back to you.</p>
            <div className="mt-6 space-y-2 text-sm text-slate-700">
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> {CONFIG.contact.phone}</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> {CONFIG.contact.email}</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {CONFIG.contact.address}</p>
            </div>
          </div>
          <div className="rounded-2xl border bg-white p-6">
            <form action={`mailto:${CONFIG.contact.email}`} method="post" encType="text/plain" className="space-y-4">
              <input name="name" placeholder="Your name" required className="w-full rounded-xl border px-3 py-2" />
              <input name="email" type="email" placeholder="Email address" required className="w-full rounded-xl border px-3 py-2" />
              <textarea name="message" placeholder="How can we help?" rows={5} className="w-full rounded-xl border px-3 py-2" />
              <button type="submit" className="w-full rounded-2xl bg-slate-900 px-4 py-2 text-white">Send</button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-white py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} {CONFIG.brand}. All rights reserved.</p>
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

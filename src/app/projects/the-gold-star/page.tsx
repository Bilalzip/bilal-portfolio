import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { TechBadge } from "@/components/tech-badge"

export const metadata: Metadata = {
  title: "The Gold Star - QR Feedback Platform",
  description: "Scan-and-review with public/private flows, admin moderation, and analytics.",
}

export default function GoldStarPage() {
  return (
    <div className="container px-4 py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>

        <h1 className="text-4xl font-bold mb-4">The Gold Star — QR Feedback Platform</h1>

        {/* Links */}
        <div className="flex flex-wrap gap-3 mb-8">
          <Link
            href="https://thegoldstar.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-accent transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </Link>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-12">
          {["React", "Vite", "Express.js", "PostgreSQL", "Tailwind", "Framer Motion", "Vercel"].map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Overview */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Gold Star is a QR code-based feedback platform that enables businesses to collect customer reviews seamlessly. Customers scan a code, leave feedback (public or private), and businesses get real-time analytics and moderation tools—all while maintaining Google review compliance.
            </p>
          </section>

          {/* Problem */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Problem & Users</h2>
            <p className="text-muted-foreground mb-4">
              <strong>Target users:</strong> Small to medium businesses (restaurants, retail, services)
            </p>
            <div className="bg-accent rounded-2xl p-6">
              <p className="font-semibold mb-3">Key pain points:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Traditional feedback cards are manual and slow</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Online review forms have high drop-off rates</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>No easy way to filter spam before publishing</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Limited analytics on customer sentiment</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Google review compliance is complex</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Solution */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Solution</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border bg-card p-5">
                <p className="font-semibold mb-2">QR Code Generation</p>
                <p className="text-sm text-muted-foreground">Unique codes linked to business profiles</p>
              </div>
              <div className="rounded-xl border bg-card p-5">
                <p className="font-semibold mb-2">Dual Review Paths</p>
                <p className="text-sm text-muted-foreground">Public (moderated) or private feedback</p>
              </div>
              <div className="rounded-xl border bg-card p-5">
                <p className="font-semibold mb-2">Admin Dashboard</p>
                <p className="text-sm text-muted-foreground">Moderation, analytics, responses</p>
              </div>
              <div className="rounded-xl border bg-card p-5">
                <p className="font-semibold mb-2">Rate Limiting</p>
                <p className="text-sm text-muted-foreground">Multi-layer spam prevention</p>
              </div>
            </div>
          </section>

          {/* Key Decisions */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Key Technical Decisions</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-foreground pl-6">
                <h3 className="text-xl font-semibold mb-2">1. Signed URLs for Security</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Each QR code generates a signed URL with an HMAC signature to prevent tampering and unauthorized review submissions. This ensures only legitimate scans can submit reviews.
                </p>
              </div>

              <div className="border-l-4 border-foreground pl-6">
                <h3 className="text-xl font-semibold mb-2">2. Multi-Layer Rate Limiting</h3>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  Implemented comprehensive rate limiting to prevent spam while ensuring legitimate users are not blocked:
                </p>
                <div className="bg-accent rounded-xl p-4 space-y-2 text-sm">
                  <p><strong>Per IP:</strong> 5 reviews per hour</p>
                  <p><strong>Per business:</strong> 50 reviews per day</p>
                  <p><strong>Per device:</strong> 3 reviews per day</p>
                </div>
              </div>

              <div className="border-l-4 border-foreground pl-6">
                <h3 className="text-xl font-semibold mb-2">3. Google Review Compliance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Built a workflow that collects reviews, allows moderator approval/rejection, then redirects approved reviews to Google with pre-filled forms—ensuring compliance with Google authenticity policies.
                </p>
              </div>
            </div>
          </section>

          {/* Challenges */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
            <div className="space-y-4">
              <div className="rounded-2xl border bg-card p-6">
                <h3 className="font-semibold mb-2">Challenge: Spam Prevention</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Initial launch saw automated spam submissions overwhelming the system.
                </p>
                <p className="text-sm">
                  <strong>Solution:</strong> Browser fingerprinting, CAPTCHA for suspicious patterns, honeypot fields, and multi-level rate limiting reduced spam to &lt;2%.
                </p>
              </div>

              <div className="rounded-2xl border bg-card p-6">
                <h3 className="font-semibold mb-2">Challenge: Mobile UX Drop-off</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Early testing showed 42% completion rate on mobile devices.
                </p>
                <p className="text-sm">
                  <strong>Solution:</strong> Reduced form fields, added animations, implemented auto-save, optimized for native mobile keyboards. Completion rate increased to 78%.
                </p>
              </div>
            </div>
          </section>

          {/* Impact */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Impact & Metrics</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border bg-card p-6">
                <p className="text-3xl font-bold mb-1">12</p>
                <p className="text-sm text-muted-foreground">Active businesses</p>
              </div>
              <div className="rounded-2xl border bg-card p-6">
                <p className="text-3xl font-bold mb-1">1,200+</p>
                <p className="text-sm text-muted-foreground">Reviews collected</p>
              </div>
              <div className="rounded-2xl border bg-card p-6">
                <p className="text-3xl font-bold mb-1">85%</p>
                <p className="text-sm text-muted-foreground">Completion rate</p>
              </div>
              <div className="rounded-2xl border bg-card p-6">
                <p className="text-3xl font-bold mb-1">&lt;2%</p>
                <p className="text-sm text-muted-foreground">Spam rate</p>
              </div>
              <div className="rounded-2xl border bg-card p-6">
                <p className="text-3xl font-bold mb-1">99.8%</p>
                <p className="text-sm text-muted-foreground">Uptime</p>
              </div>
              <div className="rounded-2xl border bg-card p-6">
                <p className="text-3xl font-bold mb-1">120ms</p>
                <p className="text-sm text-muted-foreground">API response</p>
              </div>
            </div>
          </section>

          {/* What's Next */}
          <section>
            <h2 className="text-2xl font-bold mb-4">What is Next</h2>
            <div className="rounded-2xl border bg-card p-6">
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-foreground">→</span>
                  <span><strong>Owner reply system:</strong> Allow businesses to respond to reviews</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">→</span>
                  <span><strong>NPS trend tracking:</strong> Net Promoter Score analytics over time</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">→</span>
                  <span><strong>Email digest:</strong> Weekly summary of reviews and metrics</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">→</span>
                  <span><strong>Multi-location support:</strong> Chain businesses with location-specific analytics</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">→</span>
                  <span><strong>Integration APIs:</strong> Webhook support for Slack, Zapier, etc.</span>
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t flex justify-between">
          <Link href="/projects/hixbi" className="text-sm text-muted-foreground hover:text-foreground">
            ← Previous: Hixbi
          </Link>
          <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground">
            All projects →
          </Link>
        </div>
      </div>
    </div>
  )
}
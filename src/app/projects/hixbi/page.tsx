import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { TechBadge } from "@/components/tech-badge"

export const metadata: Metadata = {
  title: "Hixbi - Multi-Model AI Chat Platform",
  description: "Unified chat with Gemini, ChatGPT, Claude, and DeepSeek; edge microservices for fast responses.",
}

export default function HixbiPage() {
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

        <h1 className="text-4xl font-bold mb-4">Hixbi — Multi-Model AI Chat Platform</h1>

        {/* Links */}
        <div className="flex flex-wrap gap-3 mb-8">
          <Link
            href="https://hixbi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-accent transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </Link>
          <Link
            href="https://github.com/Bilalzip/Hixbi-public"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-accent transition-colors"
          >
            <Github className="h-4 w-4" />
            View Code
          </Link>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-12">
          {["Next.js", "Cloudflare Workers", "Stripe", "Zustand", "NextAuth", "PostgreSQL"].map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Overview */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hixbi is a unified chat platform that brings together multiple AI models—Gemini, ChatGPT, Claude, and DeepSeek—into a single, seamless interface. Users can switch between models, manage conversations, and leverage edge computing for lightning-fast responses.
            </p>
          </section>

          {/* Problem */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Problem & Users</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Developers and AI enthusiasts often need to compare responses from different LLMs or use specific models for different tasks. However, managing multiple subscriptions, juggling different interfaces, and dealing with varying APIs creates friction.
            </p>
            <div className="bg-accent rounded-2xl p-6">
              <p className="font-semibold mb-3">Key challenges:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Switching between multiple AI platforms is time-consuming</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Each platform has different authentication and billing systems</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Response times vary significantly based on geography</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>No unified conversation history across models</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Solution */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Solution Architecture</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Tech Stack</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border bg-card p-4">
                    <p className="font-medium mb-1">Frontend</p>
                    <p className="text-sm text-muted-foreground">Next.js 14, TypeScript, Zustand</p>
                  </div>
                  <div className="rounded-xl border bg-card p-4">
                    <p className="font-medium mb-1">Edge Layer</p>
                    <p className="text-sm text-muted-foreground">Cloudflare Workers</p>
                  </div>
                  <div className="rounded-xl border bg-card p-4">
                    <p className="font-medium mb-1">Authentication</p>
                    <p className="text-sm text-muted-foreground">NextAuth.js with RBAC</p>
                  </div>
                  <div className="rounded-xl border bg-card p-4">
                    <p className="font-medium mb-1">Payments</p>
                    <p className="text-sm text-muted-foreground">Stripe subscriptions</p>
                  </div>
                </div>
              </div>

              <div className="bg-accent rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-3">System Design</h3>
                <pre className="text-sm overflow-x-auto">
{`User Request → Next.js App → Cloudflare Worker (Edge) → AI Provider
                ↓
         Zustand State
                ↓
         PostgreSQL`}
                </pre>
              </div>
            </div>
          </section>

          {/* Key Decisions */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Key Technical Decisions</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-foreground pl-6">
                <h3 className="text-xl font-semibold mb-2">1. Edge Compute for Low Latency</h3>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  Instead of proxying all AI requests through a single backend server, I deployed separate Cloudflare Workers for each AI provider. This reduces latency by routing requests through Cloudflare global network.
                </p>
                <div className="bg-green-500/10 text-green-700 dark:text-green-400 px-4 py-2 rounded-lg text-sm font-medium inline-block">
                  Impact: 30% faster TTFB
                </div>
              </div>

              <div className="border-l-4 border-foreground pl-6">
                <h3 className="text-xl font-semibold mb-2">2. Unified State Management</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Managing conversation state, model switching, and streaming responses required a robust state solution. Zustand provided the perfect balance of simplicity and power.
                </p>
              </div>

              <div className="border-l-4 border-foreground pl-6">
                <h3 className="text-xl font-semibold mb-2">3. Stripe Integration</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Users can choose between different subscription tiers with Stripe webhooks handling lifecycle events and NextAuth RBAC enforcing feature access.
                </p>
              </div>
            </div>
          </section>

          {/* Impact */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Impact & Metrics</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border bg-card p-6">
                <p className="text-3xl font-bold mb-1">30%</p>
                <p className="text-sm text-muted-foreground">Faster TTFB</p>
              </div>
              <div className="rounded-2xl border bg-card p-6">
                <p className="text-3xl font-bold mb-1">99.9%</p>
                <p className="text-sm text-muted-foreground">Uptime</p>
              </div>
              <div className="rounded-2xl border bg-card p-6">
                <p className="text-3xl font-bold mb-1">&lt;100ms</p>
                <p className="text-sm text-muted-foreground">To first token</p>
              </div>
              <div className="rounded-2xl border bg-card p-6">
                <p className="text-3xl font-bold mb-1">45</p>
                <p className="text-sm text-muted-foreground">Msgs/day avg</p>
              </div>
              <div className="rounded-2xl border bg-card p-6">
                <p className="text-3xl font-bold mb-1">85%</p>
                <p className="text-sm text-muted-foreground">Week 1 retention</p>
              </div>
              <div className="rounded-2xl border bg-card p-6">
                <p className="text-3xl font-bold mb-1">4.8/5</p>
                <p className="text-sm text-muted-foreground">User rating</p>
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
                  <span><strong>Organization workspaces:</strong> Team collaboration with shared conversations</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">→</span>
                  <span><strong>Usage dashboards:</strong> Detailed analytics on model performance and costs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">→</span>
                  <span><strong>RAG integration:</strong> Upload documents for context-aware responses</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">→</span>
                  <span><strong>Mobile apps:</strong> Native iOS and Android applications</span>
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t flex justify-between">
          <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground">
            ← All projects
          </Link>
          <Link href="/projects/the-gold-star" className="text-sm text-muted-foreground hover:text-foreground">
            Next: The Gold Star →
          </Link>
        </div>
      </div>
    </div>
  )
}
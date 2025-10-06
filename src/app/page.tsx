import Link from "next/link"
import { ArrowRight, Download, ExternalLink, Github } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { TechBadge } from "@/components/tech-badge"

import { projects, siteConfig, techStack } from "@/app/lib/constants"

export default function Page () {
  const featuredProjects = projects.filter((p) => p.featured)

  return ( 
    <div className="container px-4 py-12 md:py-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {siteConfig.name}
        </h1>
        <p className="mt-4 text-xl text-muted-foreground md:text-2xl">
          {siteConfig.headline}
        </p>
        <p className="mt-3 text-base text-muted-foreground md:text-lg">
          {siteConfig.subline}
        </p>

        {/* Quick Contact Info */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
          <span>{siteConfig.location}</span>
          <span>•</span>
          <Link
            href={`mailto:${siteConfig.links.email}`}
            className="hover:text-foreground transition-colors"
          >
            {siteConfig.links.email}
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-background font-medium hover:opacity-90 transition-opacity"
          >
            View Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-medium hover:bg-accent transition-colors"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </Link>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="mx-auto mt-20 max-w-5xl">
        <h2 className="text-2xl font-bold md:text-3xl">Highlights</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <p className="leading-relaxed">
              Shipped <strong>Hixbi</strong>: unified chat across Gemini, ChatGPT, Claude, 
              DeepSeek with Cloudflare Workers and Stripe.
            </p>
          </div>
          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <p className="leading-relaxed">
              Built <strong>The Gold Star</strong>: QR feedback flow with React + Vite, 
              Express + SQL, deployed on Vercel.
            </p>
          </div>
          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <p className="leading-relaxed">
              IT roles at <strong>Confederation College</strong>: Bash automation, 
              Azure AD, Windows/Linux troubleshooting.
            </p>
          </div>
          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <p className="leading-relaxed">
              <strong>Community leadership</strong>: VP, Muslim Students Community — 
              events, leadership, collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="mx-auto mt-20 max-w-5xl">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold md:text-3xl">Featured Projects</h2>
          <Link
            href="/projects"
            className="text-sm font-medium hover:underline flex items-center gap-1"
          >
            See all projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="mx-auto mt-20 max-w-5xl">
        <h2 className="text-2xl font-bold md:text-3xl">Tech Stack</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>
      </section>
    </div>
  )
}
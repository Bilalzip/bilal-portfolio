import Link from "next/link"
import { ExternalLink, Github, FileText } from "lucide-react"
import { TechBadge } from "./tech-badge"

type Project = {
  title: string
  slug: string
  description: string
  stack: string[]
  highlights: string[]
  links: {
    live?: string
    github?: string
    caseStudy: string
  }
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold">{project.title}</h3>
      <p className="mt-2 text-muted-foreground">{project.description}</p>

      {/* Tech Stack */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <TechBadge key={tech} variant="outline">
            {tech}
          </TechBadge>
        ))}
      </div>

      {/* Highlights */}
      <ul className="mt-4 space-y-2">
        {project.highlights.map((highlight, i) => (
          <li key={i} className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground">•</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      {/* Links */}
      <div className="mt-6 flex flex-wrap gap-3">
        {project.links.live && (
          <Link
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </Link>
        )}
        {project.links.github && (
          <Link
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
          >
            <Github className="h-4 w-4" />
            Code
          </Link>
        )}
        <Link
          href={project.links.caseStudy}
          className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
        >
          <FileText className="h-4 w-4" />
          Case Study
        </Link>
      </div>
    </div>
  )
}
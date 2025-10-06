import type { Metadata } from "next"

import { ProjectCard } from "@/components/project-card"
import { projects } from "../lib/constants"

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of my featured projects and case studies.",
}

export default function page() {
  return (
    <div className="container px-4 py-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold md:text-4xl">Projects</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          A collection of my featured projects and case studies showcasing full-stack development,
          AI integrations, and modern web applications.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
      
    </div>
  )
}
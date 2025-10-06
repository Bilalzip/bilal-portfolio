import type { Metadata } from "next"

import { GraduationCap } from "lucide-react"
import { TimelineItem } from "@/components/timeline-items"
import { education, experience } from "../lib/constants"

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience, roles, and education timeline.",
}

export default function Page() {
  return (
    <div className="container px-4 py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold md:text-4xl">Experience</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          My professional journey, roles, and educational background.
        </p>

        {/* Work Experience */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <TimelineItem key={index} experience={exp} />
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-foreground/10 p-3">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{education.degree}</h3>
                <p className="text-muted-foreground">{education.school}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {education.location} • {education.period}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
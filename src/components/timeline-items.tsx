import { Briefcase } from "lucide-react"

type Experience = {
  title: string
  company: string
  location: string
  period: string
  type: string
  highlights: string[]
}

export function TimelineItem({ experience }: { experience: Experience }) {
  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="rounded-lg bg-foreground/10 p-3">
          <Briefcase className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-lg font-semibold">{experience.title}</h3>
            <span className="inline-flex items-center rounded-md bg-foreground/10 px-2.5 py-0.5 text-xs font-medium">
              {experience.type}
            </span>
          </div>
          <p className="text-muted-foreground">{experience.company}</p>
          <p className="text-sm text-muted-foreground mt-1">
            {experience.location} • {experience.period}
          </p>

          <ul className="mt-4 space-y-2">
            {experience.highlights.map((highlight, i) => (
              <li key={i} className="text-sm flex gap-2">
                <span className="text-foreground">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
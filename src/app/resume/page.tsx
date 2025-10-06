import type { Metadata } from "next"
import { Download } from "lucide-react"

export const metadata: Metadata = {
  title: "Resume",
  description: "View and download my resume.",
}

export default function page() {
  return (
    <div className="container px-4 py-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold md:text-4xl">Resume</h1>
            <p className="mt-2 text-muted-foreground">
              
            </p>
          </div>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-background font-medium hover:opacity-90 transition-opacity"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="rounded-2xl border bg-card shadow-sm overflow-hidden">
          <iframe
            src="/resume.pdf"
            className="w-full h-[800px] md:h-[1000px]"
            title="Resume PDF"
          />
        </div>

        <p className="mt-4 text-sm text-center text-muted-foreground">
          Note: If the PDF does not display, you can{" "}
          <a href="/resume.pdf" download className="underline hover:text-foreground">
            download it directly
          </a>
          .
        </p>
      </div>
    </div>
  )
}
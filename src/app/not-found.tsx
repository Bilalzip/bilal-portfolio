
import Link from "next/link"
import { Home, FolderOpen } from "lucide-react"

export default function Page() {
  return (
    <div className="container px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="mt-4 text-2xl font-semibold">Page Not Found</p>
        <p className="mt-3 text-muted-foreground">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-background font-medium hover:opacity-90 transition-opacity"
          >
            <Home className="h-5 w-5" />
            Go Home
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-medium hover:bg-accent transition-colors"
          >
            <FolderOpen className="h-5 w-5" />
            View Projects
          </Link>
        </div>
      </div>
    </div>
  )
}
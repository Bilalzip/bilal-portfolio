// app/blog/page.tsx
import type { Metadata } from "next"
import Link from "next/link"

import { TechBadge } from "@/components/tech-badge"
import { Calendar } from "lucide-react"
import { getAllBlogPosts } from "../lib/blog"


export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on web development, full-stack engineering, and tech.",
}

export default function page() {
  const posts = getAllBlogPosts();

  console.log("object", posts)

  return (
    <div className="container px-4 py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold md:text-4xl">Blog</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Thoughts on web development, full-stack engineering, and tech.
        </p>

        {posts.length === 0 ? (
          <div className="mt-10 rounded-2xl border bg-card p-8 text-center">
            <p className="text-muted-foreground">No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="mt-10 space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h2 className="text-xl font-bold">{post.title}</h2>
                <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <p className="mt-3 text-muted-foreground">{post.summary}</p>
                {post.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <TechBadge key={tag} variant="outline">
                        {tag}
                      </TechBadge>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
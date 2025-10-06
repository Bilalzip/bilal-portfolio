// app/blog/[slug]/page.tsx
import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { TechBadge } from "@/components/tech-badge"
import { Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getAllBlogPosts, getBlogPost } from "@/app/lib/blog"

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.summary,
  }
}

export default function page({ params }: Props) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container px-4 py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to blog
        </Link>

        <h1 className="text-3xl font-bold md:text-4xl">{post.title}</h1>

        <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>

        {post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <TechBadge key={tag} variant="outline">
                {tag}
              </TechBadge>
            ))}
          </div>
        )}

        <div className="mt-8 prose prose-lg dark:prose-invert max-w-none">
          <MDXRemote source={post.content} />
        </div>
      </div>
    </article>
  )
}
// src/lib/blog.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "src", "content", "blog");
// or: const contentDirectory = path.resolve("src/content/blog");

console.log("content", contentDirectory)

export type BlogPost = {
  slug: string
  title: string
  date: string
  summary: string
  tags: string[]
  content: string
}

export function getAllBlogPosts(): BlogPost[] {
  // Create content/blog directory if it doesn't exist
  if (!fs.existsSync(contentDirectory)) {
    fs.mkdirSync(contentDirectory, { recursive: true })
    return []
  }

  console.log("content", contentDirectory)

  const files = fs.readdirSync(contentDirectory)
  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "")
      const filePath = path.join(contentDirectory, file)
      const fileContent = fs.readFileSync(filePath, "utf8")
      const { data, content } = matter(fileContent)

      return {
        slug,
        title: data.title || "",
        date: data.date || "",
        summary: data.summary || "",
        tags: data.tags || [],
        content,
      }
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1))

  return posts
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const filePath = path.join(contentDirectory, `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, "utf8")
    const { data, content } = matter(fileContent)

    return {
      slug,
      title: data.title || "",
      date: data.date || "",
      summary: data.summary || "",
      tags: data.tags || [],
      content,
    }
  } catch (error) {
    return null
  }
}
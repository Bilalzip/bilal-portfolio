import type { Metadata } from "next"
import { Mail, Linkedin, ExternalLink } from "lucide-react"

import { ContactForm } from "@/components/contact-form"
import Link from "next/link"
import { siteConfig } from "../lib/constants"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with me for opportunities, collaborations, or questions.",
}

export default function Page() {
  return (
    <div className="container px-4 py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold md:text-4xl">Get in Touch</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          I am always open to discussing new opportunities, collaborations, or answering any questions you might have.
        </p>

        {/* Contact Methods */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Link
            href={`mailto:${siteConfig.links.email}`}
            className="flex items-center gap-3 rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <Mail className="h-6 w-6" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-sm text-muted-foreground">{siteConfig.links.email}</p>
            </div>
          </Link>

          <Link
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <Linkedin className="h-6 w-6" />
            <div className="flex-1">
              <p className="font-medium">LinkedIn</p>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                Connect with me
                <ExternalLink className="h-3 w-3" />
              </p>
            </div>
          </Link>
        </div>

        {/* Contact Form */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
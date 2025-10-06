// components/contact-form.tsx
"use client"

import { useState } from "react"
import { Send } from "lucide-react"

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      })

      if (response.ok) {
        setStatus("success")
        setFormState({ name: "", email: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch (error) {
      setStatus("error")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          required
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-foreground/20"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          value={formState.email}
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-foreground/20"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-foreground/20"
          placeholder="Your message..."
        />
      </div>

      {/* Honeypot field (hidden) */}
      <input
        type="text"
        name="website"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-background font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
        <Send className="h-4 w-4" />
      </button>

      {status === "success" && (
        <p className="text-sm text-green-600 dark:text-green-400">
          Message sent successfully! I will get back to you soon.
        </p>
      )}

      {status === "error" && (
        <p className="text-sm text-red-600 dark:text-red-400">
          Failed to send message. Please try again or email me directly.
        </p>
      )}
    </form>
  )
}
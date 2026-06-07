'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations"

export function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ name, email, message })
  }

  return (
    <section id="contact" className="border-t border-border bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium tracking-widest text-muted-foreground uppercase">
            Contact
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Get In Touch
          </h2>
        </FadeUp>

        <StaggerContainer className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2">
          <StaggerItem>
            <div className="space-y-8">
              <p className="text-base leading-relaxed text-muted-foreground">
                Have a project in mind or just want to say hi? Fill out the form
                and I&apos;ll get back to you as soon as possible.
              </p>

              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">rafli@example.com</p>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">Indonesia</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <form onSubmit={handleSubmit} className="space-y-5">
              <motion.div whileHover={{ scale: 1.01 }}>
                <Input
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border-border bg-background text-foreground placeholder:text-muted-foreground transition-all focus:border-foreground/30"
                  required
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.01 }}>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-border bg-background text-foreground placeholder:text-muted-foreground transition-all focus:border-foreground/30"
                  required
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.01 }}>
                <Textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-32 border-border bg-background text-foreground placeholder:text-muted-foreground transition-all focus:border-foreground/30"
                  required
                />
              </motion.div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-foreground px-8 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
              >
                <Send size={16} />
                Send Message
              </motion.button>
            </form>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  )
}

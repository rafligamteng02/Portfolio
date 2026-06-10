'use client'

import { motion } from "framer-motion"
import { MessageCircle, Mail, MapPin } from "lucide-react"
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations"

export function Contact() {
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
                Have a project in mind or just want to say hi? Feel free to
                reach out through any of the channels below.
              </p>

              <div className="space-y-4">
                <motion.a
                  href="https://wa.me/6282133277356"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted group-hover:bg-green-500/10 transition-colors">
                    <MessageCircle className="h-5 w-5 text-muted-foreground group-hover:text-green-500 transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">+62 821-3327-7356</p>
                  </div>
                </motion.a>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">raflianwar21@gmail.com</p>
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
                    <p className="text-sm text-muted-foreground">Solo, Indonesia</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <motion.a
              href="https://wa.me/6282133277356"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 text-center transition-all hover:border-green-500/30 hover:shadow-lg group"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-muted group-hover:bg-green-500/10 transition-colors">
                <MessageCircle className="h-8 w-8 text-muted-foreground group-hover:text-green-500 transition-colors" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                Contact Me via WhatsApp
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                Fast response. Just tap and say hi!
              </p>
              <span className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-green-500 px-8 text-sm font-medium text-white transition-colors hover:bg-green-600">
                <MessageCircle size={16} />
                Chat on WhatsApp
              </span>
            </motion.a>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  )
}

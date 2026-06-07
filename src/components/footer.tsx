'use client'

import { motion } from "framer-motion"
import { Globe, ExternalLink, Link } from "lucide-react"

export function Footer() {
  return (
    <motion.footer
      className="border-t border-border bg-background py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Rafli. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {[Globe, ExternalLink, Link].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Social link"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  )
}

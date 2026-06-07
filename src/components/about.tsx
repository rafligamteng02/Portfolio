'use client'

import { motion } from "framer-motion"
import { Code2, Sparkles, Zap } from "lucide-react"
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations"

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    desc: "I write maintainable, scalable code that follows best practices and industry standards.",
  },
  {
    icon: Sparkles,
    title: "Modern Stack",
    desc: "Leveraging cutting-edge technologies like Next.js, TypeScript, and Tailwind CSS.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    desc: "From concept to production — I deliver high-quality results on time.",
  },
]

export function About() {
  return (
    <section id="about" className="relative border-t border-border bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium tracking-widest text-muted-foreground uppercase">
            About Me
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Passionate About Building Great Software
          </h2>
        </FadeUp>

        <FadeUp delay={0.1} className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            I&apos;m a passionate developer with experience in building modern web applications.
            I love turning complex problems into simple, beautiful, and intuitive solutions.
            When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing
            to open source, or writing about what I learn.
          </p>
        </FadeUp>

        <StaggerContainer className="grid gap-8 md:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon
            return (
              <StaggerItem key={item.title}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-border/80"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -5, 0] }}
                    transition={{ duration: 0.4 }}
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-muted"
                  >
                    <Icon className="h-6 w-6 text-muted-foreground" />
                  </motion.div>
                  <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </motion.div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}

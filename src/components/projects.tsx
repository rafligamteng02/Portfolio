'use client'

import { motion } from "framer-motion"
import { ExternalLink, Globe } from "lucide-react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations"

const projects = [
  {
    title: "Project Alpha",
    desc: "A full-stack web application built with Next.js and TypeScript. Features real-time updates and a modern UI.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    image: "/project-alpha.jpg",
    live: "#",
    repo: "#",
  },
  {
    title: "Project Beta",
    desc: "An e-commerce platform with payment integration, user authentication, and an admin dashboard.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/project-beta.jpg",
    live: "#",
    repo: "#",
  },
  {
    title: "Project Gamma",
    desc: "A real-time collaboration tool for teams. Built with WebSockets and a microservices architecture.",
    tags: ["Next.js", "WebSocket", "Docker"],
    image: "/project-gamma.jpg",
    live: "#",
    repo: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="border-t border-border bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium tracking-widest text-muted-foreground uppercase">
            Projects
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Things I&apos;ve Built
          </h2>
        </FadeUp>

        <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
                <Card className="group overflow-hidden border border-border bg-card transition-all hover:border-foreground/20 hover:shadow-lg">
                  <motion.div
                    className="aspect-video w-full bg-muted flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-4xl font-bold text-muted-foreground/40 group-hover:text-muted-foreground/60 transition-colors">
                      {project.title.charAt(0)}
                    </span>
                  </motion.div>
                  <CardHeader className="pb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {project.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {project.desc}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-normal text-muted-foreground transition-all hover:bg-muted/80 hover:scale-105"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="gap-3 border-t border-border pt-4">
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <ExternalLink size={14} />
                      Live
                    </motion.a>
                    <motion.a
                      href={project.repo}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Globe size={14} />
                      Source
                    </motion.a>
                  </CardFooter>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

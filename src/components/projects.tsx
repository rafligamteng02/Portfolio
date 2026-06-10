'use client'

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
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
    title: "PT. Yusano Jaya Pratama",
    desc: "Company profile untuk perusahaan supplier & trading di sektor Oil & Gas, Mining, dan Industrial. Multi-page SPA dengan admin panel CRUD, bilingual (ID/EN), dark mode, serta integrasi Supabase untuk manajemen produk dan pesan.",
    tags: ["React", "Vite", "Supabase", "react-router-dom", "CSS"],
    image: "/image.png",
    live: "https://yjp-nine.vercel.app/",
  },
  {
    title: "NaturaSeven",
    desc: "Landing page & e-commerce untuk PT Tujuh Pilar Mulia — premium herbal supplement Channa Seven. Multi-page dengan product catalog, admin panel CRUD, autentikasi Supabase, news section, contact form, dan floating WhatsApp button.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Supabase", "shadcn/ui", "Framer Motion"],
    image: "/project2.png",
    live: "#",
  },
  {
    title: "PT. Phytomed Neo Farma",
    desc: "Company profile untuk PT. Phytomed Neo Farma — perusahaan maklon herbal di Sukoharjo. Multi-page dengan product catalog, admin CRUD, contact management, carousel testimonials, Google Maps, dan WhatsApp integration.",
    tags: ["Laravel", "PHP", "Blade", "Tailwind CSS", "MySQL", "Vite", "Swiper.js", "AOS"],
    image: "/project3.png",
    live: "#",
  },
]

export function Projects() {
  const [erroredImages, setErroredImages] = useState<Set<string>>(new Set())

  const handleImageError = (image: string) => {
    setErroredImages((prev) => new Set(prev).add(image))
  }

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
                    className="relative aspect-video w-full bg-muted flex items-center justify-center overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {erroredImages.has(project.image) ? (
                      <span className="text-4xl font-bold text-muted-foreground/40 group-hover:text-muted-foreground/60 transition-colors">
                        {project.title.charAt(0)}
                      </span>
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        onError={() => handleImageError(project.image)}
                      />
                    )}
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
                    {project.live !== "#" && (
                      <motion.a
                        href={project.live}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <ExternalLink size={14} />
                        Live
                      </motion.a>
                    )}

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

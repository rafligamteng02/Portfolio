'use client'

import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations"

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "VS Code", "Figma", "Linux"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="border-t border-border bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium tracking-widest text-muted-foreground uppercase">
            Skills & Tools
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Technologies I Work With
          </h2>
        </FadeUp>

        <StaggerContainer className="grid gap-12 md:grid-cols-3">
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <div>
                <h3 className="mb-6 text-center text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {category.skills.map((skill, i) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm font-normal text-muted-foreground transition-all hover:bg-muted hover:scale-105 hover:border-foreground/20"
                      style={{ transitionDelay: `${i * 30}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

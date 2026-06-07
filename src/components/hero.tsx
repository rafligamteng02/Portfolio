'use client'

import { motion, type Variants } from "framer-motion"
import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"
import { ArrowDown } from "lucide-react"

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export function Hero() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden bg-black dark:bg-black">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6">
        <motion.div
          className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={container} className="flex flex-col justify-center space-y-6">
            <motion.p
              variants={item}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-sm font-medium tracking-widest text-neutral-400 uppercase"
            >
              Full-Stack Developer
            </motion.p>
            <motion.h1
              variants={item}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl font-bold leading-tight text-white md:text-6xl"
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Rafli
              </span>
            </motion.h1>
            <motion.p
              variants={item}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-md text-base leading-relaxed text-neutral-300 md:text-lg"
            >
              I build exceptional digital experiences that live at the intersection
              of design and technology.
            </motion.p>
            <motion.div variants={item} transition={{ duration: 0.6, ease: "easeOut" }} className="flex gap-4 pt-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="inline-flex h-11 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-black transition-all hover:bg-neutral-200 hover:scale-105 active:scale-95"
              >
                View Projects
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 px-8 text-sm font-medium text-white transition-all hover:bg-white/10 hover:scale-105 active:scale-95"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={item}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative hidden h-[500px] lg:block"
          >
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-500 transition-colors hover:text-white"
        aria-label="Scroll to about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={24} />
      </motion.button>
    </section>
  )
}

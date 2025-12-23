"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { workExperience } from "@/lib/constants";
import { Icons } from "../icons";

export function About() {
  return (
    <header className="space-y-10 pt-6">
      {/* Top bar with location and socials */}
      <motion.div
        animate={{ opacity: 1 }}
        className="flex items-center justify-between text-muted-foreground text-xs tracking-wide"
        initial={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex items-center gap-1.5">
          <MapPin className="h-3 w-3" />
          <span className="uppercase">Metro Manila, PH</span>
        </div>
        <div className="flex items-center gap-4">
          <Link
            className="transition-colors hover:text-foreground"
            href="https://github.com/noelrohi"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icons.gitHub className="h-4 w-4" />
          </Link>
          <Link
            className="transition-colors hover:text-foreground"
            href="https://x.com/noelrohi"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icons.twitter className="h-4 w-4" />
          </Link>
          <Link
            className="transition-colors hover:text-foreground"
            href="mailto:noelrohi59@gmail.com"
          >
            <Mail className="h-4 w-4" />
          </Link>
        </div>
      </motion.div>

      {/* Main hero content */}
      <div className="relative">
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 sm:absolute sm:top-0 sm:right-0 sm:mb-0"
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Avatar className="h-24 w-24 border border-border sm:h-28 sm:w-28">
            <AvatarImage
              alt="Noel Rohi Garcia"
              src="https://github.com/noelrohi.png"
            />
            <AvatarFallback className="font-serif text-2xl">NR</AvatarFallback>
          </Avatar>
        </motion.div>

        <div className="space-y-5 sm:max-w-[70%]">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="font-mono text-muted-foreground text-xs uppercase tracking-widest">
              Software Engineer
            </span>
          </motion.div>

          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Noel Rohi
            <br />
            <span className="text-muted-foreground">Garcia</span>
          </motion.h1>

          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Building modern web applications, crafting intuitive mobile
            experiences, and exploring AI-assisted development.
          </motion.p>
        </div>
      </div>

      {/* Work experience */}
      <motion.section
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <h2 className="font-mono text-muted-foreground text-xs uppercase tracking-widest">
          Experience
        </h2>
        <div className="space-y-2">
          {workExperience.map((work, index) => (
            <motion.div
              animate={{ opacity: 1 }}
              className="flex items-center justify-between py-2"
              initial={{ opacity: 0 }}
              key={work.company}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
            >
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="font-medium">{work.position}</span>
                <span className="text-muted-foreground">at</span>
                {work.companyUrl ? (
                  <Link
                    className="group inline-flex items-center gap-1 text-primary transition-colors hover:text-primary/80"
                    href={work.companyUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {work.company}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                ) : (
                  <span className="text-muted-foreground">{work.company}</span>
                )}
              </div>
              <span className="shrink-0 text-muted-foreground text-sm">
                {work.status || work.period}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </header>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/constants";

export function Projects() {
  return (
    <motion.section
      className="space-y-6"
      initial={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      whileInView={{ opacity: 1 }}
    >
      <motion.h2
        className="font-mono text-muted-foreground text-xs uppercase tracking-widest"
        initial={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Projects
      </motion.h2>

      <div className="space-y-1">
        {projects.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            key={project.title}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Link
              className="group flex items-center justify-between py-3 transition-colors hover:text-primary"
              href={project.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="space-y-0.5">
                <h3 className="font-serif text-lg">{project.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

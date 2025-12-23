"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      whileInView={{ opacity: 1 }}
    >
      <div className="space-y-6 border-border border-t pt-10">
        <h2 className="font-serif text-2xl">Let's connect</h2>

        <p className="text-muted-foreground">
          Open to collaborations and interesting conversations.
        </p>

        <div className="flex gap-4">
          <Link
            className="group inline-flex items-center gap-1.5 text-primary transition-colors hover:text-primary/80"
            href="mailto:noelrohi59@gmail.com"
          >
            Email
            <ArrowUpRight className="group-hover:-translate-y-0.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <Link
            className="group inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
            href="https://x.com/noelrohi"
            rel="noopener noreferrer"
            target="_blank"
          >
            Twitter
            <ArrowUpRight className="group-hover:-translate-y-0.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 flex items-center justify-between text-muted-foreground text-xs">
        <span>&copy; {new Date().getFullYear()} Noel Rohi Garcia</span>
      </div>
    </motion.section>
  );
}

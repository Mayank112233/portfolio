"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";

const ParticleBackground = () => {
  // A simple representation of nodes and connections for the background
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 bg-background">
      <div className="absolute inset-0 bg-gradient-custom opacity-30" />
      {/* Decorative blurry orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue rounded-full mix-blend-screen filter blur-[128px] opacity-30"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-accent-purple rounded-full mix-blend-screen filter blur-[128px] opacity-20"
      />
      
      {/* Grid pattern overlay for enterprise feel */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
    </div>
  );
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <ParticleBackground />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-8 border border-white/10"
        >
          <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
          <span className="text-sm font-medium text-foreground/80">Available for Opportunities</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl md:text-2xl font-medium text-foreground/80 mb-4"
        >
          Hi, I'm <span className="text-white font-bold">Mayank Madhukar</span>.
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]"
        >
          Engineering the Future of <br className="hidden md:block" />
          <span className="text-gradient">Agentic & Generative AI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-foreground/60 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          AI Engineer passionate about building production-ready applications using LLMs, Agentic AI, Machine Learning, and Data Intelligence to solve real business problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group"
          >
            View Projects
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </a>
          <a
            href="https://drive.google.com/file/d/1pD9X7Hk2G5pglhtvvqmXaQRN7LRyNRU0/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 glass hover:bg-white/10 font-semibold rounded-lg transition-all flex items-center justify-center gap-2"
          >
            <Download size={18} />
            Download Resume
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 border border-border hover:bg-white/5 font-semibold rounded-lg transition-all flex items-center justify-center gap-2"
          >
            <Mail size={18} />
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}

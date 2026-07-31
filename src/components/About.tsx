"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Cpu, Database, Network } from "lucide-react";

export default function About() {
  const expertise = [
    { name: "Large Language Models", icon: <BrainCircuit size={20} /> },
    { name: "Agentic AI", icon: <Network size={20} /> },
    { name: "Machine Learning", icon: <Cpu size={20} /> },
    { name: "Data Intelligence", icon: <Database size={20} /> },
  ];

  const tags = [
    "LangGraph", "LangChain", "RAG", "Computer Vision",
    "Deep Learning", "Model Fine-Tuning", "Prompt Engineering"
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              About Me
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full" />
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              I am a Computer Science undergraduate specializing in Artificial Intelligence, Machine Learning, and Enterprise AI Applications.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Passionate about building scalable enterprise software solutions that combine intelligent automation with real-world business impact.
            </p>
            
            <div className="pt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm font-medium border border-border rounded-full glass text-foreground/90"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {expertise.map((item, index) => (
              <div
                key={item.name}
                className="glass p-6 rounded-xl border border-border hover:border-accent-blue/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg">{item.name}</h3>
              </div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

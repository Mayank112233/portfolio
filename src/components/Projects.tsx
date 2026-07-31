"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Financial LLM Fine-Tuning with QLoRA",
      description: "Fine-tuned Qwen2.5 using LoRA and QLoRA for enterprise financial reasoning. Built a complete supervised fine-tuning pipeline and integrated it with a multi-agent AI investment platform.",
      tech: ["Python", "PyTorch", "Transformers", "PEFT", "LoRA", "QLoRA", "Ollama"],
      featured: true,
      githubLink: "https://github.com/Mayank112233/Financial-LLM-Fine-Tuning-with-QLoRA-",
    },
    {
      title: "AI Investment Research Platform",
      description: "An enterprise multi-agent AI platform built using LangGraph workflows with explainable AI. Includes specialized agents for Financial Analysis, News Intelligence, Risk Assessment, Valuation, and Investment Committee.",
      tech: ["LangGraph", "Python", "OpenAI", "Streamlit", "Tool Calling"],
      featured: true,
      githubLink: "https://github.com/Mayank112233/AI-Investment-Research-Platform",
    },
    {
      title: "Agentic Data Intelligence Platform",
      description: "Autonomous AI system that performs Data Cleaning, EDA, Visualization, Model Selection, Machine Learning, Explainable AI, and extracts Business Insights.",
      tech: ["Agentic AI", "Data Science", "Machine Learning", "Explainable AI"],
      featured: false,
      githubLink: "https://github.com/Mayank112233/Agentic-Data-Intelligence-Platform",
    },
    {
      title: "Multimodal Medical RAG Assistant",
      description: "Advanced Medical PDF Question Answering System utilizing retrieval-augmented generation for accurate medical information retrieval.",
      tech: ["RAG", "FAISS", "LangChain", "OpenAI", "Streamlit"],
      featured: false,
      githubLink: "https://github.com/Mayank112233/Multimodal-Generative-AI-Assistant-RAG-Computer-Vision-",
    },
    {
      title: "Plant Disease Classification",
      description: "Deep Learning application utilizing convolutional neural networks for accurate plant disease detection and agricultural monitoring.",
      tech: ["Deep Learning", "CNN", "EfficientNetB0", "Python"],
      featured: false,
      githubLink: "https://github.com/Mayank112233/Plant-Disease-Classification-System",
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            >
              Featured Projects
            </motion.h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full" />
          </div>
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="https://github.com/Mayank112233"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground/70 hover:text-white transition-colors"
          >
            View all on GitHub <ArrowUpRight size={18} />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass rounded-2xl p-8 border border-border hover:border-accent-blue/50 transition-all group flex flex-col h-full ${
                project.featured ? "lg:col-span-2 relative overflow-hidden" : ""
              }`}
            >
              {project.featured && (
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/10 rounded-full mix-blend-screen filter blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              )}
              
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-blue group-hover:to-accent-purple transition-colors">
                  {project.title}
                </h3>
                <a 
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-foreground/50 hover:text-white transition-colors p-2 glass rounded-full"
                >
                  <FaGithub size={20} />
                </a>
              </div>
              
              <p className="text-foreground/70 text-lg leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-md text-foreground/90"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Wrench } from "lucide-react";

export default function Skills() {
  const categories = [
    {
      title: "AI & Machine Learning",
      icon: <Brain className="text-accent-purple" size={24} />,
      skills: [
        "LangChain", "LangGraph", "RAG", "Agentic AI", "OpenAI API", 
        "Prompt Engineering", "LLMs", "Fine-Tuning", "Machine Learning", 
        "Scikit-Learn", "TensorFlow", "Keras", "XGBoost", "SHAP", "CNN", "Transformers"
      ],
    },
    {
      title: "Programming",
      icon: <Code2 className="text-accent-blue" size={24} />,
      skills: ["Python", "C++", "Java", "SQL"],
    },
    {
      title: "Tools & Infrastructure",
      icon: <Wrench className="text-accent-indigo" size={24} />,
      skills: ["Git", "GitHub", "Docker", "AWS", "VS Code", "Power BI", "Excel", "MySQL", "MongoDB"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } },
  };

  return (
    <section id="skills" className="py-24 relative bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            Technical Arsenal
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass rounded-2xl p-8 border border-border hover:border-accent-blue/40 transition-colors"
            >
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-border">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    className="px-4 py-2 text-sm font-medium bg-white/5 hover:bg-white/10 rounded-lg border border-white/5 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

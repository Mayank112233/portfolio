"use client";

import { motion } from "framer-motion";
import { GitCommit, Star, BookOpen, BrainCircuit } from "lucide-react";

export default function GithubStats() {
  const stats = [
    { label: "Repositories", value: "18", icon: <BookOpen className="text-accent-blue" /> },
    { label: "Stars", value: "80", icon: <Star className="text-yellow-500" /> },
    { label: "AI Projects", value: "10+", icon: <BrainCircuit className="text-accent-indigo" /> },
  ];

  // Placeholder for github contribution graph (just some random opacity squares)
  const renderContributionGraph = () => {
    const weeks = 52;
    const days = 7;
    const squares = [];
    for (let w = 0; w < weeks; w++) {
      for (let d = 0; d < days; d++) {
        // Randomize opacity to simulate contribution
        const intensity = Math.random();
        let bgClass = "bg-white/5";
        if (intensity > 0.8) bgClass = "bg-accent-blue";
        else if (intensity > 0.6) bgClass = "bg-accent-blue/70";
        else if (intensity > 0.4) bgClass = "bg-accent-blue/40";
        else if (intensity > 0.2) bgClass = "bg-accent-blue/20";
        
        squares.push(
          <div 
            key={`${w}-${d}`} 
            className={`w-3 h-3 rounded-sm ${bgClass}`}
            title={`Contributions placeholder`}
          />
        );
      }
    }
    return squares;
  };

  return (
    <section className="py-24 relative bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            Open Source & Contributions
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-6 rounded-2xl border border-border flex flex-col items-center justify-center text-center gap-3 hover:border-accent-blue/40 transition-colors"
            >
              <div className="p-3 bg-white/5 rounded-full">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-sm font-medium text-foreground/60">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-2xl border border-border overflow-x-auto"
        >
          <div className="flex items-center gap-2 mb-6">
            <h3 className="font-semibold text-lg">Contribution Activity</h3>
            <span className="text-sm text-foreground/50">(Simulated representation)</span>
          </div>
          <div className="flex flex-col gap-1 min-w-max">
            <div className="flex gap-1" style={{ width: 'fit-content', display: 'grid', gridTemplateColumns: 'repeat(52, 1fr)', gridTemplateRows: 'repeat(7, 1fr)', gap: '4px' }}>
              {renderContributionGraph()}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

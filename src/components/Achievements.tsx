"use client";

import { motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";

export default function Achievements() {
  const certifications = [
    { name: "Data Science with Generative AI", link: "https://drive.google.com/file/d/1tyNLzgTrjr3ZXq-eBruFrduBN6BcT66Q/view?usp=drive_link" },
    { name: "Data Analyst Skill Path", link: "https://drive.google.com/file/d/1dPRTa4PT1e-xks2Kq342f6a2xMxHsMCw/view?usp=drive_link" },
    { name: "Certificate of Excellence in Public Speaking", link: "https://drive.google.com/file/d/1nj52VelYgaez5oNGEjFt2i8jlx6ua_H5/view?usp=drive_link" }
  ];

  const achievements = [
    "Enterprise AI", "Machine Learning", "Deep Learning", 
    "Agentic AI", "LLMs", "Fine-Tuning", "Computer Vision", 
    "Business Intelligence"
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 glass rounded-xl text-accent-indigo">
                <Award size={24} />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Certificate</h2>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <motion.a
                  key={cert.name}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass p-6 rounded-xl border border-border flex items-center justify-between group hover:border-accent-indigo/40 transition-all cursor-pointer block"
                >
                  <span className="font-semibold text-lg">{cert.name}</span>
                  <Award size={20} className="text-foreground/30 group-hover:text-accent-indigo transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 glass rounded-xl text-yellow-500">
                <Trophy size={24} />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Achievements & Domains</h2>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl border border-border flex flex-wrap gap-3"
            >
              {achievements.map((achievement, idx) => (
                <motion.span
                  key={achievement}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded-lg font-medium transition-colors"
                >
                  {achievement}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

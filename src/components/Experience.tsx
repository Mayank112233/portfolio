"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Experience / Training Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 glass rounded-xl text-accent-blue">
                <Briefcase size={24} />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Training & Experience</h2>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-accent-blue bg-background text-accent-blue shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <div className="w-3 h-3 bg-accent-blue rounded-full"></div>
                </div>
                
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-xl border border-border hover:border-accent-blue/40 transition-colors ml-4 md:ml-0 md:mr-0 md:group-even:ml-[2.5rem] md:group-odd:mr-[2.5rem]">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg">Machine Learning & Data Visualization</h3>
                  </div>
                  <ul className="text-foreground/70 space-y-2 list-disc list-inside mt-4 text-sm">
                    <li>Built predictive ML models.</li>
                    <li>Developed interactive Power BI dashboards.</li>
                    <li>Conducted extensive feature engineering.</li>
                    <li>Performed hyperparameter tuning for optimal model performance.</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 glass rounded-xl text-accent-purple">
                <GraduationCap size={24} />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Education</h2>
            </div>
            
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="glass p-8 rounded-xl border border-border hover:border-accent-purple/40 transition-colors relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-purple/10 rounded-full mix-blend-screen filter blur-[40px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                
                <h3 className="text-2xl font-bold mb-2">Lovely Professional University</h3>
                <h4 className="text-xl text-foreground/90 mb-4">Bachelor of Technology</h4>
                <div className="text-foreground/70 space-y-1">
                  <p>Major: Computer Science & Engineering</p>
                  <p className="font-medium text-white flex items-center gap-2 mt-4">
                    <span className="px-3 py-1 bg-white/10 rounded-md text-sm">CGPA: 7.72</span>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

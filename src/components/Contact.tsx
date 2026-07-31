"use client";

import { motion } from "framer-motion";
import { Mail, Phone, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const contactLinks = [
    { name: "Email", icon: <Mail size={20} />, href: "mailto:madhukarmayank37@gmail.com", value: "madhukarmayank37@gmail.com" },
    { name: "LinkedIn", icon: <FaLinkedin size={20} />, href: "https://www.linkedin.com/in/mayank-madhukar-7a9246297/", value: "mayank-madhukar" },
    { name: "GitHub", icon: <FaGithub size={20} />, href: "https://github.com/Mayank112233", value: "Mayank112233" },
    { name: "Phone", icon: <Phone size={20} />, href: "tel:+919798762028", value: "+91 9798762028" },
  ];

  return (
    <footer id="contact" className="relative pt-24 pb-12 bg-black border-t border-border mt-12">
      <div className="absolute inset-0 bg-gradient-custom opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-20">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Let&apos;s build the <br/>
              <span className="text-gradient">future of AI</span> together.
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              I am currently looking for opportunities as an AI Engineer / Software Engineer. My inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
            <a
              href="https://drive.google.com/file/d/1pD9X7Hk2G5pglhtvvqmXaQRN7LRyNRU0/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 glass hover:bg-white/10 font-semibold rounded-lg transition-all"
            >
              <FileText size={18} />
              Download Full Resume
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full md:w-auto grid grid-cols-1 gap-4"
          >
            {contactLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.name !== "Email" && link.name !== "Phone" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="glass p-4 rounded-xl border border-border hover:border-accent-blue/50 flex items-center gap-4 group transition-all"
              >
                <div className="p-3 bg-white/5 rounded-lg text-foreground/70 group-hover:text-accent-blue group-hover:bg-accent-blue/10 transition-colors">
                  {link.icon}
                </div>
                <div>
                  <div className="text-sm text-foreground/50 font-medium mb-1">{link.name}</div>
                  <div className="font-semibold text-foreground/90 group-hover:text-white transition-colors">{link.value}</div>
                </div>
              </a>
            ))}
          </motion.div>
          
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/50 text-sm">
            © {new Date().getFullYear()} Mayank Madhukar. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-foreground/50">
            <a href="#" className="hover:text-white transition-colors">Built with Next.js & Framer Motion</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

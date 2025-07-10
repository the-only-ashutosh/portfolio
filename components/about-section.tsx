"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  GitBranch,
  Palette,
  Zap
} from 'lucide-react';

export function AboutSection() {
  const techStack = [
    { name: 'JavaScript', icon: Code, color: 'bg-yellow-500' },
    { name: 'TypeScript', icon: Code, color: 'bg-blue-500' },
    { name: 'React', icon: Globe, color: 'bg-cyan-500' },
    { name: 'Next.js', icon: Globe, color: 'bg-gray-800' },
    { name: 'Node.js', icon: Database, color: 'bg-green-500' },
    { name: 'PostgreSQL', icon: Database, color: 'bg-blue-600' },
    { name: 'AWS', icon: Cloud, color: 'bg-orange-500' },
    { name: 'Docker', icon: Cloud, color: 'bg-blue-400' },
    { name: 'Git', icon: GitBranch, color: 'bg-red-500' },
    { name: 'Figma', icon: Palette, color: 'bg-purple-500' },
    { name: 'Tailwind', icon: Palette, color: 'bg-teal-500' },
    { name: 'Python', icon: Zap, color: 'bg-green-600' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground">
              Passionate about creating exceptional digital experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8 bg-background/50 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">AJ</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center">Full Stack Developer</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    With over 5 years of experience in web development, I specialize in creating 
                    scalable, performant applications using modern technologies. I'm passionate 
                    about clean code, user experience, and continuous learning.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    When I'm not coding, you'll find me exploring new technologies, contributing 
                    to open source projects, or sharing knowledge through technical writing.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center">Tech Stack</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="group"
                  >
                    <Card className="p-4 text-center hover:shadow-lg transition-all duration-300 bg-background/50 backdrop-blur-sm">
                      <CardContent className="p-0">
                        <div className={`w-12 h-12 ${tech.color} rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <tech.icon className="w-6 h-6 text-white" />
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {tech.name}
                        </Badge>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
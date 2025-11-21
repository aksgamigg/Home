import React from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram, BookOpen, ExternalLink, Code, Globe, Database, Cpu } from 'lucide-react';
import { PROJECTS, TIMELINE } from './constants';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Starfield from './components/Starfield';
import Terminal from './components/Terminal';
import AIChat from './components/AIChat';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

// Stats Data for Chart
const STATS_DATA = [
  { name: 'Python', value: 90, color: '#4ecdc4' },
  { name: 'React/JS', value: 80, color: '#667eea' },
  { name: 'Neural Nets', value: 65, color: '#764ba2' },
  { name: 'Economics', value: 75, color: '#ff00ff' },
];

function App() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="bg-bg-dark min-h-screen text-gray-300 font-sans selection:bg-accent/30 selection:text-white">
      <CustomCursor />
      <Navbar />
      <AIChat />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Starfield />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono mb-8 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              System Online: New Delhi
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-display text-6xl md:text-8xl font-bold text-white leading-tight mb-6"
            >
              Engineering <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-primary">The Future</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed"
            >
              I am a 10th-grade developer building privacy-first software and studying AI neural networks. 
              <span className="text-accent"> Targeting MIT.</span>
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#projects" className="interactive px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-500/20">
                View Mission
              </a>
              <a href="https://github.com/aksgamigg" target="_blank" rel="noreferrer" className="interactive px-8 py-3 bg-transparent border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 hover:border-primary transition-all flex items-center gap-2">
                <Github size={20} />
                GitHub
              </a>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
        >
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* About & Stats Section */}
      <section id="about" className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="font-mono text-primary text-sm tracking-wider">01. // WHO AM I</span>
              <h2 className="font-display text-4xl md:text-5xl text-white font-bold mt-4 mb-8">The Code & The Policy</h2>
              <div className="space-y-6 text-gray-400 text-lg">
                <p>
                  I don't just write loops; I solve problems. As a 10th grader in Delhi, I exist at the intersection of 
                  <span className="text-white font-semibold border-b-2 border-accent/50 mx-1">computer engineering</span> 
                  and global economics.
                </p>
                <p>
                  While others play games, I build them—and the tools to make them. I analyze UN tariffs in the morning and debug Python scripts at night.
                  My mission is simple: gain mastery over the machine, contribute to open-source, and earn my place at MIT.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="glass-panel p-8 rounded-2xl"
            >
               <h3 className="font-mono text-white mb-6 flex items-center gap-2">
                 <Database size={18} className="text-accent"/> SYSTEM_STATS
               </h3>
               <div className="h-[250px] w-full">
                 <ResponsiveContainer width="100%" height="100%">
                   <BarChart data={STATS_DATA} layout="vertical">
                     <XAxis type="number" hide />
                     <YAxis dataKey="name" type="category" width={100} tick={{fill: '#888', fontSize: 12, fontFamily: 'JetBrains Mono'}} axisLine={false} tickLine={false} />
                     <Tooltip 
                        contentStyle={{ backgroundColor: '#0f0f0f', borderColor: '#333' }}
                        itemStyle={{ color: '#fff' }}
                        cursor={{fill: 'transparent'}}
                     />
                     <Bar dataKey="value" barSize={20} radius={[0, 4, 4, 0]}>
                        {STATS_DATA.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                     </Bar>
                   </BarChart>
                 </ResponsiveContainer>
               </div>
               
               <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-3xl font-display font-bold text-white">10th</div>
                    <div className="text-xs font-mono text-gray-500">GRADE</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-display font-bold text-accent">MIT</div>
                    <div className="text-xs font-mono text-gray-500">TARGET</div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-32 bg-bg-panel relative">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16"
          >
            <span className="font-mono text-primary text-sm tracking-wider">02. // TIMELINE</span>
            <h2 className="font-display text-4xl md:text-5xl text-white font-bold mt-4">System Logs</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto border-l-2 border-primary/30 pl-8 space-y-12">
            {TIMELINE.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-bg-dark border-2 border-primary shadow-[0_0_15px_rgba(102,126,234,0.5)]" />
                <span className="font-mono text-accent text-sm mb-1 block">{item.date}</span>
                <h3 className="text-2xl font-display font-bold text-white mb-2">{item.title}</h3>
                <div className="inline-block px-3 py-1 bg-white/5 rounded text-sm font-mono text-gray-300 mb-4">{item.role}</div>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16"
          >
            <span className="font-mono text-primary text-sm tracking-wider">03. // PORTFOLIO</span>
            <h2 className="font-display text-4xl md:text-5xl text-white font-bold mt-4">Deployed Systems</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group interactive glass-panel rounded-xl overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 border-transparent hover:border-primary"
              >
                <div className="h-48 bg-black/50 flex items-center justify-center group-hover:bg-black/30 transition-colors relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                   {project.icon === 'code' ? <Code size={48} className="text-gray-600 group-hover:text-primary group-hover:scale-110 transition-all duration-300" /> : <Globe size={48} className="text-gray-600 group-hover:text-accent group-hover:scale-110 transition-all duration-300" />}
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-display font-bold text-white">{project.title}</h3>
                    <div className="flex gap-4">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                          <Github size={20} />
                        </a>
                      )}
                      <a href={project.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-6 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-white/5 text-xs font-mono text-primary rounded border border-white/5">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Terminal Section */}
      <section id="terminal" className="py-32 bg-bg-panel border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <span className="font-mono text-primary text-sm tracking-wider">04. // CLI INTERFACE</span>
            <h2 className="font-display text-3xl md:text-4xl text-white font-bold mt-4">Access Mainframe</h2>
            <p className="text-gray-500 mt-2">Execute commands to interact with the system.</p>
          </div>
          <Terminal />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-2xl mx-auto glass-panel p-12 rounded-3xl border-white/10"
          >
            <h2 className="font-display text-4xl text-white font-bold mb-6">Initialize Connection</h2>
            <p className="text-gray-400 mb-10 text-lg">
              Whether you want to discuss Python architecture, MUN strategy, or just say hello. My neural link is always open.
            </p>
            <a 
              href="mailto:akshajgoel@bnpsramvihar.edu.in" 
              className="interactive inline-block px-10 py-4 bg-primary text-white font-bold rounded-xl hover:bg-indigo-600 hover:scale-105 transition-all shadow-xl shadow-indigo-500/30"
            >
              Transmit Message
            </a>

            <div className="flex justify-center gap-8 mt-12">
              <a href="https://github.com/aksgamigg" target="_blank" rel="noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:text-primary transition-all">
                <Github size={24} />
              </a>
              <a href="https://codenchords.wordpress.com" target="_blank" rel="noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:text-primary transition-all">
                <BookOpen size={24} />
              </a>
              <a href="https://instagram.com/aksgamig" target="_blank" rel="noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:text-pink-500 transition-all">
                <Instagram size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 text-center text-gray-600 font-mono text-sm">
        <div className="container mx-auto">
          <p>&copy; 2025 Akshaj Goel. Code is Poetry.</p>
          <p className="text-xs mt-2 opacity-50">System upgrade complete. Powered by React & Gemini AI.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
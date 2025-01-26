import { motion } from 'framer-motion';
import { Calendar, Target, Rocket } from 'lucide-react';

const timelineData = [
  {
    year: '2024',
    title: 'Project Launch',
    description: 'Initial deployment of smart agriculture systems and IoT infrastructure',
    icon: Calendar,
  },
  {
    year: '2025',
    title: 'Network Expansion',
    description: 'Scaling distribution network and implementing advanced analytics',
    icon: Target,
  },
  {
    year: '2026',
    title: 'Global Integration',
    description: 'Full-scale deployment and international market expansion',
    icon: Rocket,
  },
];

export default function Timeline() {
  return (
    <section className="py-20 bg-dark-primary relative">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-cinzel font-bold text-center mb-16 text-gradient"
        >
          Project Roadmap
        </motion.h2>

        <div className="timeline-container">
          <div className="timeline-line" />
          
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="timeline-item mb-16"
            >
              <div className={`timeline-content ${index % 2 === 0 ? 'text-right pr-16' : 'text-left pl-16'}`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass p-6 rounded-lg hover-glow inline-block"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <item.icon className="w-8 h-8 text-golden-primary" />
                    <h3 className="text-2xl font-cinzel font-bold text-golden-primary">
                      {item.year}
                    </h3>
                  </div>
                  <h4 className="text-xl font-cinzel mb-2 text-golden-accent">
                    {item.title}
                  </h4>
                  <p className="text-gray-400">
                    {item.description}
                  </p>
                </motion.div>
              </div>
              <div className="timeline-dot">
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  className="w-full h-full bg-golden-primary rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
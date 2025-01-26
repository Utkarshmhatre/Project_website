import { motion } from 'framer-motion';
import { TrendingUp, Package, Truck, Sun } from 'lucide-react';

const stats = [
  { 
    icon: TrendingUp,
    value: '40%', 
    label: 'Increased Crop Yields',
    description: 'Through AI-powered optimization and smart farming techniques'
  },
  { 
    icon: Package,
    value: '60%', 
    label: 'Reduced Food Waste',
    description: 'Using predictive analytics and smart storage solutions'
  },
  { 
    icon: Truck,
    value: '85%', 
    label: 'Distribution Efficiency',
    description: 'With route optimization and real-time tracking'
  },
  { 
    icon: Sun,
    value: '90%', 
    label: 'Renewable Energy Usage',
    description: 'In storage and transportation facilities'
  }
];

export default function Stats() {
  return (
    <section className="py-20 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1920')] opacity-5" />
      
      <div className="container mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-gradient"
        >
          Impact Metrics
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 rounded-lg bg-dark-lighter/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300" />
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="w-12 h-12 mb-4 text-primary"
                >
                  <stat.icon className="w-full h-full" />
                </motion.div>
                
                <motion.span
                  className="block text-4xl font-bold text-primary mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                >
                  {stat.value}
                </motion.span>
                
                <span className="block text-lg font-semibold text-white mb-2">
                  {stat.label}
                </span>
                
                <p className="text-sm text-gray-400">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
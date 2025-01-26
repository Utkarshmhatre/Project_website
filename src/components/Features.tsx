import { motion } from 'framer-motion';
import { Brain, Leaf, Truck, Users, Database, Cpu, Cloud, Zap } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Smart Agriculture',
    description: 'IoT sensors and ML algorithms optimize crop production through real-time monitoring and automation.',
    details: [
      'Soil Health Monitoring with IoT Sensors',
      'ML-powered Weather Prediction',
      'Automated Irrigation Systems',
      'Drone-based Crop Analysis'
    ]
  },
  {
    icon: Truck,
    title: 'Intelligent Distribution',
    description: 'Route optimization and real-time tracking ensure efficient food transportation and storage.',
    details: [
      'Real-time Fleet Tracking',
      'Temperature-controlled Storage',
      'Predictive Maintenance',
      'Load Optimization'
    ]
  },
  {
    icon: Database,
    title: 'Data Analytics',
    description: 'Advanced analytics provide insights for optimizing the entire food supply chain.',
    details: [
      'Demand Forecasting',
      'Supply Chain Analytics',
      'Quality Control Metrics',
      'Resource Utilization'
    ]
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions ensure reliable data processing and system availability.',
    details: [
      'Real-time Data Processing',
      'Secure Data Storage',
      'API Integration',
      'Automated Backups'
    ]
  },
  {
    icon: Cpu,
    title: 'IoT Integration',
    description: 'Connected devices and sensors form a comprehensive monitoring network.',
    details: [
      'Sensor Networks',
      'Edge Computing',
      'Device Management',
      'Real-time Alerts'
    ]
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Renewable energy and sustainable practices minimize environmental impact.',
    details: [
      'Solar-powered Storage',
      'Energy Optimization',
      'Waste Reduction',
      'Carbon Footprint Tracking'
    ]
  }
];

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-dark-lighter">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-gradient"
        >
          Technology Stack
        </motion.h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-6 rounded-lg bg-dark hover:bg-dark-darker transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-dark/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-12 h-12 text-primary mb-4"
                >
                  <feature.icon className="w-full h-full" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center text-sm text-gray-400"
                    >
                      <Zap className="w-4 h-4 text-primary mr-2" />
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
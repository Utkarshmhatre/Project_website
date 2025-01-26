import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Mail, href: '#' },
  ];

  return (
    <footer className="footer py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-cinzel font-bold text-golden-primary mb-4">
              RCOP Group
            </h3>
            <p className="text-gray-400">
              Fostering innovation and cultural exchange through technology.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-cinzel font-bold text-golden-primary mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>info@rcopgroup.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-cinzel font-bold text-golden-primary mb-4">
              Follow Us
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2 }}
                  className="text-golden-primary hover:text-golden-accent transition-colors"
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-golden-primary/20 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} RCOP Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
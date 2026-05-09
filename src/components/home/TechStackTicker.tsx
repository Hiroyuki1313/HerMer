import { motion } from 'framer-motion';
import { TECH_STACK } from '../../constants/services';

const TechStackTicker = () => {
  return (
    <div className="w-full py-12 border-y border-white/5 bg-white/[0.01] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500 text-center">
          Integración fluida con tu ecosistema tecnológico
        </p>
      </div>
      
      <div className="flex overflow-hidden group">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-20 items-center pr-20"
        >
          {[...TECH_STACK, ...TECH_STACK].map((tech, idx) => (
            <span 
              key={idx} 
              className="text-2xl md:text-3xl font-display font-bold text-neutral-700 hover:text-brand-light transition-colors duration-500 cursor-default"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechStackTicker;

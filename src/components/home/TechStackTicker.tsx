import { motion } from 'framer-motion';
import { TECH_STACK } from '../../constants/services';

const TechStackTicker = () => {
  return (
    <div id="servicios" className="scroll-mt-24 w-full py-12 border-y border-neutral-100 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-neutral-400 text-center font-bold">
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
              className="text-2xl md:text-3xl font-display font-black text-neutral-900 hover:text-brand-light transition-colors duration-500 cursor-default uppercase tracking-tighter"
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

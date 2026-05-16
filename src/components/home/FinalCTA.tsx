import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { springHover } from '../../animations/variants';
import Section from '../common/Section';
import Container from '../common/Container';

const FinalCTA = () => {
  return (
    <Section className="py-40">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-dark/20 blur-[120px] rounded-full pointer-events-none" />

      <Container className="text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black font-display tracking-tighter text-white mb-8"
        >
          Lleva tu administración a la nube y automatiza lo repetitivo.
        </motion.h2>

        <Link to="/contacto" className="inline-block">
          <motion.div
            variants={springHover}
            whileHover="hover"
            whileTap="tap"
            className="inline-flex items-center justify-center gap-3 px-12 py-5 rounded-full bg-white text-black font-bold text-lg hover:bg-neutral-200 transition-all shadow-[0_20px_50px_rgba(255,255,255,0.1)] cursor-pointer"
          >
            Contactanos <Mail className="w-5 h-5" />
          </motion.div>
        </Link>
      </Container>
    </Section>
  );
};

export default FinalCTA;

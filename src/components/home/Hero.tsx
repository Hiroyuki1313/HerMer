import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { staggerContainer, fadeUpSpring, springHover } from '../../animations/variants';
import { getWhatsAppLink } from '../../constants/links';
import HeroGlobe from './HeroGlobe';
import Section from '../common/Section';
import Container from '../common/Container';

const Hero = () => {
  return (
    <Section className="pt-32 pb-20 min-h-screen flex items-center">
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-dark opacity-10 blur-[120px] rounded-full pointer-events-none" />
      <HeroGlobe />

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-3xl flex flex-col items-start"
        >
          <motion.div variants={fadeUpSpring} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm mb-8">
            <span className="text-sm font-medium text-neutral-300">✨ Transformación Digital Empresarial</span>
          </motion.div>

          <motion.h1 variants={fadeUpSpring} className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-none font-display mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500">
            Escala tu operación con precisión milimétrica.
          </motion.h1>

          <motion.p variants={fadeUpSpring} className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed">
            Digitalización, automatización (RPA), y optimización de procesos contables, financieros y de RRHH para empresas que exigen la excelencia.
          </motion.p>

          <motion.div variants={fadeUpSpring} className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-12">
            {['Innovación', 'Calidad', 'Honestidad', 'Eficiencia'].map((valor, i, arr) => (
              <div key={valor} className="flex items-center gap-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-light/80">{valor}</span>
                {i < arr.length - 1 && <span className="text-neutral-700 font-bold">•</span>}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Hero;

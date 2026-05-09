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

          <motion.div variants={fadeUpSpring} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <motion.a
              href={getWhatsAppLink("Hola Héctor, vengo de la Landing Page y me gustaría iniciar el proceso de Transformación Digital en mi empresa.")}
              target="_blank"
              rel="noopener noreferrer"
              variants={springHover}
              whileHover="hover"
              whileTap="tap"
              className="flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto rounded-full bg-brand-dark text-white font-medium shadow-[0_0_30px_rgba(12,171,227,0.3)] hover:shadow-[0_0_40px_rgba(12,171,227,0.5)] transition-shadow duration-300 cursor-pointer"
            >
              Iniciar Transformación <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="#servicios"
              variants={springHover}
              whileHover="hover"
              whileTap="tap"
              className="px-8 py-4 rounded-full border border-white/10 bg-transparent text-white font-medium hover:bg-white/[0.03] transition-colors w-full sm:w-auto text-center cursor-pointer"
            >
              Explorar Servicios
            </motion.a>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Hero;

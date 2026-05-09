import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { SERVICES } from '../../constants/services';
import { staggerContainer } from '../../animations/variants';
import FeatureCard from './FeatureCard';
import Section from '../common/Section';
import Container from '../common/Container';

const ServicesBento = () => {
  return (
    <Section id="servicios" withGrid withGlow>
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="mb-24 md:text-center relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-light/20 bg-brand-light/5 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-light mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-light opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-light"></span>
            </span>
            Servicios Especializados
          </div>
          <h2 className="text-4xl md:text-6xl font-black font-display tracking-tighter text-white mb-6 leading-tight">
            Automatización a la medida <br className="hidden md:block" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-white">de tu realidad</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-xl leading-relaxed">
            Arquitectura modular para modernizar cada área crítica de tu negocio con tecnología de vanguardia.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:auto-rows-[400px] relative z-10"
        >
          {/* Mapping services with specific layout rules */}
          {SERVICES.map((service, index) => {
            const isFirst = index === 0;
            const isSecond = index === 1;
            
            return (
              <div 
                key={service.id} 
                className={clsx(
                  isFirst ? "md:col-span-2 md:row-span-1" : 
                  isSecond ? "md:col-span-1 md:row-span-2" : 
                  "md:col-span-1 md:row-span-1"
                )}
              >
                <FeatureCard
                  id={service.id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              </div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
};

export default ServicesBento;

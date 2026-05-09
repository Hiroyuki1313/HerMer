import { motion } from 'framer-motion';
import { GLOBAL_METRICS } from '../../constants/services';
import Container from '../common/Container';
import Section from '../common/Section';

const MetricsROI = () => {
  return (
    <Section className="border-t border-white/5">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {GLOBAL_METRICS.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 200 }}
            >
              <h2 className="text-7xl md:text-8xl font-black font-display tracking-tighter mb-4 bg-gradient-to-b from-brand-light to-white text-transparent bg-clip-text">
                {metric.value}
              </h2>
              <p className="text-neutral-400 font-medium max-w-[200px] mx-auto text-sm uppercase tracking-widest leading-relaxed">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default MetricsROI;

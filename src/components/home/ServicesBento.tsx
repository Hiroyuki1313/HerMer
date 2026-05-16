import { motion } from 'framer-motion';
import Section from '../common/Section';
import Container from '../common/Container';

const ServicesBento = () => {
  return (
    <>
      <Section withGrid withGlow className="pb-0">
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="mb-24 relative z-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-light/20 bg-brand-light/5 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-light mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-light opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-light"></span>
                  </span>
                  Sobre Nosotros
                </div>
                <h2 className="text-4xl md:text-6xl font-black font-display tracking-tighter text-white mb-6 leading-tight">
                  Transformamos procesos <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-white">en soluciones eficientes</span>
                </h2>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-8">
                <div className="group">
                  <h3 className="text-brand-light font-bold uppercase tracking-tighter text-2xl mb-3 flex items-center gap-3">
                    <div className="w-8 h-px bg-brand-light/30" /> Misión
                  </h3>
                  <p className="text-neutral-300 text-lg leading-relaxed font-medium">
                    Impulsar la eficiencia empresarial mediante soluciones tecnológicas que digitalicen, automaticen y optimicen los procesos administrativos de cada organización.
                  </p>
                </div>

                <div className="group">
                  <h3 className="text-brand-light font-bold uppercase tracking-tighter text-2xl mb-3 flex items-center gap-3">
                    <div className="w-8 h-px bg-brand-light/30" /> Visión
                  </h3>
                  <p className="text-neutral-400 text-lg leading-relaxed">
                    Ser una empresa tecnológica innovadora e internacional, reconocida por transformar procesos administrativos en soluciones eficientes, escalables y de alto impacto.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      <div className="bg-white py-32 border-y border-neutral-100 relative overflow-hidden">
        {/* Subtle grid pattern for white background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
        
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 relative z-10"
          >
            <div className="space-y-6">
              <h3 className="text-brand-light font-bold uppercase tracking-tighter text-2xl flex items-center gap-3">
                <div className="w-8 h-px bg-brand-light/30" /> Qué hacemos
              </h3>
              <p className="text-neutral-600 text-lg leading-relaxed font-medium">
                En Business Solutions desarrollamos e implementamos soluciones tecnológicas para optimizar áreas como finanzas, contabilidad, recursos humanos, gestión documental, infraestructura de red y software. Ayudamos a las empresas a digitalizar y automatizar tareas clave para mejorar su operación diaria.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-brand-light font-bold uppercase tracking-tighter text-2xl flex items-center gap-3">
                <div className="w-8 h-px bg-brand-light/30" /> Cómo lo hacemos
              </h3>
              <p className="text-neutral-600 text-lg leading-relaxed font-medium">
                Trabajamos mediante un acompañamiento técnico integral, entendiendo las necesidades del negocio para convertirlas en soluciones tecnológicas personalizadas. Nuestro enfoque combina digitalización, automatización y gestión inteligente de la información para adaptarnos a la realidad de cada organización.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-brand-light font-bold uppercase tracking-tighter text-2xl flex items-center gap-3">
                <div className="w-8 h-px bg-brand-light/30" /> Qué beneficios generamos
              </h3>
              <p className="text-neutral-600 text-lg leading-relaxed font-medium">
                Nuestras soluciones permiten reducir errores humanos, mejorar el manejo de datos y documentos, estandarizar procesos y lograr una administración más eficiente, organizada y accesible desde la nube. Con ello, ayudamos a que las empresas sean más productivas, eficaces y sostenibles en su crecimiento.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-brand-light font-bold uppercase tracking-tighter text-2xl flex items-center gap-3">
                <div className="w-8 h-px bg-brand-light/30" /> Valores corporativos
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Innovación', 'Calidad', 'Honestidad', 'Eficiencia', 'Servicio al cliente'].map((valor) => (
                  <div key={valor} className="flex items-center gap-3 group/item">
                    <div className="w-2 h-2 rounded-full bg-brand-light group-hover/item:scale-150 transition-transform" />
                    <span className="text-neutral-800 font-bold tracking-tight text-lg">{valor}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </Container>
      </div>
    </>
  );
};

export default ServicesBento;

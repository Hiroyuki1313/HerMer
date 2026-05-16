import { useParams, Navigate } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants/services';
import { staggerContainer, fadeUpSpring } from '../animations/variants';
import Section from '../components/common/Section';
import Container from '../components/common/Container';
import BeforeAfterSlider from '../components/common/BeforeAfterSlider';

const ServicePage = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-8" style={{ zoom: "105%" }}>
      {/* Header Section (Dark) */}
      <Section className="pb-10" withGrid>
        <Container>
          <div className="flex flex-col items-center text-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="relative z-10 max-w-4xl"
            >
              <motion.h1 variants={fadeUpSpring} className="text-4xl md:text-5xl lg:text-6xl font-black font-display tracking-tighter text-brand-light mb-4 leading-tight uppercase">
                {id === 'infraestructura-red' ? "Infraestructura de Red para Operaciones Tecnológicas" : service.title}
              </motion.h1>

              {service.slogan && (
                <motion.p variants={fadeUpSpring} className="text-brand-light/60 font-bold tracking-[0.2em] uppercase text-xs mb-6">
                  {service.slogan}
                </motion.p>
              )}

              <motion.p variants={fadeUpSpring} className="text-lg text-neutral-400 leading-relaxed mx-auto max-w-3xl">
                {service.fullDescription}
              </motion.p>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* 01. ¿QUÉ HACEMOS? (Categories & Stack) */}
      {service.categories && id !== 'analisis-procesos' && (
        <section className="relative py-16 bg-neutral-50 border-b border-neutral-200/50 overflow-hidden">
          {/* Background Accent */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-light/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

          <Container className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left Side: Categories */}
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <span className="text-xs font-black text-brand-light tracking-widest uppercase">¿QUÉ HACEMOS?</span>
                  <h2 className="text-3xl font-black text-neutral-900 mt-2 uppercase tracking-tighter">Servicios Tecnológicos</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {service.categories.map((cat, idx) => {
                    const Icon = cat.icon || FileText;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="h-full px-5 py-6 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-brand-light/30 transition-colors group"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-9 h-9 rounded-lg bg-white border border-neutral-200 flex items-center justify-center group-hover:bg-brand-light/5 transition-colors shrink-0">
                            <Icon className="w-4 h-4 text-brand-light" />
                          </div>
                          <h3 className="text-xs font-black text-neutral-900 uppercase tracking-tight leading-tight">{cat.title}</h3>
                        </div>
                        <p className="text-xs text-neutral-500 leading-relaxed">{cat.description}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Right Side: Stack Moderno */}
              {service.technologies && (
                <div className="lg:col-span-1">
                  <div className="mb-8">
                    <span className="text-xs font-black text-brand-light tracking-widest uppercase">TECNOLOGÍAS</span>
                    <h2 className="text-3xl font-black text-neutral-900 mt-2 uppercase tracking-tighter">Stack Moderno</h2>
                  </div>
                  <div className="grid grid-cols-1 gap-y-0.5">
                    {service.technologies.map((tech, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center gap-3 py-2 px-3 -mx-3 rounded-2xl hover:bg-neutral-50/80 border border-transparent hover:border-neutral-100 transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200/60 shadow-sm flex items-center justify-center p-2 group-hover:bg-brand-light/5 transition-colors shrink-0">
                          {tech.logo ? (
                            <img
                              src={tech.logo}
                              alt={tech.name}
                              className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-110 duration-300"
                            />
                          ) : (
                            <div className="w-2 h-2 rounded-full bg-neutral-300" />
                          )}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[11px] font-black text-neutral-900 uppercase tracking-tight leading-none mb-0.5">
                            {tech.name}
                          </span>
                          <span className="text-[9px] text-neutral-500 font-medium leading-tight">
                            {tech.description}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-6 flex items-center justify-center">
              <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest leading-relaxed text-center">
                Ecosistema operativo escalable y orientado a resultados.
              </p>
            </div>
          </Container>
        </section>
      )}



      {/* 03. BENEFICIOS (Features) */}
      {service.features && id !== 'analisis-procesos' && (
        <section className="relative py-16 bg-neutral-50 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

          <Container className="relative z-10">
            {/* Features (Full width) */}
            <div className="mb-20">
                <div className="mb-8">
                  <span className="text-xs font-black text-brand-light tracking-widest uppercase">BENEFICIOS</span>
                  <h2 className="text-3xl font-black text-neutral-900 mt-2 uppercase tracking-tighter">Valor Tangible</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-sm"
                    >
                      <h3 className="text-xs font-black text-neutral-900 mb-2 uppercase tracking-tight">{feature.title}</h3>
                      <p className="text-xs text-neutral-500 leading-relaxed">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
            </div>

            {/* Projects (Bottom full width) */}
            {service.projects && (
              <div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-6"
                  >
                    <span className="text-xs font-black text-brand-light tracking-widest uppercase">PROYECTOS</span>
                    <h2 className="text-3xl font-black text-neutral-900 mt-2 uppercase tracking-tighter">Casos Reales</h2>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {service.projects.map((project, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-6 rounded-2xl bg-neutral-100/50 border border-neutral-200 shadow-sm"
                      >
                        {project.mockup && (
                          <div className="mb-5 rounded-xl border border-neutral-200/60 bg-white shadow-sm overflow-hidden group/mockup">
                            <div className="h-5 bg-neutral-100/80 border-b border-neutral-200/60 flex items-center px-2.5 gap-1.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                              <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                            </div>
                            <div 
                              className="w-full aspect-video bg-cover bg-top transition-all duration-[5000ms] ease-in-out group-hover/mockup:bg-bottom cursor-ns-resize"
                              style={{ backgroundImage: `url(${project.mockup})` }}
                            />
                          </div>
                        )}
                        <h3 className="text-sm font-black text-neutral-900 mb-2 flex items-center gap-2 uppercase tracking-tight">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-light" />
                          {project.title}
                        </h3>
                        <p className="text-xs text-neutral-500 mb-4 leading-relaxed font-medium">
                          {project.description}
                        </p>
                        {project.metrics && (
                          <div className="space-y-1">
                            {project.metrics.map((m, i) => (
                              <div key={i} className="flex items-center gap-2 text-[10px] text-neutral-500 font-bold uppercase">
                                <span className="text-brand-light">✓</span> {m}
                              </div>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
              </div>
            )}

            {/* Before / After */}
            {service.beforeAfters && (
              <div className="mt-20">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="mb-10 text-center flex flex-col items-center"
                >
                  <span className="text-xs font-black text-brand-light tracking-widest uppercase">TRANSFORMACIÓN</span>
                  <h2 className="text-3xl font-black text-neutral-900 mt-2 uppercase tracking-tighter">Antes y Después</h2>
                  <p className="text-sm text-neutral-500 mt-3 max-w-2xl leading-relaxed">
                    Desliza para ver la evolución gráfica y funcional de las interfaces que hemos modernizado.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {service.beforeAfters.map((ba, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="p-6 rounded-3xl bg-neutral-100/50 border border-neutral-200 shadow-sm"
                    >
                      <BeforeAfterSlider 
                        beforeImage={ba.beforeImage} 
                        afterImage={ba.afterImage} 
                      />
                      <h3 className="text-sm font-black text-neutral-900 mt-5 flex items-center justify-center gap-2 uppercase tracking-tight">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-light" />
                        {ba.title}
                      </h3>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </Container>
        </section>
      )}

      {/* Analysis & Software Combined Layout */}
      {id === 'analisis-procesos' && (
        <section className="relative pt-16 pb-8 md:pt-24 md:pb-12 bg-white border-b border-neutral-100 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

          <Container className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column: Servicios Tecnológicos */}
              <div>
                <div className="mb-8">
                  <span className="text-xs font-black text-brand-light tracking-widest uppercase">¿QUÉ HACEMOS?</span>
                  <h2 className="text-3xl font-black text-neutral-900 mt-2 uppercase tracking-tighter">Servicios Tecnológicos</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.categories?.map((cat, idx) => {
                    const Icon = cat.icon || FileText;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-5 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-brand-light/30 transition-colors group"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-9 h-9 rounded-lg bg-white border border-neutral-200 flex items-center justify-center group-hover:bg-brand-light/5 transition-colors shrink-0">
                            <Icon className="w-4 h-4 text-brand-light" />
                          </div>
                          <h3 className="text-xs font-black text-neutral-900 uppercase tracking-tight leading-tight">{cat.title}</h3>
                        </div>
                        <p className="text-xs text-neutral-500 leading-relaxed">{cat.description}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Valor Tangible */}
              <div>
                <div className="mb-8">
                  <span className="text-xs font-black text-brand-light tracking-widest uppercase">BENEFICIOS</span>
                  <h2 className="text-3xl font-black text-neutral-900 mt-2 uppercase tracking-tighter">Valor Tangible</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features?.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-sm"
                    >
                      <h3 className="text-xs font-black text-neutral-900 mb-2 uppercase tracking-tight">{feature.title}</h3>
                      <p className="text-xs text-neutral-500 leading-relaxed">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* PROCESOS (Roadmap) */}
      {service.processes && (
        <section className="py-20 bg-neutral-50 relative overflow-hidden">
          {/* Background Accent */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-light/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

          <Container className="relative z-10">
            <div className="mb-12">
              <span className="text-xs font-black text-brand-light tracking-widest uppercase">PROCESOS</span>
              <h2 className="text-3xl font-black text-neutral-900 mt-2 uppercase tracking-tighter">Roadmap de Trabajo</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.processes.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative"
                >
                  <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200/60 shadow-sm hover:border-brand-light/40 transition-all duration-300 h-full">
                    <div className="flex items-center gap-4 mb-4">
                      {/* Step Number Badge */}
                      <div className="w-10 h-10 rounded-xl bg-brand-light/10 text-brand-light flex items-center justify-center font-black text-sm group-hover:bg-brand-light group-hover:text-white transition-colors duration-300 shrink-0">
                        {step.number}
                      </div>

                      <h3 className="text-sm font-black text-neutral-900 uppercase tracking-tight leading-tight">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-xs text-neutral-500 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Connecting Line (Desktop) */}
                    {idx < (service.processes?.length ?? 0) - 1 && (
                      <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                        {((idx + 1) % 4 !== 0) && (
                          <div className="w-6 h-px bg-neutral-300" />
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 04. RESULTADOS (Metrics) */}
      {service.metrics && (
        <Section className={`bg-black ${(id === 'analisis-procesos' || id === 'software') ? 'pt-8 pb-16 md:pt-12 md:pb-24' : 'py-16'}`}>
          <Container>
            <div className="mb-10 text-center">
              <span className="text-xs font-black text-brand-light tracking-widest uppercase">RESULTADOS</span>
              <h2 className="text-3xl font-black text-white mt-2 uppercase tracking-tighter">
                {service.metricsTitle || "Impacto Empresarial"}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {service.metrics.map((metric, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-white/[0.05] border border-white/10 text-center">
                  <h3 className="text-4xl font-black text-brand-light mb-2">{metric.value}</h3>
                  <p className="text-neutral-500 uppercase tracking-widest text-[10px] font-bold">{metric.label}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Default Content Section */}
      {!service.features && !service.projects && (
        <Section className="py-40">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold text-white mb-10">¿Por qué elegir nuestra solución?</h2>
              <div className="space-y-8 text-lg text-neutral-400 leading-relaxed">
                <p>
                  Nuestra arquitectura modular nos permite adaptarnos a los sistemas heredados de tu empresa, garantizando una transición fluida hacia la automatización. No reemplazamos tu flujo de trabajo, lo potenciamos.
                </p>
                <p>
                  Utilizamos tecnologías de última generación para asegurar que cada dato procesado sea preciso y auditable, cumpliendo con los más altos estándares de calidad empresarial.
                </p>
              </div>
            </div>
          </Container>
        </Section>
      )}
    </div>
  );
};

export default ServicePage;

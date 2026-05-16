import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import Section from '../components/common/Section';
import Container from '../components/common/Container';

const ContactPage = () => {
  return (
    <Section className="min-h-screen pt-40 pb-20 flex items-center" withGrid withGlow>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Info Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <h1 className="text-5xl md:text-7xl font-black font-display tracking-tighter text-white leading-tight">
                Hablemos de tu <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-white">próximo nivel</span>
              </h1>
              <p className="text-neutral-400 text-xl max-w-md leading-relaxed">
                Estamos listos para transformar la operación de tu empresa con tecnología de vanguardia y automatización inteligente.
              </p>

              <div className="space-y-6 pt-8">
                <div className="flex items-center gap-4 text-neutral-300">
                  <div className="w-12 h-12 rounded-2xl bg-brand-light/10 flex items-center justify-center border border-brand-light/20">
                    <Mail className="w-5 h-5 text-brand-light" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-neutral-500 font-bold">Email Directo</p>
                    <p className="text-lg font-medium">hermarclient@outlook.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-light/20 to-brand-dark/20 blur-2xl opacity-50 rounded-3xl" />
            <form
              action="https://formspree.io/f/hermarclient@outlook.com"
              method="POST"
              className="relative bg-white/[0.03] border border-white/10 backdrop-blur-2xl rounded-3xl p-8 md:p-12 space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold ml-1">Nombre Completo</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Tu nombre"
                    className="w-full bg-white/[0.05] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-brand-light/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold ml-1">Correo Electrónico</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="tu@email.com"
                    className="w-full bg-white/[0.05] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-brand-light/50 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold ml-1">Asunto</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="¿En qué podemos ayudarte?"
                  className="w-full bg-white/[0.05] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-brand-light/50 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold ml-1">Mensaje</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Cuéntanos más sobre tu proyecto o necesidades..."
                  className="w-full bg-white/[0.05] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-brand-light/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-light text-brand-dark font-black uppercase tracking-[0.2em] text-xs py-5 rounded-2xl hover:bg-white transition-all flex items-center justify-center gap-3 shadow-[0_20px_50px_rgba(12,171,227,0.2)] active:scale-[0.98]"
              >
                Enviar Mensaje <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default ContactPage;

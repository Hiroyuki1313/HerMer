import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { springHover } from '../../animations/variants';
import { getWhatsAppLink, CONTACT_LINKS } from '../../constants/links';
import { SERVICES } from '../../constants/services';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 backdrop-blur-md bg-background/50 border-b border-white/5">
      <div className="flex items-center gap-8">
        <Link to="/">
          <img src="/logo.png" alt="HERMAR Logo" className="h-12 w-auto object-contain" />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {isHome ? (
            <a
              href="#servicios"
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 hover:text-brand-light transition-colors px-2 py-1 shrink-0"
            >
              Servicios
            </a>
          ) : (
            <Link
              to="/#servicios"
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 hover:text-brand-light transition-colors px-2 py-1 shrink-0"
            >
              Servicios
            </Link>
          )}

          <div className="h-4 w-px bg-white/10 shrink-0" />

          <div className="flex items-center gap-4">
            {SERVICES.map((service) => {
              const isActive = location.pathname === `/servicios/${service.id}`;

              let label = "";
              switch (service.id) {
                case 'rpa':
                  label = "Business intelligence";
                  break;
                case 'analisis-procesos':
                  label = "Analisis y Mejora de Procesos";
                  break;
                case 'infraestructura-red':
                  label = "Infraestructura de Red";
                  break;
                case 'software':
                  label = "Software";
                  break;
                default:
                  label = service.title;
              }

              return (
                <Link
                  key={service.id}
                  to={`/servicios/${service.id}`}
                  className={`text-[9px] font-bold uppercase tracking-tight transition-all px-2 py-1 rounded-md shrink-0 whitespace-nowrap ${isActive
                      ? "text-brand-light bg-brand-light/5"
                      : "text-neutral-500 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <motion.a
        href={getWhatsAppLink(CONTACT_LINKS.DEMO_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        variants={springHover}
        whileHover="hover"
        whileTap="tap"
        className="relative overflow-hidden px-5 py-2.5 rounded-full bg-brand-dark/20 border border-brand-light/30 text-white text-sm font-medium transition-all hover:bg-brand-dark/40 shadow-[0_0_15px_rgba(12,171,227,0.15)] hover:shadow-[0_0_25px_rgba(12,171,227,0.3)] block cursor-pointer shrink-0"
      >
        <span className="relative z-10">Agendar Demo</span>
      </motion.a>
    </nav>
  );
};

export default Navbar;

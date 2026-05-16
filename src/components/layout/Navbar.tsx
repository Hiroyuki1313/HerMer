import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SERVICES } from '../../constants/services';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 transition-all duration-300 ${isScrolled
          ? "py-4 bg-background/90 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "py-6 bg-background/50 backdrop-blur-md border-b border-white/5"
        }`}
    >
      <div className="flex items-center gap-8">
        <Link to="/">
          <img src="/logo.png" alt="HERMAR Logo" className="h-12 w-auto object-contain" />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {isHome ? (
            <a
              href="#servicios"
              className="text-[13px] font-bold uppercase tracking-[0.15em] text-neutral-400 hover:text-brand-light transition-colors px-2 py-1 shrink-0"
            >
              Servicios
            </a>
          ) : (
            <Link
              to="/#servicios"
              className="text-[13px] font-bold uppercase tracking-[0.15em] text-neutral-400 hover:text-brand-light transition-colors px-2 py-1 shrink-0"
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
                  className={`text-[11px] font-bold uppercase tracking-wide transition-all px-2 py-1 rounded-md shrink-0 whitespace-nowrap ${isActive
                    ? "text-brand-light bg-brand-light/5"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          <div className="h-4 w-px bg-white/10 shrink-0" />

          <Link
            to="/contacto"
            className={`text-[12px] font-bold uppercase tracking-widest transition-all px-5 py-2 rounded-full border ${location.pathname === '/contacto'
              ? "text-brand-dark bg-brand-light border-brand-light"
              : "text-neutral-300 border-white/20 hover:border-brand-light/50 hover:text-brand-light"
              }`}
          >
            Contacto
          </Link>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden text-neutral-300 hover:text-white p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 flex flex-col md:hidden py-6 px-6 shadow-2xl">
          <div className="flex flex-col gap-3 mb-6">
            <span className="text-[10px] font-black text-brand-light tracking-widest uppercase mb-1 px-2">Servicios</span>
            {SERVICES.map((service) => {
              const isActive = location.pathname === `/servicios/${service.id}`;
              let label = "";
              switch (service.id) {
                case 'rpa': label = "Business intelligence"; break;
                case 'analisis-procesos': label = "Analisis y Mejora de Procesos"; break;
                case 'infraestructura-red': label = "Infraestructura de Red"; break;
                case 'software': label = "Software"; break;
                default: label = service.title;
              }
              return (
                <Link
                  key={service.id}
                  to={`/servicios/${service.id}`}
                  className={`text-xs font-bold uppercase tracking-wide transition-all py-3 px-4 rounded-lg border ${isActive
                    ? "text-brand-light bg-brand-light/10 border-brand-light/20"
                    : "text-neutral-400 border-white/5 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
          
          <Link
            to="/contacto"
            className="text-center text-[12px] font-bold uppercase tracking-widest transition-all px-5 py-3 rounded-xl border text-brand-dark bg-brand-light border-brand-light shadow-lg"
          >
            Contacto
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

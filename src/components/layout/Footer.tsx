const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <h3 className="text-xl font-display font-bold text-white tracking-tight">
            HERMAR Business Solutions
          </h3>
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-mono uppercase tracking-[0.2em] text-neutral-400">
          <span className="hover:text-brand-light transition-colors">Innovación</span>
          <span className="text-white/10">•</span>
          <span className="hover:text-brand-light transition-colors">Calidad</span>
          <span className="text-white/10">•</span>
          <span className="hover:text-brand-light transition-colors">Honestidad</span>
          <span className="text-white/10">•</span>
          <span className="hover:text-brand-light transition-colors">Eficiencia</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

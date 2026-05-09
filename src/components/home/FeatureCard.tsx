import { useState, useRef, type FC, type MouseEvent } from 'react';
import { motion, useMotionValue, useTransform, useMotionTemplate } from 'framer-motion';
import { ChevronRight, type LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeUpSpring } from '../../animations/variants';

interface FeatureCardProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const FeatureCard: FC<FeatureCardProps> = ({ id, title, description, icon: Icon }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;
    const { left, top } = divRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleFocus = () => { setIsFocused(true); setOpacity(1); };
  const handleBlur = () => { setIsFocused(false); setOpacity(0); };
  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  const rotateX = useTransform(mouseY, [0, 400], [5, -5]);
  const rotateY = useTransform(mouseX, [0, 600], [-5, 5]);

  return (
    <motion.div
      variants={fadeUpSpring}
      style={{
        rotateX: isFocused ? 0 : rotateX,
        rotateY: isFocused ? 0 : rotateY,
        transformStyle: "preserve-3d"
      }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
      className="relative h-full"
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to={`/servicios/${id}`}
        className="relative overflow-hidden rounded-[2rem] bg-white/[0.02] border border-white/10 p-10 flex flex-col justify-between h-full backdrop-blur-2xl group cursor-pointer block transition-colors hover:border-brand-light/30"
      >
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 rounded-[2rem]"
          style={{
            opacity,
            background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(12,171,227,0.1), transparent 80%)`,
          }}
        />
        
        <div className="z-10 relative" style={{ transform: "translateZ(50px)" }}>
          <div className="w-14 h-14 rounded-2xl bg-brand-dark/20 border border-brand-light/20 flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-dark/40 group-hover:border-brand-light/50 group-hover:shadow-[0_0_30px_rgba(12,171,227,0.2)]">
            <Icon className="w-7 h-7 text-brand-light" />
          </div>
          <h3 className="text-2xl font-bold font-display text-white mb-4 tracking-tight group-hover:text-brand-light transition-colors">
            {title}
          </h3>
          <p className="text-neutral-400 leading-relaxed text-base group-hover:text-neutral-300 transition-colors">
            {description}
          </p>
        </div>

        <div className="z-10 mt-10 relative flex items-center text-sm font-bold uppercase tracking-widest text-brand-light opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          <span className="mr-2">Saber más</span> <ChevronRight className="w-4 h-4" />
        </div>
      </Link>
    </motion.div>
  );
};

export default FeatureCard;

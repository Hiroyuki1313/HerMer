import type { FC, ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  withGrid?: boolean;
  withGlow?: boolean;
}

const Section: FC<SectionProps> = ({ 
  children, 
  id, 
  className, 
  withGrid = false,
  withGlow = false 
}) => {
  return (
    <section 
      id={id} 
      className={cn("relative py-16 md:py-24 overflow-hidden", className)}
    >
      {withGrid && (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      )}
      
      {withGlow && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-dark/10 blur-[150px] rounded-full pointer-events-none" />
      )}

      {children}
    </section>
  );
};

export default Section;

import type { FC, ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ContainerProps {
  children: ReactNode;
  className?: string;
  isFluid?: boolean;
}

const Container: FC<ContainerProps> = ({ children, className, isFluid = false }) => {
  return (
    <div className={cn(
      "w-full px-6",
      !isFluid && "max-w-7xl mx-auto",
      className
    )}>
      {children}
    </div>
  );
};

export default Container;

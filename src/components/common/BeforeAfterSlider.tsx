import { useState } from 'react';
import { ArrowLeftRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

const BeforeAfterSlider = ({ 
  beforeImage, 
  afterImage,
  beforeLabel = "ANTES",
  afterLabel = "DESPUÉS" 
}: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden group bg-neutral-100 shadow-sm border border-neutral-200/60">
      {/* After Image (Background - visible on the right) */}
      <img src={afterImage} alt="After" className="absolute inset-0 w-full h-full object-cover object-top" />
      
      {/* Before Image (Clipped - visible on the left) */}
      <img 
        src={beforeImage} 
        alt="Before"
        className="absolute inset-0 w-full h-full object-cover object-top" 
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      />
      
      {/* Slider Input */}
      <input 
        type="range" 
        min="0" max="100" 
        value={sliderPosition} 
        onChange={(e) => setSliderPosition(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
      />

      {/* Slider Line Visual */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white pointer-events-none z-0 shadow-[0_0_10px_rgba(0,0,0,0.2)]"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border border-neutral-200">
          <ArrowLeftRight className="w-4 h-4 text-neutral-500" />
        </div>
      </div>
      
      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold pointer-events-none">
        {beforeLabel}
      </div>
      <div className="absolute top-4 right-4 bg-brand-light/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold pointer-events-none z-20"
           style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
        {afterLabel}
      </div>
      {/* Static After Label so it stays when slider crosses it (using opacity based on slider position if we want, but clipping the container is better) */}
      {sliderPosition < 90 && (
         <div className="absolute top-4 right-4 bg-brand-light/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold pointer-events-none z-20">
          {afterLabel}
        </div>
      )}
    </div>
  );
};

export default BeforeAfterSlider;

import { useState, useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';

const HeroGlobe = () => {
  const [countries, setCountries] = useState({ features: [] });
  const globeRef = useRef<any>(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(setCountries);
  }, []);

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.pointOfView({ lat: 23.6345, lng: -102.5528, altitude: 2 }, 1000);
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.5;
    }
  }, [countries]);

  const handleMouseEnter = () => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = false;
      globeRef.current.pointOfView({ lat: 23.6345, lng: -102.5528, altitude: 2 }, 1000);
    }
  };

  const handleMouseLeave = () => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
    }
  };

  return (
    <div 
      className="absolute right-[-60%] md:-right-20 top-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] pointer-events-auto flex items-center justify-center z-0 opacity-30 md:opacity-100 mix-blend-screen md:mix-blend-normal transition-transform duration-700 ease-out hover:scale-105"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Globe
        ref={globeRef}
        width={typeof window !== 'undefined' && window.innerWidth < 1024 ? 600 : 800}
        height={typeof window !== 'undefined' && window.innerWidth < 1024 ? 600 : 800}
        backgroundColor="rgba(0,0,0,0)"
        polygonsData={countries.features}
        polygonAltitude={(d: any) => (d.properties.ISO_A2 === 'MX' || d.properties.ADMIN === 'Mexico') ? 0.05 : 0.01}
        polygonCapColor={(d: any) => (d.properties.ISO_A2 === 'MX' || d.properties.ADMIN === 'Mexico') ? '#0CABE3' : 'rgba(10, 84, 168, 0.2)'}
        polygonSideColor={() => 'rgba(10, 84, 168, 0.1)'}
        polygonStrokeColor={() => '#0A54A8'}
      />
    </div>
  );
};

export default HeroGlobe;

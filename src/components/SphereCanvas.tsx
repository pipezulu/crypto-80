
import React, { useRef, useEffect } from 'react';
import { useSphereAnimation } from '@/hooks/useSphereAnimation';

interface SphereCanvasProps {
  color?: string;
  particleCount?: number;
  size?: number;
  className?: string;
  interactive?: boolean;
  intensity?: number;
  glow?: boolean;
  maintainSize?: boolean;
}

const SphereCanvas: React.FC<SphereCanvasProps> = ({ 
  color = '#9b87f5', 
  particleCount = 150, 
  size = 400,
  className = '',
  interactive = true,
  intensity = 2,
  glow = true,
  maintainSize = false
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Ensure canvas size is maintained regardless of container
  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (canvasRef.current) {
        // Force the canvas to maintain its dimensions even when container changes
        canvasRef.current.width = size;
        canvasRef.current.height = size;
        canvasRef.current.style.width = `${size}px`;
        canvasRef.current.style.height = `${size}px`;
      }
    });
    
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    
    return () => {
      resizeObserver.disconnect();
    };
  }, [size]);
  
  // Use our custom hook to handle all the animation logic
  useSphereAnimation({
    canvasRef,
    color,
    particleCount,
    size,
    interactive,
    intensity,
    glow,
    maintainSize
  });
  
  return (
    <div 
      ref={containerRef} 
      className={className}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        minWidth: `${size}px`,
        minHeight: `${size}px`,
        position: 'relative'
      }}
    >
      <canvas 
        ref={canvasRef} 
        className="cursor-move"
        width={size} 
        height={size}
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          touchAction: 'none',
          width: `${size}px`,
          height: `${size}px`
        }}
      />
    </div>
  );
};

export default SphereCanvas;

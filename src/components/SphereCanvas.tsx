
import React, { useRef } from 'react';
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
    <canvas 
      ref={canvasRef} 
      className={`${className} cursor-move`}
      width={size} 
      height={size}
      style={{ 
        touchAction: 'none',
        // Force the canvas to maintain its full size regardless of container
        width: size,
        height: size,
        minWidth: size,
        minHeight: size
      }}
    />
  );
};

export default SphereCanvas;


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
  maintainSize?: boolean; // New prop to maintain consistent size
}

const SphereCanvas: React.FC<SphereCanvasProps> = ({ 
  color = '#9b87f5', 
  particleCount = 150, 
  size = 400,
  className = '',
  interactive = true,
  intensity = 2,
  glow = true,
  maintainSize = false // Default to false for backward compatibility
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
        // If maintainSize is true, set min width and height to ensure it doesn't shrink
        minWidth: maintainSize ? size : undefined,
        minHeight: maintainSize ? size : undefined
      }}
    />
  );
};

export default SphereCanvas;

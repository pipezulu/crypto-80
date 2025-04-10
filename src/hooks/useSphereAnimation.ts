
import { useRef, useEffect } from 'react';
import { Point, createSpherePoints, drawGlowEffect, updatePointPosition } from '@/utils/sphereUtils';

interface UseSphereAnimationProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  color: string;
  particleCount: number;
  size: number;
  interactive: boolean;
  intensity: number;
  glow: boolean;
}

export function useSphereAnimation({
  canvasRef,
  color,
  particleCount,
  size,
  interactive,
  intensity,
  glow
}: UseSphereAnimationProps) {
  const sphereRadius = size / 2.2;
  const points = useRef<Point[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const isMouseActive = useRef(false);
  const animationRef = useRef<number | null>(null);
  const lastFrameTime = useRef<number>(0);
  const targetFPS = 60;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    points.current = createSpherePoints(particleCount, sphereRadius, color, intensity);
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.current = {
        x: (e.clientX - rect.left - canvas.width / 2) * 1.5,
        y: (e.clientY - rect.top - canvas.height / 2) * 1.5,
      };
      isMouseActive.current = true;
    };

    const handleMouseEnter = () => {
      isMouseActive.current = true;
    };

    const handleMouseLeave = () => {
      // Don't immediately deactivate to allow smooth transition
      setTimeout(() => {
        isMouseActive.current = false;
      }, 500);
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mousePos.current = {
          x: (e.touches[0].clientX - rect.left - canvas.width / 2) * 1.5,
          y: (e.touches[0].clientY - rect.top - canvas.height / 2) * 1.5,
        };
        isMouseActive.current = true;
      }
    };
    
    const handleTouchStart = (e: TouchEvent) => {
      isMouseActive.current = true;
    };
    
    const handleTouchEnd = () => {
      // Don't immediately deactivate to allow smooth transition
      setTimeout(() => {
        isMouseActive.current = false;
      }, 500);
    };
    
    // Setup event listeners
    if (interactive) {
      canvas.addEventListener('mousemove', handleMouseMove, { passive: true });
      canvas.addEventListener('mouseenter', handleMouseEnter, { passive: true });
      canvas.addEventListener('mouseleave', handleMouseLeave, { passive: true });
      
      canvas.addEventListener('touchmove', handleTouchMove, { passive: true });
      canvas.addEventListener('touchstart', handleTouchStart, { passive: true });
      canvas.addEventListener('touchend', handleTouchEnd, { passive: true });
    }
    
    const animate = (timestamp: number) => {
      const elapsed = timestamp - lastFrameTime.current;
      // Limit frame rate for performance
      if (elapsed > 1000 / targetFPS) {
        lastFrameTime.current = timestamp;
        
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw glow effect if enabled
        if (glow) {
          drawGlowEffect(ctx, canvas.width, canvas.height, sphereRadius, color);
        }
        
        // Sort points by z-index for proper rendering
        points.current.sort((a, b) => a.z - b.z);
        
        // Draw connections between particles for denser spheres
        if (particleCount > 80) {
          ctx.lineWidth = 0.3;
          for (let i = 0; i < points.current.length; i++) {
            const pointA = points.current[i];
            const scaleA = (sphereRadius * 2) / (sphereRadius * 2 + pointA.z);
            const x2dA = pointA.x * scaleA + canvas.width / 2;
            const y2dA = pointA.y * scaleA + canvas.height / 2;
            
            for (let j = i + 1; j < points.current.length; j++) {
              const pointB = points.current[j];
              const scaleB = (sphereRadius * 2) / (sphereRadius * 2 + pointB.z);
              const x2dB = pointB.x * scaleB + canvas.width / 2;
              const y2dB = pointB.y * scaleB + canvas.height / 2;
              
              const dx = x2dA - x2dB;
              const dy = y2dA - y2dB;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              if (distance < sphereRadius / 2.5) {
                const opacity = (1 - distance / (sphereRadius / 2.5)) * 0.5;
                ctx.strokeStyle = `${color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
                ctx.beginPath();
                ctx.moveTo(x2dA, y2dA);
                ctx.lineTo(x2dB, y2dB);
                ctx.stroke();
              }
            }
          }
        }
        
        // Update and draw each point
        for (const point of points.current) {
          // Update point position based on mouse interaction
          updatePointPosition(
            point, 
            sphereRadius, 
            mousePos.current, 
            isMouseActive.current, 
            intensity
          );
          
          // Calculate 2D position from 3D
          const scale = (sphereRadius * 2) / (sphereRadius * 2 + point.z);
          const x2d = point.x * scale + canvas.width / 2;
          const y2d = point.y * scale + canvas.height / 2;
          
          // Calculate opacity based on z-position
          const opacity = (point.z + sphereRadius) / (sphereRadius * 2);
          const opacityHex = Math.floor(opacity * 255).toString(16).padStart(2, '0');
          
          // Draw main particle
          ctx.fillStyle = point.color + opacityHex;
          ctx.beginPath();
          ctx.arc(x2d, y2d, point.size * scale, 0, Math.PI * 2);
          ctx.fill();
          
          // Draw highlight effect
          ctx.fillStyle = '#ffffff' + opacityHex;
          ctx.beginPath();
          ctx.arc(x2d, y2d, point.size * scale * 0.25, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      // Continue animation loop
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Handle window resize
    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        canvas.width = size;
        canvas.height = size;
      }, 100);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Set initial canvas size
    canvas.width = size;
    canvas.height = size;
    
    // Start animation loop
    lastFrameTime.current = performance.now();
    animationRef.current = requestAnimationFrame(animate);
    
    // Cleanup function
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
      
      if (interactive) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseenter', handleMouseEnter);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
        
        canvas.removeEventListener('touchmove', handleTouchMove);
        canvas.removeEventListener('touchstart', handleTouchStart);
        canvas.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [color, particleCount, size, interactive, intensity, glow, sphereRadius]);
}

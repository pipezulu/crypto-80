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
      setTimeout(() => {
        isMouseActive.current = false;
      }, 500);
    };
    
    if (interactive) {
      canvas.addEventListener('mousemove', handleMouseMove, { passive: true });
      canvas.addEventListener('mouseenter', handleMouseEnter, { passive: true });
      canvas.addEventListener('mouseleave', handleMouseLeave, { passive: true });
      
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
        setTimeout(() => {
          isMouseActive.current = false;
        }, 500);
      };
      
      canvas.addEventListener('touchmove', handleTouchMove, { passive: true });
      canvas.addEventListener('touchstart', handleTouchStart, { passive: true });
      canvas.addEventListener('touchend', handleTouchEnd, { passive: true });
    }
    
    const animate = (timestamp: number) => {
      const elapsed = timestamp - lastFrameTime.current;
      if (elapsed > 1000 / targetFPS) {
        lastFrameTime.current = timestamp;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        if (glow) {
          drawGlowEffect(ctx, canvas.width, canvas.height, sphereRadius, color);
        }
        
        points.current.sort((a, b) => a.z - b.z);
        
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
        
        for (const point of points.current) {
          updatePointPosition(
            point, 
            sphereRadius, 
            mousePos.current, 
            isMouseActive.current, 
            intensity
          );
          
          const scale = (sphereRadius * 2) / (sphereRadius * 2 + point.z);
          const x2d = point.x * scale + canvas.width / 2;
          const y2d = point.y * scale + canvas.height / 2;
          
          const opacity = (point.z + sphereRadius) / (sphereRadius * 2);
          const opacityHex = Math.floor(opacity * 255).toString(16).padStart(2, '0');
          
          ctx.fillStyle = point.color + opacityHex;
          ctx.beginPath();
          ctx.arc(x2d, y2d, point.size * scale, 0, Math.PI * 2);
          ctx.fill();
          
          ctx.fillStyle = '#ffffff' + opacityHex;
          ctx.beginPath();
          ctx.arc(x2d, y2d, point.size * scale * 0.25, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        canvas.width = size;
        canvas.height = size;
      }, 100);
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    lastFrameTime.current = performance.now();
    animationRef.current = requestAnimationFrame(animate);
    
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
        
        if (typeof handleTouchMove === 'function') {
          canvas.removeEventListener('touchmove', handleTouchMove);
        }
        if (typeof handleTouchStart === 'function') {
          canvas.removeEventListener('touchstart', handleTouchStart);
        }
        if (typeof handleTouchEnd === 'function') {
          canvas.removeEventListener('touchend', handleTouchEnd);
        }
      }
    };
  }, [color, particleCount, size, interactive, intensity, glow, sphereRadius]);
}

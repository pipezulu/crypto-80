
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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Initialize points in a sphere shape
    points.current = createSpherePoints(particleCount, sphereRadius, color, intensity);
    
    // Improved mouse event handling for better tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      // Calculate mouse position relative to canvas center with increased sensitivity
      mousePos.current = {
        x: (e.clientX - rect.left - canvas.width / 2) * 1.2,
        y: (e.clientY - rect.top - canvas.height / 2) * 1.2,
      };
      isMouseActive.current = true;
    };

    const handleMouseEnter = () => {
      isMouseActive.current = true;
    };

    const handleMouseLeave = () => {
      // Smoother transition when mouse leaves
      setTimeout(() => {
        isMouseActive.current = false;
      }, 1000);
    };
    
    // Setup event listeners for mouse and touch interactions
    if (interactive) {
      // Mouse events
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseenter', handleMouseEnter);
      canvas.addEventListener('mouseleave', handleMouseLeave);
      
      // Enhanced touch support for mobile
      canvas.addEventListener('touchmove', (e) => {
        if (e.touches.length > 0) {
          const rect = canvas.getBoundingClientRect();
          // Increased sensitivity for touch as well
          mousePos.current = {
            x: (e.touches[0].clientX - rect.left - canvas.width / 2) * 1.2,
            y: (e.touches[0].clientY - rect.top - canvas.height / 2) * 1.2,
          };
          isMouseActive.current = true;
        }
        e.preventDefault();
      });
      
      canvas.addEventListener('touchstart', (e) => {
        isMouseActive.current = true;
        e.preventDefault();
      });
      
      canvas.addEventListener('touchend', () => {
        // Smoother transition when touch ends
        setTimeout(() => {
          isMouseActive.current = false;
        }, 1000);
      });
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw glow effect
      if (glow) {
        drawGlowEffect(ctx, canvas.width, canvas.height, sphereRadius, color);
      }
      
      // Sort points by z-index to create proper depth effect
      points.current.sort((a, b) => a.z - b.z);
      
      // Connect nearby particles with lines
      if (particleCount > 80) {
        ctx.lineWidth = 0.3;
        for (let i = 0; i < points.current.length; i++) {
          const pointA = points.current[i];
          const scaleA = (sphereRadius * 2) / (sphereRadius * 2 + pointA.z);
          const x2dA = pointA.x * scaleA + canvas.width / 2;
          const y2dA = pointA.y * scaleA + canvas.height / 2;
          
          // Check distance with other particles
          for (let j = i + 1; j < points.current.length; j++) {
            const pointB = points.current[j];
            const scaleB = (sphereRadius * 2) / (sphereRadius * 2 + pointB.z);
            const x2dB = pointB.x * scaleB + canvas.width / 2;
            const y2dB = pointB.y * scaleB + canvas.height / 2;
            
            const dx = x2dA - x2dB;
            const dy = y2dA - y2dB;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Draw line if particles are close enough
            if (distance < sphereRadius / 3) {
              const opacity = (1 - distance / (sphereRadius / 3)) * 0.4;
              ctx.strokeStyle = `${color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
              ctx.beginPath();
              ctx.moveTo(x2dA, y2dA);
              ctx.lineTo(x2dB, y2dB);
              ctx.stroke();
            }
          }
        }
      }
      
      // Update and render points with improved interactive behavior
      for (const point of points.current) {
        updatePointPosition(
          point, 
          sphereRadius, 
          mousePos.current, 
          isMouseActive.current, 
          intensity
        );
        
        // Simple 3D to 2D projection
        const scale = (sphereRadius * 2) / (sphereRadius * 2 + point.z);
        const x2d = point.x * scale + canvas.width / 2;
        const y2d = point.y * scale + canvas.height / 2;
        
        // Draw point with trail effect
        const opacity = (point.z + sphereRadius) / (sphereRadius * 2);
        const opacityHex = Math.floor(opacity * 255).toString(16).padStart(2, '0');
        ctx.fillStyle = point.color + opacityHex;
        ctx.beginPath();
        ctx.arc(x2d, y2d, point.size * scale, 0, Math.PI * 2);
        ctx.fill();
        
        // Add light point in center of particles
        ctx.fillStyle = '#ffffff' + opacityHex;
        ctx.beginPath();
        ctx.arc(x2d, y2d, point.size * scale * 0.3, 0, Math.PI * 2);
        ctx.fill();
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Handle resize
    const handleResize = () => {
      canvas.width = size;
      canvas.height = size;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    animate();
    
    // Improved cleanup with animation frame cancellation
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseenter', handleMouseEnter);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
        // Use proper cleanup for event listeners with inline functions
        canvas.removeEventListener('touchmove', (e) => e.preventDefault());
        canvas.removeEventListener('touchstart', (e) => e.preventDefault());
        canvas.removeEventListener('touchend', () => {});
      }
    };
  }, [color, particleCount, size, interactive, intensity, glow, sphereRadius]);
}

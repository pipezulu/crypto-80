
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
    
    // Initialize points in a sphere shape
    points.current = createSpherePoints(particleCount, sphereRadius, color, intensity);
    
    // Improved mouse event handling with better sensitivity
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      // Calculate mouse position relative to canvas center with increased sensitivity 
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
      // Smoother transition when mouse leaves
      setTimeout(() => {
        isMouseActive.current = false;
      }, 500); // Reduced delay for more responsiveness
    };
    
    // Setup event listeners for mouse and touch interactions
    if (interactive) {
      // Mouse events with passive option for better performance
      canvas.addEventListener('mousemove', handleMouseMove, { passive: true });
      canvas.addEventListener('mouseenter', handleMouseEnter, { passive: true });
      canvas.addEventListener('mouseleave', handleMouseLeave, { passive: true });
      
      // Enhanced touch support for mobile with better responsiveness
      const handleTouchMove = (e: TouchEvent) => {
        if (e.touches.length > 0) {
          const rect = canvas.getBoundingClientRect();
          // Increased sensitivity for touch
          mousePos.current = {
            x: (e.touches[0].clientX - rect.left - canvas.width / 2) * 1.5,
            y: (e.touches[0].clientY - rect.top - canvas.height / 2) * 1.5,
          };
          isMouseActive.current = true;
        }
        // Don't preventDefault to allow natural scrolling
      };
      
      const handleTouchStart = (e: TouchEvent) => {
        isMouseActive.current = true;
        // Don't preventDefault to allow natural touch behavior
      };
      
      const handleTouchEnd = () => {
        setTimeout(() => {
          isMouseActive.current = false;
        }, 500); // Reduced delay for more responsiveness
      };
      
      canvas.addEventListener('touchmove', handleTouchMove, { passive: true });
      canvas.addEventListener('touchstart', handleTouchStart, { passive: true });
      canvas.addEventListener('touchend', handleTouchEnd, { passive: true });
    }
    
    // Optimized animation loop with frame limiting for smoother performance
    const animate = (timestamp: number) => {
      // Frame rate limiting for consistent performance
      const elapsed = timestamp - lastFrameTime.current;
      if (elapsed > 1000 / targetFPS) { // Only update if enough time has passed
        lastFrameTime.current = timestamp;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw glow effect
        if (glow) {
          drawGlowEffect(ctx, canvas.width, canvas.height, sphereRadius, color);
        }
        
        // Sort points by z-index for proper depth rendering
        points.current.sort((a, b) => a.z - b.z);
        
        // Connect nearby particles with lines for visual interest
        if (particleCount > 80) {
          ctx.lineWidth = 0.3;
          for (let i = 0; i < points.current.length; i++) {
            const pointA = points.current[i];
            const scaleA = (sphereRadius * 2) / (sphereRadius * 2 + pointA.z);
            const x2dA = pointA.x * scaleA + canvas.width / 2;
            const y2dA = pointA.y * scaleA + canvas.height / 2;
            
            // Optimize by only checking nearby points (i+1 to end)
            for (let j = i + 1; j < points.current.length; j++) {
              const pointB = points.current[j];
              const scaleB = (sphereRadius * 2) / (sphereRadius * 2 + pointB.z);
              const x2dB = pointB.x * scaleB + canvas.width / 2;
              const y2dB = pointB.y * scaleB + canvas.height / 2;
              
              const dx = x2dA - x2dB;
              const dy = y2dA - y2dB;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              // Draw line with gradient opacity based on distance
              if (distance < sphereRadius / 2.5) { // Reduced distance threshold for cleaner look
                const opacity = (1 - distance / (sphereRadius / 2.5)) * 0.5; // Increased opacity
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
          
          // Optimized 3D to 2D projection
          const scale = (sphereRadius * 2) / (sphereRadius * 2 + point.z);
          const x2d = point.x * scale + canvas.width / 2;
          const y2d = point.y * scale + canvas.height / 2;
          
          // Draw point with enhanced visual effect
          const opacity = (point.z + sphereRadius) / (sphereRadius * 2);
          const opacityHex = Math.floor(opacity * 255).toString(16).padStart(2, '0');
          
          // Main particle
          ctx.fillStyle = point.color + opacityHex;
          ctx.beginPath();
          ctx.arc(x2d, y2d, point.size * scale, 0, Math.PI * 2);
          ctx.fill();
          
          // Highlight dot in center for 3D effect
          ctx.fillStyle = '#ffffff' + opacityHex;
          ctx.beginPath();
          ctx.arc(x2d, y2d, point.size * scale * 0.25, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Handle resize with debounce for better performance
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
    
    // Start animation loop
    lastFrameTime.current = performance.now();
    animationRef.current = requestAnimationFrame(animate);
    
    // Cleanup function with proper event handler removal
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
        
        // Fixed: Added proper references to touch event handlers
        canvas.removeEventListener('touchmove', handleTouchMove);
        canvas.removeEventListener('touchstart', handleTouchStart);
        canvas.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [color, particleCount, size, interactive, intensity, glow, sphereRadius]);
}

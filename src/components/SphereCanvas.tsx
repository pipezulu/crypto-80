
import React, { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  z: number;
  size: number;
  color: string;
  vx: number;
  vy: number;
  vz: number;
}

interface SphereCanvasProps {
  color?: string;
  particleCount?: number;
  size?: number;
  className?: string;
  interactive?: boolean;
  intensity?: number;
  glow?: boolean;
}

const SphereCanvas: React.FC<SphereCanvasProps> = ({ 
  color = '#9b87f5', 
  particleCount = 150, 
  size = 400,
  className = '',
  interactive = true,
  intensity = 2,
  glow = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sphereRadius = size / 2.2; // Increased sphere radius for bigger effect
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
    points.current = [];
    for (let i = 0; i < particleCount; i++) {
      // Create points distributed on a sphere surface
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;
      
      const x = sphereRadius * Math.cos(theta) * Math.sin(phi);
      const y = sphereRadius * Math.sin(theta) * Math.sin(phi);
      const z = sphereRadius * Math.cos(phi);
      
      points.current.push({
        x, y, z,
        size: Math.random() * 4 + 2, // Larger particles
        color,
        vx: (Math.random() - 0.5) * 1.2 * intensity,
        vy: (Math.random() - 0.5) * 1.2 * intensity,
        vz: (Math.random() - 0.5) * 1.2 * intensity,
      });
    }
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left - canvas.width / 2,
        y: e.clientY - rect.top - canvas.height / 2,
      };
      isMouseActive.current = true;
    };

    const handleMouseEnter = () => {
      isMouseActive.current = true;
    };

    const handleMouseLeave = () => {
      setTimeout(() => {
        isMouseActive.current = false;
      }, 1000);
    };
    
    if (interactive) {
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseenter', handleMouseEnter);
      canvas.addEventListener('mouseleave', handleMouseLeave);
      
      // Add touch support for mobile
      canvas.addEventListener('touchmove', (e) => {
        if (e.touches.length > 0) {
          const rect = canvas.getBoundingClientRect();
          mousePos.current = {
            x: e.touches[0].clientX - rect.left - canvas.width / 2,
            y: e.touches[0].clientY - rect.top - canvas.height / 2,
          };
          isMouseActive.current = true;
        }
        e.preventDefault();
      });
      
      canvas.addEventListener('touchend', () => {
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
        const gradient = ctx.createRadialGradient(
          canvas.width / 2, 
          canvas.height / 2, 
          0, 
          canvas.width / 2, 
          canvas.height / 2, 
          sphereRadius * 1.5
        );
        gradient.addColorStop(0, `${color}40`); // Inner color with more opacity
        gradient.addColorStop(0.6, `${color}20`); // Middle color with medium opacity
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, sphereRadius * 1.8, 0, Math.PI * 2);
        ctx.fill();
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
      
      // Update and render points
      for (const point of points.current) {
        // Apply some movement
        point.x += point.vx;
        point.y += point.vy;
        point.z += point.vz;
        
        // Keep points within sphere boundaries
        const distance = Math.sqrt(point.x**2 + point.y**2 + point.z**2);
        if (distance > sphereRadius) {
          point.x = (point.x / distance) * sphereRadius;
          point.y = (point.y / distance) * sphereRadius;
          point.z = (point.z / distance) * sphereRadius;
          
          // Reverse velocity slightly dampened
          point.vx *= -0.85;
          point.vy *= -0.85;
          point.vz *= -0.85;
        }
        
        // If interactive and mouse is active, apply stronger force toward mouse on x-y plane
        if (interactive && isMouseActive.current) {
          const dx = mousePos.current.x - point.x;
          const dy = mousePos.current.y - point.y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          
          // Enhanced cursor influence radius and force for more dramatic effect
          if (dist < sphereRadius * 3) {
            const force = 0.35 * intensity * (1 - dist / (sphereRadius * 3));
            point.vx += (dx / dist) * force;
            point.vy += (dy / dist) * force;
          }
        } else {
          // Apply slight gravity toward center when mouse is inactive
          point.vx += -point.x * 0.001;
          point.vy += -point.y * 0.001;
          point.vz += -point.z * 0.001;
        }
        
        // Apply friction - reduced for smoother movement
        point.vx *= 0.97;
        point.vy *= 0.97;
        point.vz *= 0.97;
        
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
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseenter', handleMouseEnter);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [color, particleCount, size, interactive, intensity, glow]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className={`${className} cursor-move`}
      width={size} 
      height={size}
      style={{ touchAction: 'none' }}
    />
  );
};

export default SphereCanvas;

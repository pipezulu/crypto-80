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
}

const SphereCanvas: React.FC<SphereCanvasProps> = ({ 
  color = '#9b87f5', 
  particleCount = 100, 
  size = 300,
  className = '',
  interactive = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sphereRadius = size / 3;
  const points = useRef<Point[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  
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
        size: Math.random() * 2 + 1,
        color,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        vz: (Math.random() - 0.5) * 0.5,
      });
    }
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left - canvas.width / 2,
        y: e.clientY - rect.top - canvas.height / 2,
      };
    };
    
    if (interactive) {
      canvas.addEventListener('mousemove', handleMouseMove);
    }
    
    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
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
          point.vx *= -0.8;
          point.vy *= -0.8;
          point.vz *= -0.8;
        }
        
        // If interactive, apply subtle force toward mouse on x-y plane
        if (interactive) {
          const dx = mousePos.current.x - point.x;
          const dy = mousePos.current.y - point.y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < sphereRadius * 2) {
            const force = 0.05;
            point.vx += (dx / dist) * force;
            point.vy += (dy / dist) * force;
          }
        }
        
        // Apply slight gravity toward center
        point.vx += -point.x * 0.0003;
        point.vy += -point.y * 0.0003;
        point.vz += -point.z * 0.0003;
        
        // Apply friction
        point.vx *= 0.99;
        point.vy *= 0.99;
        point.vz *= 0.99;
        
        // Simple 3D to 2D projection
        const scale = (sphereRadius * 2) / (sphereRadius * 2 + point.z);
        const x2d = point.x * scale + canvas.width / 2;
        const y2d = point.y * scale + canvas.height / 2;
        
        // Draw point
        const opacity = (point.z + sphereRadius) / (sphereRadius * 2);
        ctx.fillStyle = point.color + Math.floor(opacity * 255).toString(16).padStart(2, '0');
        ctx.beginPath();
        ctx.arc(x2d, y2d, point.size * scale, 0, Math.PI * 2);
        ctx.fill();
      }
      
      animationId = requestAnimationFrame(animate);
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
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        canvas.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [color, particleCount, size, interactive]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className={`${className}`}
      width={size} 
      height={size}
    />
  );
};

export default SphereCanvas;

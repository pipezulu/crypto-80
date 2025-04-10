
export interface Point {
  x: number;
  y: number;
  z: number;
  size: number;
  color: string;
  vx: number;
  vy: number;
  vz: number;
}

export function createSpherePoints(
  particleCount: number, 
  sphereRadius: number, 
  color: string,
  intensity: number
): Point[] {
  const points: Point[] = [];
  for (let i = 0; i < particleCount; i++) {
    // Create points distributed evenly on a sphere surface using golden spiral method
    const phi = Math.acos(-1 + (2 * i) / particleCount);
    const theta = Math.sqrt(particleCount * Math.PI) * phi;
    
    const x = sphereRadius * Math.cos(theta) * Math.sin(phi);
    const y = sphereRadius * Math.sin(theta) * Math.sin(phi);
    const z = sphereRadius * Math.cos(phi);
    
    points.push({
      x, y, z,
      size: Math.random() * 4 + 2, // Larger particles
      color,
      vx: (Math.random() - 0.5) * 1.5 * intensity,
      vy: (Math.random() - 0.5) * 1.5 * intensity,
      vz: (Math.random() - 0.5) * 1.5 * intensity,
    });
  }
  return points;
}

export function drawGlowEffect(
  ctx: CanvasRenderingContext2D, 
  width: number, 
  height: number, 
  sphereRadius: number, 
  color: string
) {
  const gradient = ctx.createRadialGradient(
    width / 2, 
    height / 2, 
    0, 
    width / 2, 
    height / 2, 
    sphereRadius * 1.5
  );
  gradient.addColorStop(0, `${color}40`); // Inner color with more opacity
  gradient.addColorStop(0.6, `${color}20`); // Middle color with medium opacity
  gradient.addColorStop(1, 'transparent');
  
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(width / 2, height / 2, sphereRadius * 1.8, 0, Math.PI * 2);
  ctx.fill();
}

export function updatePointPosition(
  point: Point,
  sphereRadius: number,
  mousePos: { x: number, y: number },
  isMouseActive: boolean,
  intensity: number
) {
  // Apply movement
  point.x += point.vx;
  point.y += point.vy;
  point.z += point.vz;
  
  // Keep points within sphere boundaries
  const distance = Math.sqrt(point.x**2 + point.y**2 + point.z**2);
  if (distance > sphereRadius) {
    point.x = (point.x / distance) * sphereRadius;
    point.y = (point.y / distance) * sphereRadius;
    point.z = (point.z / distance) * sphereRadius;
    
    // Reverse velocity with less dampening for more responsiveness
    point.vx *= -0.8;
    point.vy *= -0.8;
    point.vz *= -0.8;
  }
  
  // Enhanced mouse interaction - increased force and radius of influence
  if (isMouseActive) {
    const dx = mousePos.x - point.x;
    const dy = mousePos.y - point.y;
    const dist = Math.sqrt(dx*dx + dy*dy);
    
    // Stronger force and wider influence radius
    if (dist < sphereRadius * 4) {
      // Increased force factor for more responsive movement
      const force = 0.8 * intensity * (1 - dist / (sphereRadius * 4));
      point.vx += (dx / dist) * force;
      point.vy += (dy / dist) * force;
    }
  } else {
    // Apply gentler gravity toward center when mouse is inactive
    point.vx += -point.x * 0.0005;
    point.vy += -point.y * 0.0005;
    point.vz += -point.z * 0.0005;
  }
  
  // Less friction for smoother, more responsive movement
  point.vx *= 0.99;
  point.vy *= 0.99;
  point.vz *= 0.99;
}

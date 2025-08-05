'use client';

import { useEffect, useRef } from 'react';

interface MatrixBackgroundProps {
  className?: string;
}

export default function MatrixBackground({ className = '' }: MatrixBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to cover full viewport (entire page)
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters - including Japanese katakana and Latin characters
    const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
    const fontSize = 20;
    const columns = Math.floor(canvas.width / fontSize);

    // Array to store the y position of each column
    const drops: number[] = [];
    // Array to track when each column should start (gradual activation)
    const columnStartDelay: number[] = [];
    
    for (let i = 0; i < columns; i++) {
      drops[i] = -999; // Start inactive (far above visible area)
      columnStartDelay[i] = Math.random() * 100; // Random delay for each column (0-100 frames)
    }
    
    let frameCount = 0;

    const draw = () => {
      frameCount++;
      
      // Transparent background with even higher opacity for very fast trailing fade
      ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'source-over';

      ctx.fillStyle = '#0F4';
      ctx.font = `${fontSize}px monospace`;

      // Loop through drops
      for (let i = 0; i < drops.length; i++) {
        // Check if this column should start yet
        if (frameCount >= columnStartDelay[i] && drops[i] === -999) {
          drops[i] = 0; // Activate this column
        }
        
        // Skip inactive columns
        if (drops[i] === -999) continue;
        
        // Random character
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        
        // Draw the character
        ctx.fillText(text, i * fontSize, (drops[i] + 1) * fontSize);

        // Reset drop randomly or when it reaches bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Move drop down
        drops[i]++;
      }
    };

    // Start animation
    const interval = setInterval(draw, 70);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ zIndex: -1 }}
    />
  );
}

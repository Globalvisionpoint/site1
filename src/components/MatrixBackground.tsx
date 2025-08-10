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

    let isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const prefersReducedMotion =
      typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Dacă utilizatorul preferă mișcare redusă, nu rulăm animația
    if (prefersReducedMotion) {
      const resizeCanvas = () => {
        const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
        const width = window.innerWidth;
        const height = window.innerHeight;
        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        // Un mic gradient static, foarte subtil
        const grd = ctx.createLinearGradient(0, 0, width, height);
        grd.addColorStop(0, 'rgba(37, 211, 102, 0.04)');
        grd.addColorStop(1, 'rgba(99, 102, 241, 0.04)');
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, width, height);
      };
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);
      return () => {
        window.removeEventListener('resize', resizeCanvas);
      };
    }

    // Set canvas size to cover full viewport with DPR scaling
    const resizeCanvas = () => {
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      const width = window.innerWidth;
      const height = window.innerHeight;
      isMobile = window.innerWidth < 768;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Reinițializăm coloanele și drop-urile la resize
      initMatrix();
    };

    // Matrix characters
    const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
    let fontSize = 20;
    let columns = 0;
    let drops: number[] = [];
    let columnStartDelay: number[] = [];

    const initMatrix = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      // Pe ecrane foarte late, păstrăm densitatea sub control prin creșterea fontului
      const base = Math.min(width, 1920);
      fontSize = width < 480 ? 16 : (base < 1024 ? 18 : 20);
      columns = Math.max(10, Math.floor(width / fontSize));
      drops = new Array(columns).fill(-999);
      columnStartDelay = new Array(columns).fill(0).map(() => Math.random() * 80);
      // Curățăm canvas
      ctx.clearRect(0, 0, width, height);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let frameCount = 0;
    let rafId = 0;
    let running = true;
    let lastTime = 0;

    const onVisibilityChange = () => {
      running = !document.hidden;
      if (running) rafId = requestAnimationFrame(draw);
    };

    document.addEventListener('visibilitychange', onVisibilityChange);

    const draw = () => {
      if (!running) return;

      const now = performance.now();
      const interval = 1000 / 24; // ~24 FPS uniform pe toate dispozitivele
      if (now - lastTime < interval) {
        rafId = requestAnimationFrame(draw);
        return;
      }
      lastTime = now;

      frameCount++;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      // Fade out mai rapid pentru a reduce ghosting-ul și costul
      ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'source-over';

      ctx.fillStyle = '#0F4';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        if (frameCount >= columnStartDelay[i] && drops[i] === -999) {
          drops[i] = 0;
        }
        if (drops[i] === -999) continue;

        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        ctx.fillText(text, i * fontSize, (drops[i] + 1) * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      // Rulăm la ~60fps nativ; rAF asigură pacing adecvat
      rafId = requestAnimationFrame(draw);
    };

    rafId = requestAnimationFrame(draw);

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('visibilitychange', onVisibilityChange);
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

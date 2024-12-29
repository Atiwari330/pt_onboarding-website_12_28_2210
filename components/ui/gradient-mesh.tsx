"use client";

import { useEffect, useRef } from 'react';

export const GradientMesh = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const drawMesh = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, 'rgba(15, 118, 110, 0.1)');
      gradient.addColorStop(1, 'rgba(30, 64, 175, 0.05)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    };

    // Set canvas size
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      drawMesh();
    };

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-50"
      style={{ mixBlendMode: 'multiply' }}
    />
  );
};
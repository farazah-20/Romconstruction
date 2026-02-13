import React, { useEffect, useRef } from 'react';

const ParticlesBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: Particle[] = [];
        let animationFrameId: number;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                // Movement restricted to mostly horizontal or vertical for "structure" feel
                if (Math.random() > 0.5) {
                    this.vx = (Math.random() - 0.5) * 0.4;
                    this.vy = 0;
                } else {
                    this.vx = 0;
                    this.vy = (Math.random() - 0.5) * 0.4;
                }
                this.size = Math.random() * 4 + 2; // Larger Squares (2-6px)
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0) this.x = canvas!.width;
                if (this.x > canvas!.width) this.x = 0;
                if (this.y < 0) this.y = canvas!.height;
                if (this.y > canvas!.height) this.y = 0;
            }

            draw() {
                if (!ctx) return;
                // Baustellen-Orange squares - High visibility
                ctx.fillStyle = 'rgba(244, 123, 32, 0.8)';
                ctx.fillRect(this.x, this.y, this.size, this.size);
            }
        }

        const init = () => {
            particles = [];
            const particleCount = Math.min(window.innerWidth / 15, 80); // More particles
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle, index) => {
                particle.update();
                particle.draw();

                // Draw Orthogonal Connections (Blueprint/Girder look)
                for (let j = index + 1; j < particles.length; j++) {
                    const dx = particle.x - particles[j].x;
                    const dy = particle.y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        // High visibility lines
                        ctx.strokeStyle = `rgba(244, 123, 32, ${0.6 - distance / 800})`;
                        ctx.lineWidth = 1.5;

                        // Orthogonal line (L-shape)
                        ctx.moveTo(particle.x + particle.size / 2, particle.y + particle.size / 2);
                        ctx.lineTo(particles[j].x + particles[j].size / 2, particle.y + particle.size / 2);
                        ctx.lineTo(particles[j].x + particles[j].size / 2, particles[j].y + particles[j].size / 2);

                        ctx.stroke();
                    }
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none"
        />
    );
};

export default ParticlesBackground;

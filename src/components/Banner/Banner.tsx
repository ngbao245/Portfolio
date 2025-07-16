import { useEffect, useRef } from "react";
import "./Banner.css";

const Banner = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  let resizeTimeout: number;

  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = heroRef.current;
    if (!canvas || !hero) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const arrayColors = ["#eee", "#545454", "#596d91", "#bb5a68", "#696541"];

    let width = hero.offsetWidth;
    let height = hero.offsetHeight;

    canvas.width = width;
    canvas.height = height;

    let dots: {
      x: number;
      y: number;
      size: number;
      color: string;
    }[] = [];

    const generateDots = () => {
      dots = [];
      for (let i = 0; i < 50; i++) {
        dots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 5,
          color: arrayColors[Math.floor(Math.random() * arrayColors.length)],
        });
      }
    };

    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((dot) => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const mouse = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };

      drawDots();

      dots.forEach((dot) => {
        const distance = Math.hypot(mouse.x - dot.x, mouse.y - dot.y);
        if (distance < 300) {
          ctx.strokeStyle = dot.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });
    };

    const handleMouseOut = () => {
      drawDots();
    };

    let resizeTimeout: number;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const newWidth = hero.offsetWidth;
        const newHeight = hero.offsetHeight;

        if (newWidth === width && newHeight === height) return;

        width = newWidth;
        height = newHeight;

        canvas.width = width;
        canvas.height = height;

        generateDots();
        drawDots();
      }, 200);
    };

    generateDots();
    drawDots();

    hero.addEventListener("mousemove", handleMouseMove);
    hero.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("resize", handleResize);

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      hero.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <canvas ref={canvasRef} id="dotsCanvas"></canvas>
      <div className="hero-content">
        <p className="hero-intro">Hi, I'm</p>
        <h1 className="hero-name">Nguyen Hoang Bao</h1>
        <h2 className="hero-role">Fullstack Developer</h2>
        <p className="hero-description">
          I build fast, responsive, and scalable web applications with modern
          tech stacks.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">View Projects</button>
          <button className="btn-outline">Contact Me</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;

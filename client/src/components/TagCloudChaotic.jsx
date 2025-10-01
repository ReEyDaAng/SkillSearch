import { useEffect, useRef } from "react";

const SKILLS = [
  "React",
  "Node.js",
  "TypeScript",
  "JavaScript",
  "CSS",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "MySQL",
  "Next.js",
  "Nest.js",
  "Python",
  "GraphQL",
  "Figma",
  "SCSS",
  "React Native",
  "Java",
  "Spring Boot",
  "PHP",
  "Laravel",
  "C",
  "C++",
  "C#",
];

export default function TagCloudChaotic() {
  const ref = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const box = ref.current;
    if (!box) return;

    const items = itemsRef.current;
    const rect = () => box.getBoundingClientRect();

    const SPEED = 0.1;
    const PADDING = 8;

    const ellipse = () => {
      const { width, height } = rect();
      const cx = width / 2;
      const cy = height / 2;
      const rx = width / 2 - PADDING;
      const ry = height / 2 - PADDING;
      return { cx, cy, rx, ry };
    };

    // initial random positions & velocities
    const state = items.map((el) => ({
      el,
      x: Math.random() * (rect().width - el.offsetWidth),
      y: Math.random() * (rect().height - el.offsetHeight),
      vx: (Math.random() * 2 - 1) * SPEED,
      vy: (Math.random() * 2 - 1) * SPEED,
    }));

    let raf;
    const tick = () => {
      const { width, height } = rect();
      const { cx, cy, rx, ry } = ellipse();

      state.forEach((s) => {
        s.x += s.vx;
        s.y += s.vy;

        const ex = s.x + s.el.offsetWidth / 2;
        const ey = s.y + s.el.offsetHeight / 2;

        const dx = (ex - cx) / rx;
        const dy = (ey - cy) / ry;

        if (dx * dx + dy * dy > 1) {
          s.vx *= -1;
          s.vy *= -1;

          s.x += s.vx * 2;
          s.y += s.vy * 2;
        }

        s.x = Math.max(0, Math.min(width - s.el.offsetWidth, s.x));
        s.y = Math.max(0, Math.min(height - s.el.offsetHeight, s.y));

        s.el.style.transform = `translate(${s.x}px, ${s.y}px)`;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={ref} className="relative h-64 overflow-hidden rounded-full">
      {SKILLS.map((s, i) => (
        <span
          key={s}
          ref={(el) => (itemsRef.current[i] = el)}
          className="absolute chip select-none will-change-transform"
          style={{ transform: "translate(0px, 0px)" }}
        >
          {s}
        </span>
      ))}
    </div>
  );
}

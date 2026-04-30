import { useState, useEffect, useRef } from "react";
import { STATS } from "../../data/tripDetails";

export default function StatsSection() {
  const [counts, setCounts] = useState(STATS.map(() => 0));
  const sectionRef = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated.current) {
          animated.current = true;
          STATS.forEach((s, i) => {
            const duration = 1800;
            const step = s.num / (duration / 16);
            let cur = 0;
            const timer = setInterval(() => {
              cur = Math.min(cur + step, s.num);
              setCounts((prev) => {
                const next = [...prev];
                next[i] = Math.floor(cur);
                return next;
              });
              if (cur >= s.num) clearInterval(timer);
            }, 16);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="container stats-grid">
        {STATS.map((s, i) => (
          <div className="stat-item" key={i}>
            <span className="stat-num">{counts[i]}</span>
            <span className="stat-plus">{s.plus}</span>
            <p>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

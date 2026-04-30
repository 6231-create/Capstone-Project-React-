import { useState, useEffect, useRef, useCallback } from "react";
import SLIDES from "../../data/slides";

export default function HeroSlider({ setPage }) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(
      () => setCurrent((c) => (c + 1) % SLIDES.length),
      5000
    );
  }, []);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  const change = (dir) => {
    setCurrent((c) => (c + dir + SLIDES.length) % SLIDES.length);
    startTimer();
  };

  const goTo = (i) => {
    setCurrent(i);
    startTimer();
  };

  return (
    <section className="hero-slider" id="home">
      <div className="slides-wrapper">
        {SLIDES.map((s, i) => (
          <div
            key={i}
            className={`slide${i === current ? " active" : ""}`}
            style={{ backgroundImage: `url('${s.img}')` }}
          >
            <div className="slide-overlay"></div>
            <div className="slide-content">
              <span className="slide-location">
                <i className="fa fa-map-marker-alt"></i> {s.location},{" "}
                <em>{s.country}</em>
              </span>
              <h1>
                {s.h1a}
                <br />
                {s.h1b} <em>{s.h1em}</em>
              </h1>
              <button
                className="btn-primary"
                onClick={() => {
                  setPage("destinations");
                  window.scrollTo({ top: 0 });
                }}
              >
                Explore Destinations
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        className="slider-prev"
        onClick={() => change(-1)}
        aria-label="Previous slide"
      >
        <i className="fa fa-chevron-left"></i>
      </button>
      <button
        className="slider-next"
        onClick={() => change(1)}
        aria-label="Next slide"
      >
        <i className="fa fa-chevron-right"></i>
      </button>

      <div className="slider-dots">
        {SLIDES.map((_, i) => (
          <span
            key={i}
            className={`dot${i === current ? " active" : ""}`}
            onClick={() => goTo(i)}
          ></span>
        ))}
      </div>
    </section>
  );
}

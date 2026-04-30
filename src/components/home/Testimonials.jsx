import TESTIMONIALS from "../../data/testimonials";

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">| Testimonials</span>
          <h2>What Our <strong>Travellers</strong> Say</h2>
        </div>

        <div className="test-grid">
          {TESTIMONIALS.map((t, i) => (
            <div className="test-card" key={i}>
              <div className="stars">
                {[...Array(Math.floor(t.stars))].map((_, j) => (
                  <i key={j} className="fa fa-star"></i>
                ))}
                {t.stars % 1 !== 0 && <i className="fa fa-star-half-alt"></i>}
              </div>
              <p>"{t.text}"</p>
              <div className="test-author">
                <img src={t.img} alt={t.name} loading="lazy" />
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.loc}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

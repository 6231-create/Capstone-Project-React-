import { useState } from "react";
import DEALS from "../../data/deals";

export default function BestDeals({ setPage }) {
  const [activeDeal, setActiveDeal] = useState(0);

  return (
    <section className="deals-section" id="book">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">| Best Deal</span>
          <h2>Find Your <strong>Best Trip</strong> Right Now!</h2>
        </div>

        {/* Tabs */}
        <div className="deal-tabs">
          {DEALS.map((d, i) => (
            <button
              key={i}
              className={`deal-tab${activeDeal === i ? " active" : ""}`}
              onClick={() => setActiveDeal(i)}
            >
              {d.label}
            </button>
          ))}
        </div>

        {/* Panels */}
        {DEALS.map((d, i) => (
          <div key={i} className={`deal-panel${activeDeal === i ? " active" : ""}`}>
            <div className="deal-grid">
              <div className="deal-specs">
                <ul>
                  {d.specs.map(([k, v]) => (
                    <li key={k}>
                      <span>{k}</span>
                      <strong>{v}</strong>
                    </li>
                  ))}
                </ul>
                <div className="deal-price">
                  From <strong>{d.price}</strong> <span>per person</span>
                </div>
                <button
                  className="btn-primary"
                  onClick={() => { setPage("trip-details"); window.scrollTo({ top: 0 }); }}
                >
                  Book This Trip
                </button>
              </div>

              <div className="deal-image">
                <img src={d.img} alt={d.title} loading="lazy" />
                <div className="deal-info-box">
                  <h4>{d.title}</h4>
                  <p>{d.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

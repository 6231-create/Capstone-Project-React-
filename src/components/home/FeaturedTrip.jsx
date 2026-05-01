export default function FeaturedTrip({ setPage }) {
  return (
    <section className="featured-section">
      <div className="container featured-grid">
        <div className="featured-image">
          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80"
            alt="Featured Trip – Bali"
          />
          <div className="featured-badge">
            <i className="fas fa-star"></i> Featured
          </div>
        </div>

        <div className="featured-content">
          <span className="section-tag">| Featured Trip</span>
          <h2>Best <strong>All-Inclusive</strong> Bali Experience</h2>
          <p className="feat-price">
            From <strong>$1,299</strong> per person · 10 Days
          </p>
          <p>
            Immerse yourself in Bali's rich culture, emerald rice terraces, sacred temples, and
            pristine beaches. This all-inclusive package covers accommodation, guided tours, meals,
            and transfers — everything handled for you.
          </p>
          <ul className="feat-list">
            <li><i className="fas fa-circle-check"></i> 10 nights at a 5-star resort</li>
            <li><i className="fas fa-circle-check"></i> All meals and activities included</li>
            <li><i className="fas fa-circle-check"></i> Private airport transfers</li>
            <li><i className="fas fa-circle-check"></i> Expert local guides every day</li>
          </ul>
          <button
            className="btn-primary"
            onClick={() => { setPage("trip-details"); window.scrollTo({ top: 0 }); }}
          >
            View Full Itinerary
          </button>
        </div>
      </div>
    </section>
  );
}

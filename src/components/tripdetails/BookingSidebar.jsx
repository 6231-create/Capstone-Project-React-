import { useState } from "react";
import { useTravelPlans } from "../../context/TravelPlansContext";

export default function BookingSidebar({ setPage }) {
  const { savedPlans, savePlan, deletePlan } = useTravelPlans();

  const [booking, setBooking] = useState({
    date: "",
    travellers: "2 People — $2,450",
    package: "Standard (Breakfast)",
  });
  const [errors, setErrors] = useState({});
  const [bookingOk, setBookingOk] = useState(false);
  const [lastSaved, setLastSaved] = useState(null);

  const PRICE_MAP = {
    "1 Person — $1,299":     1299,
    "2 People — $2,450":     2450,
    "3-4 People — $3,600":   3600,
    "5+ People — Group Rate": null,
  };

  const currentPrice = PRICE_MAP[booking.travellers];

  const setField = (key) => (e) => {
    setBooking((v) => ({ ...v, [key]: e.target.value }));
    setErrors({});
    setBookingOk(false);
    setLastSaved(null);
  };

  const validate = () => {
    const e = {};
    if (!booking.date) {
      e.date = "Please select a departure date.";
    } else if (new Date(booking.date) < new Date()) {
      e.date = "Departure date must be in the future.";
    }
    return e;
  };

  const handleBook = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      const plan = savePlan({
        name: "Bali, Indonesia",
        date: booking.date,
        travellers: booking.travellers,
        package: booking.package,
        price: currentPrice ? "$" + currentPrice.toLocaleString() : "Group Rate",
      });
      setBookingOk(true);
      setLastSaved(plan.id);
    }
  };

  return (
    <>
      <div className="sidebar-widget booking-widget">
        <div className="booking-price">
          <span>From</span>
          <strong>$1,299</strong>
          <span>per person</span>
        </div>
        <div className="booking-rating">
          {[...Array(5)].map((_, i) => (<i key={i} className="fas fa-star"></i>))}
          <span>4.9 (284 reviews)</span>
        </div>

        <form className="booking-form" onSubmit={handleBook} noValidate>
          <label>Departure Date</label>
          <input
            type="date"
            value={booking.date}
            onChange={setField("date")}
            style={{ borderColor: errors.date ? "var(--red)" : "" }}
          />
          {errors.date && (
            <span style={{ color: "var(--red)", fontSize: "0.72rem" }}>{errors.date}</span>
          )}

          <label>Number of Travellers</label>
          <select value={booking.travellers} onChange={setField("travellers")}>
            <option>1 Person — $1,299</option>
            <option>2 People — $2,450</option>
            <option>3-4 People — $3,600</option>
            <option>5+ People — Group Rate</option>
          </select>

          <label>Trip Package</label>
          <select value={booking.package} onChange={setField("package")}>
            <option>Standard (Breakfast)</option>
            <option>Premium (All Inclusive)</option>
            <option>Luxury (Private Villa)</option>
          </select>

          <div className="booking-total">
            <span>Estimated Total:</span>
            <strong>{currentPrice ? "$" + currentPrice.toLocaleString() : "Contact Us"}</strong>
          </div>

          <button type="submit" className="btn-primary full-width">
            Book This Trip <i className="fas fa-arrow-right"></i>
          </button>

          {bookingOk && (
            <div className="form-success-msg" style={{ marginTop: 10 }}>
              <i className="fas fa-circle-check"></i> Booking saved! See your plans below.
            </div>
          )}

          <button
            type="button"
            className="btn-outline full-width"
            style={{ display: "block", textAlign: "center", marginTop: 10 }}
            onClick={() => { setPage("contact"); window.scrollTo({ top: 0 }); }}
          >
            Ask a Question
          </button>
        </form>
      </div>

      {savedPlans.length > 0 && (
        <div className="sidebar-widget saved-plans-section">
          <h5>
            <i className="fas fa-bookmark"></i> Your Saved Plans
            <span style={{ marginLeft: "auto", background: "var(--gold)", color: "var(--dark)", borderRadius: "2px", padding: "2px 8px", fontSize: "0.7rem" }}>
              {savedPlans.length}
            </span>
          </h5>

          {savedPlans.map((plan) => (
            <div className="saved-plan-card" key={plan.id}>
              <button className="plan-delete" onClick={() => deletePlan(plan.id)} title="Remove plan">
                <i className="fas fa-xmark"></i>
              </button>
              <div className="plan-name">
                <i className="fas fa-location-dot" style={{ color: "var(--gold)", marginRight: 6 }}></i>
                {plan.name}
              </div>
              <div className="plan-meta">
                <span><i className="fas fa-calendar"></i> {plan.date}</span>
                <span><i className="fas fa-users"></i> {plan.travellers.split("\u2014")[0].trim()}</span>
                <span><i className="fas fa-tag"></i> {plan.package}</span>
                <span><i className="fas fa-dollar-sign"></i> {plan.price}</span>
              </div>
              {plan.id === lastSaved && (
                <div className="saved-plan-badge">
                  <i className="fas fa-circle-check"></i> Just saved
                </div>
              )}
              <div style={{ fontSize: "0.68rem", color: "var(--text-sub)", marginTop: 6 }}>
                Saved: {plan.savedAt}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="sidebar-widget">
        <h5><i className="fas fa-map-location-dot"></i> Destination Map</h5>
        <div className="map-embed">
          <iframe
            src="https://maps.google.com/maps?q=Bali,Indonesia&z=9&output=embed"
            width="100%"
            height="240"
            style={{ border: 0, borderRadius: 8 }}
            loading="lazy"
            title="Bali Map"
          ></iframe>
        </div>
      </div>

      <div className="sidebar-widget">
        <h5><i className="fas fa-circle-info"></i> Trip Facts</h5>
        <ul className="facts-list">
          {[
            ["fa-thermometer-half","Climate","Tropical, 28°C avg"],
            ["fa-clock","Duration","10 Days"],
            ["fa-plane-departure","Departs","Every Saturday"],
            ["fa-users","Group Size","Max 12"],
            ["fa-running","Activity","Moderate"],
            ["fa-language","Language","English Guide"],
            ["fa-id-card","Visa","On Arrival (30 days)"],
          ].map(([ic, k, v]) => (
            <li key={k}>
              <i className={"fa " + ic}></i>
              <span>{k}</span>
              <strong>{v}</strong>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-widget">
        <h5>Share This Trip</h5>
        <div className="share-btns">
          <a href="#" className="share-btn fb"><i className="fab fa-facebook-f"></i> Facebook</a>
          <a href="#" className="share-btn tw"><i className="fab fa-twitter"></i> Twitter</a>
          <a href="#" className="share-btn wa"><i className="fab fa-whatsapp"></i> WhatsApp</a>
        </div>
      </div>
    </>
  );
}

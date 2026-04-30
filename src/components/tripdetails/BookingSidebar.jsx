import { useState } from "react";

export default function BookingSidebar({ setPage }) {
  const [booking, setBooking] = useState({
    date: "",
    travellers: "2 People — $2,450",
    package: "Standard (Breakfast)",
  });
  const [errors, setErrors] = useState({});
  const [bookingOk, setBookingOk] = useState(false);

  const setField = (key) => (e) => {
    setBooking((v) => ({ ...v, [key]: e.target.value }));
    setErrors({});
    setBookingOk(false);
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
    if (Object.keys(e).length === 0) setBookingOk(true);
  };

  return (
    <>
      {/* Booking Widget */}
      <div className="sidebar-widget booking-widget">
        <div className="booking-price">
          <span>From</span>
          <strong>$1,299</strong>
          <span>per person</span>
        </div>
        <div className="booking-rating">
          {[...Array(5)].map((_, i) => (
            <i key={i} className="fa fa-star"></i>
          ))}
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
            <strong>$2,450</strong>
          </div>

          <button type="submit" className="btn-primary full-width">
            Book This Trip <i className="fa fa-arrow-right"></i>
          </button>

          {bookingOk && (
            <div className="form-success-msg" style={{ marginTop: 10 }}>
              <i className="fa fa-check-circle"></i> Booking request sent! We'll confirm within 24h.
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

      {/* Map Widget */}
      <div className="sidebar-widget">
        <h5><i className="fa fa-map-marked-alt"></i> Destination Map</h5>
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

      {/* Trip Facts Widget */}
      <div className="sidebar-widget">
        <h5><i className="fa fa-info-circle"></i> Trip Facts</h5>
        <ul className="facts-list">
          {[
            ["fa-thermometer-half", "Climate",    "Tropical, 28°C avg"],
            ["fa-clock",            "Duration",   "10 Days"],
            ["fa-plane-departure",  "Departs",    "Every Saturday"],
            ["fa-users",            "Group Size", "Max 12"],
            ["fa-running",          "Activity",   "Moderate"],
            ["fa-language",         "Language",   "English Guide"],
            ["fa-id-card",          "Visa",       "On Arrival (30 days)"],
          ].map(([ic, k, v]) => (
            <li key={k}>
              <i className={`fa ${ic}`}></i>
              <span>{k}</span>
              <strong>{v}</strong>
            </li>
          ))}
        </ul>
      </div>

      {/* Share Widget */}
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

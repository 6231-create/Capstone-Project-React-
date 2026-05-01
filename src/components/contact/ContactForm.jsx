import { useState } from "react";
import { useTravelPlans } from "../../context/TravelPlansContext";

const ENQUIRY_TYPES = [
  "Beach Package", "Adventure Trek", "Cultural Tour",
  "Honeymoon", "Group Travel", "Custom Itinerary", "Budget Planning", "Other",
];

export default function ContactForm() {
  const { savedPlans, savePlan, deletePlan } = useTravelPlans();

  const [form, setForm] = useState({
    name: "", email: "", phone: "", type: "",
    destination: "", dates: "", subject: "", message: "",
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [lastSaved, setLastSaved] = useState(null);

  const setField = (key) => (e) => {
    setForm((v) => ({ ...v, [key]: e.target.value }));
    setErrors((v) => ({ ...v, [key]: "" }));
    setSent(false);
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim())
      e.name = "Full name is required.";
    if (!form.email.trim())
      e.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email address.";
    if (form.phone && !/^[\d\s+\-()]{7,20}$/.test(form.phone))
      e.phone = "Please enter a valid phone number.";
    if (!form.message.trim())
      e.message = "Message is required.";
    else if (form.message.trim().length < 20)
      e.message = "Message must be at least 20 characters.";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      const plan = savePlan({
        name: form.destination ? form.destination : "Custom Enquiry",
        date: form.dates || "Flexible",
        travellers: "—",
        package: form.type || "Custom Itinerary",
        price: "TBD",
        contactName: form.name,
        contactEmail: form.email,
      });
      setSent(true);
      setLastSaved(plan.id);
      setForm({ name: "", email: "", phone: "", type: "", destination: "", dates: "", subject: "", message: "" });
    }
  };

  const field = (key, label, required, type = "text", placeholder = "") => (
    <div className="form-group">
      <label>{label}{required && " *"}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={form[key]}
        onChange={setField(key)}
        style={{ borderColor: errors[key] ? "var(--red)" : "" }}
      />
      {errors[key] && (
        <span style={{ color: "var(--red)", fontSize: "0.72rem" }}>{errors[key]}</span>
      )}
    </div>
  );

  return (
    <div className="contact-form-wrap">
      <span className="section-tag">| Get In Touch</span>
      <h2>Talk to Our <strong>Travel Experts</strong></h2>
      <p>
        Have a trip in mind? Want a custom itinerary? Our team of experienced travel planners
        is ready to help you craft the perfect journey.
      </p>

      <form className="contact-form big" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          {field("name",  "Full Name",      true,  "text",  "John Smith")}
          {field("email", "Email Address",  true,  "email", "john@example.com")}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={form.phone}
              onChange={setField("phone")}
              style={{ borderColor: errors.phone ? "var(--red)" : "" }}
            />
            {errors.phone && (
              <span style={{ color: "var(--red)", fontSize: "0.72rem" }}>{errors.phone}</span>
            )}
          </div>
          <div className="form-group">
            <label>Enquiry Type</label>
            <select value={form.type} onChange={setField("type")}>
              <option value="">Select enquiry type</option>
              {ENQUIRY_TYPES.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
        </div>

        <div className="form-row">
          {field("destination", "Preferred Destination", false, "text", "e.g. Bali, Japan, Morocco...")}
          {field("dates",       "Travel Dates",          false, "text", "e.g. June 2025, flexible...")}
        </div>

        {field("subject", "Subject", false, "text", "Trip enquiry subject")}

        <div className="form-group">
          <label>Your Message *</label>
          <textarea
            rows="6"
            placeholder="Tell us about your dream trip — destinations, budget, group size, special requirements..."
            value={form.message}
            onChange={setField("message")}
            style={{ borderColor: errors.message ? "var(--red)" : "" }}
          ></textarea>
          {errors.message && (
            <span style={{ color: "var(--red)", fontSize: "0.72rem" }}>{errors.message}</span>
          )}
        </div>

        <button type="submit" className="btn-primary">
          Send Message <i className="fas fa-paper-plane"></i>
        </button>

        {sent && (
          <div className="form-success-msg">
            <i className="fas fa-circle-check"></i> Thank you! Your travel plan has been saved and we'll be in touch within 24 hours.
          </div>
        )}
      </form>

      {/* Saved Plans Display */}
      {savedPlans.length > 0 && (
        <div className="saved-plans-section" style={{ marginTop: 32 }}>
          <h5 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "var(--text)", marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}>
            <i className="fas fa-bookmark" style={{ color: "var(--gold)" }}></i>
            Your Saved Travel Plans
            <span style={{ background: "var(--gold)", color: "var(--dark)", borderRadius: "2px", padding: "2px 8px", fontSize: "0.75rem", fontFamily: "Raleway, sans-serif" }}>
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
                {plan.contactName && <span><i className="fas fa-user"></i> {plan.contactName}</span>}
                {plan.date && plan.date !== "—" && <span><i className="fas fa-calendar"></i> {plan.date}</span>}
                {plan.package && <span><i className="fas fa-tag"></i> {plan.package}</span>}
                {plan.price && plan.price !== "TBD" && <span><i className="fas fa-dollar-sign"></i> {plan.price}</span>}
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
    </div>
  );
}

import { useState } from "react";

export default function HomeContactSection() {
  const [form, setForm] = useState({
    name: "", email: "", subject: "", type: "", message: "",
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const setField = (key) => (e) => {
    setForm((v) => ({ ...v, [key]: e.target.value }));
    setErrors((v) => ({ ...v, [key]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = "Name is required.";
    if (!form.email.trim())   e.email   = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                              e.email   = "Enter a valid email address.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSent(true);
      setForm({ name: "", email: "", subject: "", type: "", message: "" });
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container contact-grid">
        {/* Info */}
        <div className="contact-info">
          <span className="section-tag">| Contact Us</span>
          <h2>Get In Touch With <strong>Our Travel Experts</strong></h2>

          <div className="contact-item">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=60&h=60&fit=crop&q=80"
              alt="Phone"
            />
            <div>
              <strong>+1 (305) 820-0340</strong>
              <span>Mon–Fri, 9am–6pm EST</span>
            </div>
          </div>

          <div className="contact-item">
            <img
              src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=60&h=60&fit=crop&q=80"
              alt="Email"
            />
            <div>
              <strong>hello@journeydesk.com</strong>
              <span>We reply within 24 hours</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={setField("name")}
                style={{ borderColor: errors.name ? "var(--red)" : "" }}
              />
              {errors.name && (
                <span style={{ color: "var(--red)", fontSize: "0.72rem" }}>{errors.name}</span>
              )}
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={setField("email")}
                style={{ borderColor: errors.email ? "var(--red)" : "" }}
              />
              {errors.email && (
                <span style={{ color: "var(--red)", fontSize: "0.72rem" }}>{errors.email}</span>
              )}
            </div>
          </div>

          <input
            type="text"
            placeholder="Subject"
            value={form.subject}
            onChange={setField("subject")}
          />

          <select value={form.type} onChange={setField("type")}>
            <option value="">Trip Enquiry Type</option>
            <option>Beach Package</option>
            <option>Adventure Trek</option>
            <option>Cultural Tour</option>
            <option>Custom Itinerary</option>
          </select>

          <div>
            <textarea
              rows="5"
              placeholder="Tell us about your dream trip..."
              value={form.message}
              onChange={setField("message")}
              style={{ borderColor: errors.message ? "var(--red)" : "" }}
            ></textarea>
            {errors.message && (
              <span style={{ color: "var(--red)", fontSize: "0.72rem" }}>{errors.message}</span>
            )}
          </div>

          <button type="submit" className="btn-primary">
            Send Message <i className="fa fa-paper-plane"></i>
          </button>

          {sent && (
            <div className="form-success-msg">
              <i className="fa fa-check-circle"></i> Thank you! We'll be in touch within 24 hours.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

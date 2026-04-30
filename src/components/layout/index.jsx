import { useState, useEffect } from "react";
import ThemeToggle from "../common/ThemeToggle";

export function SubHeader() {
  return (
    <div className="sub-header">
      <div className="container">
        <div className="sub-header-left">
          <span><i className="fa fa-envelope"></i> hello@journeydesk.com</span>
          <span><i className="fa fa-map-marker-alt"></i> 42 Explorer Street, Miami, FL 33101</span>
        </div>
        <div className="sub-header-right">
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="#" aria-label="Pinterest"><i className="fab fa-pinterest-p"></i></a>
        </div>
      </div>
    </div>
  );
}

export function Navbar({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = (p) => {
    setPage(p);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const NAV_LINKS = [
    ["home", "Home"],
    ["destinations", "Destinations"],
    ["trip-details", "Trip Details"],
    ["contact", "Contact Us"],
  ];

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`} id="navbar">
      <div className="container nav-container">
        <button
          className="logo"
          onClick={() => nav("home")}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
        >
          Journey<span>Desk</span>
        </button>

        <div className={`nav-links${menuOpen ? " open" : ""}`} id="nav-links">
          {NAV_LINKS.map(([p, label]) => (
            <button
              key={p}
              onClick={() => nav(p)}
              className={page === p ? "active" : ""}
              style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}
            >
              {label}
            </button>
          ))}
        </div>

        <button className="btn-nav" onClick={() => nav("trip-details")}>
          Book a Trip
        </button>

        <ThemeToggle />

        <button className="hamburger" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
          <i className={`fa ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>
    </nav>
  );
}

export function Footer({ setPage }) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subOk, setSubOk] = useState(false);

  const nav = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletter = () => {
    if (!email.trim()) {
      setEmailError("Please enter your email.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmailError("");
    setSubOk(true);
    setEmail("");
    setTimeout(() => setSubOk(false), 3000);
  };

  const QUICK_LINKS = [
    ["home", "Home"],
    ["destinations", "Destinations"],
    ["trip-details", "Trip Details"],
    ["contact", "Contact Us"],
  ];

  const TRIP_TYPES = [
    "Beach Getaways",
    "Adventure Treks",
    "Cultural Tours",
    "Honeymoon Packages",
    "Group Travel",
  ];

  const SOCIAL_ICONS = ["fa-facebook-f", "fa-instagram", "fa-twitter", "fa-youtube"];

  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Brand */}
        <div className="footer-col">
          <div className="footer-logo">Journey<span>Desk</span></div>
          <p>
            Your trusted travel planning partner since 2012. We craft unforgettable journeys for
            curious souls across 180+ destinations worldwide.
          </p>
          <div className="footer-social">
            {SOCIAL_ICONS.map((ic) => (
              <a key={ic} href="#" aria-label={ic}>
                <i className={`fab ${ic}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h5>Quick Links</h5>
          <ul>
            {QUICK_LINKS.map(([p, l]) => (
              <li key={p}>
                <button
                  onClick={() => nav(p)}
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    color: "inherit", fontFamily: "inherit", fontSize: "0.84rem", padding: 0,
                  }}
                >
                  {l}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Trip Types */}
        <div className="footer-col">
          <h5>Trip Types</h5>
          <ul>
            {TRIP_TYPES.map((t) => (
              <li key={t}><a href="#">{t}</a></li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-col">
          <h5>Newsletter</h5>
          <p>Get exclusive deals and travel inspiration delivered to your inbox.</p>
          <div className="newsletter">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setEmailError(""); }}
              onKeyDown={(e) => e.key === "Enter" && handleNewsletter()}
            />
            <button onClick={handleNewsletter} aria-label="Subscribe">
              {subOk
                ? <i className="fa fa-check"></i>
                : <i className="fa fa-arrow-right"></i>}
            </button>
          </div>
          {emailError && (
            <p style={{ color: "var(--red)", fontSize: "0.78rem", marginTop: 4 }}>{emailError}</p>
          )}
          {subOk && (
            <p style={{ color: "var(--green)", fontSize: "0.78rem", marginTop: 4 }}>
              ✓ Subscribed! Thank you.
            </p>
          )}
          <div className="footer-badges">
            <span><i className="fa fa-shield-alt"></i> Secure Booking</span>
            <span><i className="fa fa-award"></i> Best Price</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>
            Copyright &copy; 2025 JourneyDesk. All rights reserved. Designed with{" "}
            <i className="fa fa-heart"></i> for travellers.
          </p>
        </div>
      </div>
    </footer>
  );
}

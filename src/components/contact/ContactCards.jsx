const CARDS = [
  { icon: "fa-phone-alt",     title: "Call Us",          primary: "+1 (305) 820-0340",     sub: "Mon–Fri, 9am–6pm EST" },
  { icon: "fa-envelope",      title: "Email Us",          primary: "hello@journeydesk.com", sub: "We reply within 24 hours" },
  { icon: "fa-map-marker-alt",title: "Visit Our Office",  primary: "42 Explorer Street",    sub: "Miami, FL 33101, USA" },
  { icon: "fa-clock",         title: "Office Hours",      primary: "Mon–Fri: 9am – 6pm",    sub: "Sat: 10am – 3pm" },
];

export default function ContactCards() {
  return (
    <section className="contact-cards-section">
      <div className="container contact-cards-grid">
        {CARDS.map((c) => (
          <div className="contact-card" key={c.title}>
            <div className="cc-icon"><i className={`fa ${c.icon}`}></i></div>
            <h4>{c.title}</h4>
            <p>{c.primary}</p>
            <span>{c.sub}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

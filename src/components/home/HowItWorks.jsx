const STEPS = [
  {
    img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=120&h=120&fit=crop&q=80",
    title: "Search Destinations",
    text: "Browse hundreds of curated destinations filtered by budget, season, style, and duration. Find your dream trip in seconds.",
  },
  {
    img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=120&h=120&fit=crop&q=80",
    title: "Build Your Itinerary",
    text: "Use our drag-and-drop itinerary builder to arrange stops, activities, and rest days. Plan every hour or keep it flexible.",
  },
  {
    img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=120&h=120&fit=crop&q=80",
    title: "Track Your Budget",
    text: "Set a travel budget and automatically split costs across flights, hotels, food, and activities. No surprises at the airport.",
  },
  {
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=120&h=120&fit=crop&q=80",
    title: "Travel with Confidence",
    text: "Get your complete trip pack — confirmed bookings, packing lists, offline maps, and 24/7 agent support wherever you go.",
  },
];

export default function HowItWorks() {
  return (
    <section className="how-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">| How It Works</span>
          <h2>Plan Your Perfect Trip in <strong>3 Simple Steps</strong></h2>
        </div>
        <div className="how-grid">
          {STEPS.map((step, i) => (
            <div className="how-card" key={i}>
              <div className="how-icon">
                <img src={step.img} alt={step.title} loading="lazy" />
              </div>
              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

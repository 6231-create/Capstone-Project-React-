export default function VideoSection() {
  return (
    <section
      className="video-section"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1600&q=80')",
      }}
    >
      <div className="video-overlay"></div>
      <div className="container video-content">
        <span className="section-tag light">| Video Tour</span>
        <h2>
          See the World Through
          <br />
          Our <em>Travellers' Eyes</em>
        </h2>
        <a href="#" className="play-btn" aria-label="Play video">
          <i className="fas fa-play"></i>
        </a>
        <p>Watch real stories from 10,000+ happy travellers</p>
      </div>
    </section>
  );
}

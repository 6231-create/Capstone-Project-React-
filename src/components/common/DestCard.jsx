export default function DestCard({ dest, setPage }) {
  const handleClick = () => {
    setPage("trip-details");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="prop-card" style={{ cursor: "pointer" }} onClick={handleClick}>
      <div className="prop-img-wrap">
        <img src={dest.img} alt={dest.alt} loading="lazy" />
        <span className="prop-type">{dest.type}</span>
      </div>
      <div className="prop-body">
        <div className="prop-price">
          From <strong>{dest.price}</strong>
        </div>
        <h4>{dest.title}</h4>
        <ul className="prop-meta">
          <li><i className="fas fa-clock"></i> {dest.days}</li>
          <li><i className="fas fa-users"></i> {dest.group}</li>
          <li><i className="fas fa-globe"></i> {dest.region}</li>
          <li><i className="fas fa-star"></i> {dest.rating}</li>
          <li><i className="fas fa-utensils"></i> {dest.meals}</li>
        </ul>
        <button className="btn-outline-sm">View Itinerary</button>
      </div>
    </div>
  );
}

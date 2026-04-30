import { AGENTS } from "../../data/tripDetails";

export default function AgentsGrid() {
  return (
    <div className="agents-section">
      <h4>Our Travel Experts</h4>
      <div className="agents-grid">
        {AGENTS.map((a) => (
          <div className="agent-card" key={a.name}>
            <img src={a.img} alt={a.name} loading="lazy" />
            <div className="agent-info">
              <strong>{a.name}</strong>
              <span>{a.role}</span>
              <a href={`mailto:${a.email}`} aria-label={`Email ${a.name}`}>
                <i className="fa fa-envelope"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

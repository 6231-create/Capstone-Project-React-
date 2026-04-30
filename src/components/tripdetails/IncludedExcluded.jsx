const INCLUDED = [
  "9 nights boutique hotel accommodation",
  "Daily breakfast + welcome dinner",
  "Private airport transfers",
  "All guided tours and entrance fees",
  "English-speaking expert guide",
  "Travel insurance documentation",
  "24/7 on-trip support",
];

const EXCLUDED = [
  "International flights",
  "Visa fees (if applicable)",
  "Personal expenses & shopping",
  "Lunches & dinners (except welcome)",
  "Optional activities (surfing, diving)",
  "Travel vaccinations",
];

export default function IncludedExcluded() {
  return (
    <div className="detail-card">
      <h3>What's Included</h3>
      <div className="included-grid">
        <div className="inc-col included">
          <h5><i className="fa fa-check-circle"></i> Included</h5>
          <ul>
            {INCLUDED.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div className="inc-col excluded">
          <h5><i className="fa fa-times-circle"></i> Not Included</h5>
          <ul>
            {EXCLUDED.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

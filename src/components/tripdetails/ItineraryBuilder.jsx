import { useState } from "react";
import { ITIN_DAYS } from "../../data/tripDetails";

export default function ItineraryBuilder() {
  const [activeDay, setActiveDay] = useState(0);
  const [days, setDays] = useState(ITIN_DAYS.map((d) => ({ ...d, stops: [...d.stops] })));
  const [newStop, setNewStop] = useState("");
  const [newStopError, setNewStopError] = useState("");

  const addStop = () => {
    if (!newStop.trim()) {
      setNewStopError("Please enter an activity or stop name.");
      return;
    }
    setNewStopError("");
    setDays((prev) =>
      prev.map((d, i) =>
        i === activeDay
          ? {
              ...d,
              stops: [
                ...d.stops,
                { time: "Custom", name: newStop.trim(), note: "Your custom stop", icon: "fa-map-pin" },
              ],
            }
          : d
      )
    );
    setNewStop("");
  };

  const removeStop = (stopIdx) => {
    setDays((prev) =>
      prev.map((d, i) =>
        i === activeDay
          ? { ...d, stops: d.stops.filter((_, j) => j !== stopIdx) }
          : d
      )
    );
  };

  return (
    <div className="detail-card" id="itinerary-builder">
      <h3><i className="fas fa-route"></i> Day-by-Day Itinerary Builder</h3>
      <p className="card-sub">
        Click any day to view and edit stops. Add custom activities to personalise your trip.
      </p>

      {/* Day Tabs */}
      <div className="itin-day-tabs">
        {days.map((d, i) => (
          <button
            key={i}
            className={`itin-tab${activeDay === i ? " active" : ""}`}
            onClick={() => setActiveDay(i)}
          >
            {d.label}
            <span>{d.location}</span>
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="itin-day-content">
        <div className="itin-timeline">
          {days[activeDay].stops.length === 0 && (
            <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", padding: "16px 0" }}>
              No stops yet. Add one below!
            </p>
          )}
          {days[activeDay].stops.map((s, i) => (
            <div className="itin-stop" key={i}>
              <div className="itin-stop-icon">
                <i className={`fas ${s.icon}`}></i>
              </div>
              <div className="itin-stop-time">{s.time}</div>
              <div className="itin-stop-body">
                <strong>{s.name}</strong>
                <span>{s.note}</span>
                <div className="itin-stop-actions">
                  <button className="itin-act-btn remove" onClick={() => removeStop(i)}>
                    <i className="fas fa-xmark"></i> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Stop */}
      <div className="itin-add-stop">
        <div style={{ flex: 1 }}>
          <input
            type="text"
            placeholder="Add a custom activity or stop..."
            value={newStop}
            onChange={(e) => { setNewStop(e.target.value); setNewStopError(""); }}
            onKeyDown={(e) => e.key === "Enter" && addStop()}
            style={{ borderColor: newStopError ? "var(--red)" : "" }}
          />
          {newStopError && (
            <span style={{ color: "var(--red)", fontSize: "0.72rem" }}>{newStopError}</span>
          )}
        </div>
        <button className="btn-primary" onClick={addStop}>+ Add Stop</button>
      </div>
    </div>
  );
}

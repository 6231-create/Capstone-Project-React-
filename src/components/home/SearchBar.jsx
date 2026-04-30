import { useState } from "react";

export default function SearchBar({ setPage }) {
  const [dest, setDest] = useState("");
  const [date, setDate] = useState("");
  const [travellers, setTravellers] = useState("1 Person");
  const [tripType, setTripType] = useState("All Types");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!dest.trim()) {
      e.dest = "Please enter a destination.";
    }
    if (!date) {
      e.date = "Please select a departure date.";
    } else if (new Date(date) < new Date()) {
      e.date = "Departure date must be in the future.";
    }
    return e;
  };

  const handleSearch = () => {
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setPage("destinations");
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <section className="search-section">
      <div className="container">
        <div className="search-box">
          {/* Destination */}
          <div className="search-field" style={{ flexDirection: "column" }}>
            <label><i className="fa fa-map-marker-alt"></i> Destination</label>
            <input
              type="text"
              placeholder="Where do you want to go?"
              value={dest}
              onChange={(e) => { setDest(e.target.value); setErrors((v) => ({ ...v, dest: "" })); }}
              style={{ borderColor: errors.dest ? "var(--red)" : "" }}
            />
            {errors.dest && (
              <span style={{ color: "var(--red)", fontSize: "0.72rem", marginTop: 2 }}>
                {errors.dest}
              </span>
            )}
          </div>

          <div className="search-divider"></div>

          {/* Date */}
          <div className="search-field" style={{ flexDirection: "column" }}>
            <label><i className="fa fa-calendar"></i> Departure</label>
            <input
              type="date"
              value={date}
              onChange={(e) => { setDate(e.target.value); setErrors((v) => ({ ...v, date: "" })); }}
              style={{ borderColor: errors.date ? "var(--red)" : "" }}
            />
            {errors.date && (
              <span style={{ color: "var(--red)", fontSize: "0.72rem", marginTop: 2 }}>
                {errors.date}
              </span>
            )}
          </div>

          <div className="search-divider"></div>

          {/* Travellers */}
          <div className="search-field">
            <label><i className="fa fa-users"></i> Travellers</label>
            <select value={travellers} onChange={(e) => setTravellers(e.target.value)}>
              <option>1 Person</option>
              <option>2 People</option>
              <option>3-5 People</option>
              <option>Group (6+)</option>
            </select>
          </div>

          <div className="search-divider"></div>

          {/* Trip Type */}
          <div className="search-field">
            <label><i className="fa fa-tag"></i> Trip Type</label>
            <select value={tripType} onChange={(e) => setTripType(e.target.value)}>
              <option>All Types</option>
              <option>Adventure</option>
              <option>Cultural</option>
              <option>Beach</option>
              <option>Luxury</option>
            </select>
          </div>

          <button className="btn-search" onClick={handleSearch}>
            Search Trips
          </button>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { BUDGET_CATS } from "../../data/tripDetails";

export default function BudgetPlanner() {
  const [base, setBase] = useState(2850);
  const [pax, setPax] = useState(2);
  const [tripDays, setTripDays] = useState(10);

  const spent = BUDGET_CATS.reduce((acc, c) => acc + Math.round(base * c.pct / 100), 0);
  const remaining = base - spent;

  const statusLabel =
    remaining < 0
      ? "Over Budget ✗"
      : remaining < base * 0.08
      ? "Near Limit !"
      : "On Track ✓";

  const statusColor =
    remaining < 0 ? "var(--red)" : remaining < base * 0.08 ? "var(--orange, #e67e22)" : "var(--green)";

  const safeNum = (val, min = 1) => Math.max(min, parseInt(val) || min);

  return (
    <div className="detail-card" id="budget-planner">
      <h3><i className="fas fa-wallet"></i> Budget Planner</h3>
      <p className="card-sub">
        Adjust values to plan your total trip budget across key categories.
      </p>

      {/* Controls */}
      <div className="budget-top">
        <div className="budget-total-display">
          <span>Total Budget</span>
          <strong>${base.toLocaleString()}</strong>
        </div>
        <div className="budget-inputs-row">
          <div>
            <label>Travellers</label>
            <input
              type="number"
              value={pax}
              min="1"
              max="20"
              onChange={(e) => setPax(safeNum(e.target.value))}
            />
          </div>
          <div>
            <label>Days</label>
            <input
              type="number"
              value={tripDays}
              min="1"
              onChange={(e) => setTripDays(safeNum(e.target.value))}
            />
          </div>
          <div>
            <label>Base ($)</label>
            <input
              type="number"
              value={base}
              min="0"
              onChange={(e) => setBase(safeNum(e.target.value, 0))}
            />
          </div>
        </div>
      </div>

      {/* Category Bars */}
      <div className="budget-sliders">
        {BUDGET_CATS.map((c) => (
          <div className="bslider-row" key={c.name}>
            <div className="bslider-icon"><i className={`fas ${c.icon}`}></i></div>
            <div className="bslider-label">{c.name}</div>
            <div className="bslider-track">
              <div
                className="bslider-fill"
                style={{ width: `${c.pct}%`, background: c.color }}
              ></div>
            </div>
            <div className="bslider-pct">{c.pct}%</div>
            <div className="bslider-amt">
              ${Math.round(base * c.pct / 100).toLocaleString()}
            </div>
          </div>
        ))}
      </div>

      {/* Summary Cards */}
      <div className="budget-summary">
        <div className="bsum-card">
          <span>Per Day</span>
          <strong>${Math.round(base / tripDays).toLocaleString()}</strong>
        </div>
        <div className="bsum-card">
          <span>Per Person</span>
          <strong>${Math.round(base / pax).toLocaleString()}</strong>
        </div>
        <div className="bsum-card">
          <span>Remaining</span>
          <strong style={{ color: remaining >= 0 ? "var(--green)" : "var(--red)" }}>
            {remaining >= 0 ? "$" : "-$"}{Math.abs(remaining).toLocaleString()}
          </strong>
        </div>
        <div className="bsum-card">
          <span>Status</span>
          <strong style={{ color: statusColor }}>{statusLabel}</strong>
        </div>
      </div>
    </div>
  );
}

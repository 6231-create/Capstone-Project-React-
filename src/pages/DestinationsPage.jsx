import { useState } from "react";
import PageBanner  from "../components/common/PageBanner";
import DestCard    from "../components/common/DestCard";
import DESTINATIONS from "../data/destinations";

const BANNER_IMG = "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1600&q=80";

const FILTERS = [
  ["all",       "All"],
  ["beach",     "Beach"],
  ["adventure", "Adventure"],
  ["cultural",  "Cultural"],
  ["luxury",    "Luxury"],
  ["city",      "City Break"],
];

export default function DestinationsPage({ setPage }) {
  const [filter, setFilter] = useState("all");
  const [sort,   setSort]   = useState("");

  const toPrice  = (p) => parseInt(p.replace(/\D/g, ""));
  const toRating = (r) => parseFloat(r);
  const toDays   = (d) => parseInt(d);

  let list = DESTINATIONS.filter(
    (d) => filter === "all" || d.types.includes(filter)
  );

  if (sort === "price-low")  list = [...list].sort((a, b) => toPrice(a.price)  - toPrice(b.price));
  if (sort === "price-high") list = [...list].sort((a, b) => toPrice(b.price)  - toPrice(a.price));
  if (sort === "rating")     list = [...list].sort((a, b) => toRating(b.rating) - toRating(a.rating));
  if (sort === "duration")   list = [...list].sort((a, b) => toDays(a.days)    - toDays(b.days));

  return (
    <>
      <PageBanner
        title="All Destinations"
        breadcrumbs={[{ label: "Home", link: true }, { label: "Destinations" }]}
        img={BANNER_IMG}
      />

      {/* Filter Bar */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-bar">
            <div className="filter-left">
              <span className="filter-label">Filter by:</span>
              {FILTERS.map(([val, label]) => (
                <button
                  key={val}
                  className={`filter-chip${filter === val ? " active" : ""}`}
                  onClick={() => setFilter(val)}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="filter-right">
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="">Sort by: Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
                <option value="duration">Shortest First</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="destinations-listing">
        <div className="container">
          {list.length === 0 ? (
            <p style={{ textAlign: "center", color: "var(--text-muted)", padding: "60px 0" }}>
              No destinations match your filter. Try a different category.
            </p>
          ) : (
            <div className="prop-grid" id="trips-grid">
              {list.map((d) => (
                <DestCard key={d.id} dest={d} setPage={setPage} />
              ))}
            </div>
          )}

          <div className="pagination">
            <a href="#" className="page-btn active">1</a>
            <a href="#" className="page-btn">2</a>
            <a href="#" className="page-btn">3</a>
            <a href="#" className="page-btn next">
              <i className="fa fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

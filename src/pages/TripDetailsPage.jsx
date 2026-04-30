import PageBanner       from "../components/common/PageBanner";
import Accordion        from "../components/common/Accordion";
import DestCard         from "../components/common/DestCard";
import TripGallery      from "../components/tripdetails/TripGallery";
import ItineraryBuilder from "../components/tripdetails/ItineraryBuilder";
import BudgetPlanner    from "../components/tripdetails/BudgetPlanner";
import BookingSidebar   from "../components/tripdetails/BookingSidebar";
import IncludedExcluded from "../components/tripdetails/IncludedExcluded";
import DESTINATIONS     from "../data/destinations";
import { TRIP_FAQS }   from "../data/tripDetails";

const BANNER_IMG = "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1600&q=80";

const HIGHLIGHTS = [
  ["fa-clock",         "10 Days / 9 Nights"],
  ["fa-users",         "Max 12 People"],
  ["fa-star",          "4.9 / 5.0"],
  ["fa-map-marker-alt","Bali, Indonesia"],
  ["fa-language",      "English Guide"],
  ["fa-plane",         "Flights Optional"],
];

export default function TripDetailsPage({ setPage }) {
  return (
    <>
      <PageBanner
        title="Bali, Indonesia"
        breadcrumbs={[
          { label: "Home",         link: true },
          { label: "Destinations", link: true },
          { label: "Bali Experience" },
        ]}
        img={BANNER_IMG}
      />

      <section className="detail-section">
        <div className="container detail-grid">

          {/* ── MAIN COLUMN ── */}
          <div className="detail-main">
            <TripGallery />

            {/* Overview */}
            <div className="detail-card">
              <h3>About This Trip</h3>
              <div className="trip-highlights">
                {HIGHLIGHTS.map(([ic, txt]) => (
                  <span key={txt}><i className={`fa ${ic}`}></i> {txt}</span>
                ))}
              </div>
              <p>
                Immerse yourself in Bali's breathtaking landscapes, ancient temples, and vibrant
                culture. From the terraced emerald rice paddies of Ubud to the pristine beach clubs
                of Seminyak — this carefully crafted 10-day journey covers the island's most
                extraordinary highlights.
              </p>
              <p style={{ marginTop: 12 }}>
                Our expert local guides take you off the beaten track to sacred water temples,
                traditional dance performances, and hidden waterfalls that most tourists never
                discover. Every day is a new adventure, balanced with leisure time and world-class
                dining.
              </p>
              <Accordion items={TRIP_FAQS} />
            </div>

            <ItineraryBuilder />
            <BudgetPlanner />
            <IncludedExcluded />
          </div>

          {/* ── SIDEBAR ── */}
          <div className="detail-sidebar">
            <BookingSidebar setPage={setPage} />
          </div>
        </div>
      </section>

      {/* Related Trips */}
      <section className="related-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">| You May Also Like</span>
            <h2>Similar <strong>Trip Packages</strong></h2>
          </div>
          <div className="prop-grid three-col">
            {DESTINATIONS.slice(2, 5).map((d) => (
              <DestCard key={d.id} dest={d} setPage={setPage} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

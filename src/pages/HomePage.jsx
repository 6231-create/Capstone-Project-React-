import HeroSlider         from "../components/home/HeroSlider";
import SearchBar          from "../components/home/SearchBar";
import FeaturedTrip       from "../components/home/FeaturedTrip";
import HowItWorks         from "../components/home/HowItWorks";
import VideoSection       from "../components/home/VideoSection";
import StatsSection       from "../components/home/StatsSection";
import BestDeals          from "../components/home/BestDeals";
import Testimonials       from "../components/home/Testimonials";
import HomeContactSection from "../components/home/HomeContactSection";
import DestCard           from "../components/common/DestCard";
import DESTINATIONS       from "../data/destinations";

export default function HomePage({ setPage }) {
  return (
    <>
      <HeroSlider setPage={setPage} />
      <SearchBar  setPage={setPage} />
      <FeaturedTrip setPage={setPage} />
      <HowItWorks />
      <VideoSection />
      <StatsSection />
      <BestDeals setPage={setPage} />

      {/* Destinations Preview */}
      <section className="properties-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">| Destinations</span>
            <h2>We Offer <strong>The Best Trips</strong> You'll Love</h2>
          </div>
          <div className="prop-grid">
            {DESTINATIONS.slice(0, 6).map((d) => (
              <DestCard key={d.id} dest={d} setPage={setPage} />
            ))}
          </div>
          <div className="view-all-wrap">
            <button
              className="btn-outline"
              onClick={() => { setPage("destinations"); window.scrollTo({ top: 0 }); }}
            >
              View All Destinations
            </button>
          </div>
        </div>
      </section>

      <Testimonials />
      <HomeContactSection />
    </>
  );
}

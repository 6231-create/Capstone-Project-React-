import { useState, useEffect } from "react";

import { SubHeader, Navbar, Footer } from "./components/layout";
import BackToTop      from "./components/common/BackToTop";
import HomePage       from "./pages/HomePage";
import DestinationsPage from "./pages/DestinationsPage";
import TripDetailsPage from "./pages/TripDetailsPage";
import ContactPage    from "./pages/ContactPage";

export default function App() {
  const [page, setPage] = useState("home");
  const [loaded, setLoaded] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // default dark

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 800);
    return () => clearTimeout(timer);
  }, []);

  // Apply theme to <html> element
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const renderPage = () => {
    switch (page) {
      case "home":         return <HomePage        setPage={setPage} />;
      case "destinations": return <DestinationsPage setPage={setPage} />;
      case "trip-details": return <TripDetailsPage  setPage={setPage} />;
      case "contact":      return <ContactPage />;
      default:             return <HomePage        setPage={setPage} />;
    }
  };

  return (
    <>
      {/* Preloader */}
      <div id="preloader" className={loaded ? "hidden" : ""}>
        <div className="preloader-inner">
          <div className="preloader-dot"></div>
          <div className="preloader-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <BackToTop />
      <SubHeader />
      <Navbar page={page} setPage={setPage} darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>{renderPage()}</main>

      <Footer setPage={setPage} />
    </>
  );
}

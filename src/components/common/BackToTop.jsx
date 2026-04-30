import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      id="back-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{ opacity: visible ? 1 : 0, visibility: visible ? "visible" : "hidden" }}
      aria-label="Back to top"
    >
      <i className="fa fa-chevron-up"></i>
    </button>
  );
}

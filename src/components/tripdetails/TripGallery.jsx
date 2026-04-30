import { useState } from "react";
import { GALLERY_IMGS } from "../../data/tripDetails";

export default function TripGallery() {
  const [active, setActive] = useState(0);

  return (
    <div className="gallery-wrap">
      <div className="gallery-main">
        <img src={GALLERY_IMGS[active].full} alt={`Gallery ${active + 1}`} />
      </div>
      <div className="gallery-thumbs">
        {GALLERY_IMGS.map((g, i) => (
          <img
            key={i}
            src={g.thumb}
            alt={`Thumb ${i + 1}`}
            onClick={() => setActive(i)}
            className={active === i ? "active-thumb" : ""}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}

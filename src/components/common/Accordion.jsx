import { useState } from "react";

export default function Accordion({ items }) {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (i) => setOpenIdx(openIdx === i ? null : i);

  return (
    <div className="accordion">
      {items.map(([question, answer], i) => (
        <div className="acc-item" key={i}>
          <button className="acc-btn" onClick={() => toggle(i)}>
            {question}{" "}
            <i className={`fa ${openIdx === i ? "fa-minus" : "fa-plus"}`}></i>
          </button>
          <div
            className="acc-body"
            style={{ maxHeight: openIdx === i ? "300px" : "0px" }}
          >
            {answer}
          </div>
        </div>
      ))}
    </div>
  );
}

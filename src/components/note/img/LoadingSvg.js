import React from "react";
import "../note-sass/LoadingSvg.scss";

export default function LoadingSvg() {
  return (
    <div className="loading">
      <svg className="svgLoad2" height="100" width="100">
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke='#fff'
          strokeLinecap="round"
          strokeWidth="10"
          fill="none"
        />
      </svg>
      <svg className="svgLoad1" height="100" width="100">
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth="10"
          fill="none"
        />
      </svg>
    </div>
  );
}

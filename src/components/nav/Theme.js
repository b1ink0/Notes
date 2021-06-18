import React from "react";
import "./nav-sass/Theme.scss";

export default function Theme({
  theme,
  backgroundColor,
  background,
  color,
  boxShadow,
  on
}) {
  return (
    <div
      className="themeCon"
      style={{ background: backgroundColor, color: color }}
    >
      <h1
        style={{
          background: background,
          boxShadow: `6px 6px 5px ${boxShadow},0 10px 5px rgba(0,0,0,0)`,
        }}
      >
        {theme}
      </h1>
      <div
        style={{
          background: background,
          boxShadow: `6px 6px 5px ${boxShadow},0 10px 5px rgba(0,0,0,0)`,
        }}
        className="theme1"
      >
        Note...
      </div>
      {
        on &&
      <div className='theme2'>
        <div className='theme21'>
          <div></div>
          <div></div>
        </div>
      </div>
      }
    </div>
  );
}

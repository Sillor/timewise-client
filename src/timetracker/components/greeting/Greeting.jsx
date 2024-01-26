import React from "react";

export default function Greeting({start, highlight, end}) {
  return (
    <>
      <div className="text-center mb-14 greeting-text-shadow text-3xl font-bold lg:text-6xl lg:mb-0 lg:text-left">
        <span className="lg:block">{start}</span>
        <span className="text-secondary">{highlight}</span>{end}
      </div>

      <div className="hidden rounded w-[1px] h-[50vh] bg-light lg:block"></div>
    </>
  );
}

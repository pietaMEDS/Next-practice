"use client";

import { useState } from "react";
import { createApi } from "unsplash-js";

export default function Categories( setSearch ) {
  const [pins, setPins] = useState([]);

  const unsplash = createApi({
    accessKey: "LAIM2RA2Z_GYPDX1JWkSRHe56h_FRmy5iVDqz6ajltk",
  });

  async function goToCategory( name ) {
    setSearch(name)
  }

  async function GenerateCategories() {
    if (pins.length == 0) {
      let result = await unsplash.photos.getRandom({
        count: 4,
      });

      setPins(result.response);
    }
  }

    GenerateCategories();

  return (
    <ul className="categories">
      {pins.map((post, index) => (
        <li key={pins[index]?.id}>
          <img
            src={
              pins[index]?.urls
                ? pins[index]?.urls.small
                : "https://i.imgur.com/Drm3hDc.png"
            }
            alt={
              pins[index]?.alt_description
                ? pins[index]?.alt_description
                : "IMAGE_NOT_FOUND"
            }
          />
          <span>
            {Object.keys(pins[index]?.topic_submissions).length
              ? Object.keys(pins[index]?.topic_submissions)[0]
              : pins[index]?.alt_description
              ? pins[index]?.alt_description
              : "Topic not found"}{" "}
            <button onClick={goToCategory}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-right"
                viewBox="0 0 16 16"
              >
                <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
              </svg>
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
}

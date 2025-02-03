"use client";
import Link from "next/link";
import { useState } from "react";
import { createApi } from "unsplash-js";
function SearchComp({ search, searchState=false, setSearchState }) {
  const [pins, setPins] = useState([]);
  const unsplash = createApi({
    accessKey: "LAIM2RA2Z_GYPDX1JWkSRHe56h_FRmy5iVDqz6ajltk",
  });

  console.log(`State: `, searchState);
  

  if (searchState) {
    searchPhotos();
  }

  async function searchPhotos() {
    setSearchState(false);
    let result = await unsplash.search.getPhotos({
      query: search,
      page: 1,
      perPage: 12,
    });
    setPins(result.response.results);
  }
  return (
    <main>
      <ul className="SearchList">
        {pins.map((post) => (
          <li key={post.id}>
            <img src={post.urls.small} alt={post.alt_description} />
          </li>
        ))}
      </ul>

        {pins.length ? "" : 
        <div className="Nothing-pins">
          <img src="https://i.imgur.com/Vy6IWSc.png" alt="not found" />
          <h1>Ничего не нашли по запросу</h1>
        </div>
        }

    </main>
  );
}
export default SearchComp;

"use client";

import Link from "next/link";
import { useState } from "react";
import { createApi } from "unsplash-js";

function Search() {
  const [search, setSearch] = useState("");
  const [pins, setPins] = useState([]);

  const unsplash = createApi({
    accessKey: "LAIM2RA2Z_GYPDX1JWkSRHe56h_FRmy5iVDqz6ajltk",
  });

  function searchChange(e) {
    setSearch(e.target.value);
  }

  async function searchPhotos() {
    let result = await unsplash.search.getPhotos({
      query: search,
      page: 1,
      perPage: 10,
    });

    setPins(result.response.results);
    console.log(pins);
  }

  return (
    <main>
      <input type="text" onChange={searchChange} />
      <button onClick={searchPhotos}>Search!</button>

      <ul>
        {pins.map((post) => (
          <li key={post.id}><img src={post.urls.raw} alt={post.alt_description} /></li>
        ))}
      </ul>
    </main>
  );
}

export default Search;

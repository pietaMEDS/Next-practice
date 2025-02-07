"use client";
import Link from "next/link";
import { useState } from "react";
import { createApi } from "unsplash-js";
function SearchComp({ search, searchState = false, setSearchState }) {
  const [pins, setPins] = useState([]);

  if (searchState) {
    searchPhotos();
  }

  async function searchPhotos() {
    setSearchState(false);
    let result = await fetch("/api/photo", {
      method: "POST",
      body: JSON.stringify({
        search: search,
        sessionid: sessionStorage.getItem('Uniform_id')
      }),
    });
    setPins(result.body.data.response.results);
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

      {pins.length ? (
        ""
      ) : (
        <div className="Nothing-pins">
          <img src="https://i.imgur.com/Vy6IWSc.png" alt="not found" />
          <h1>Ничего не нашли по запросу</h1>
        </div>
      )}
    </main>
  );
}
export default SearchComp;

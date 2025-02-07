"use client";

import { useState } from "react";
import { createApi } from "unsplash-js";
import Categories from "@/components/Categories";
import Navigation from "@/components/Navigation";
import SearchComp from "@/components/SearchComp";
import { NavPush } from "@/utility/navigation";

function Search() {
  const [search, setSearch] = useState("");
  const [searchState, setSearchState] = useState(false);

  if (!sessionStorage.getItem("auth")) {
    NavPush('/')
  }

  return (
    <div>
      <Navigation setSearch={setSearch} setSearchState={setSearchState} />
      {!search ? <Categories setSearch={setSearch} /> : <SearchComp search={search} searchState={searchState} setSearchState={setSearchState}/>}
    </div>
  );
}

export default Search;

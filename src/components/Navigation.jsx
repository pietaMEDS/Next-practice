"use client";

import Link from "next/link";

export default function Navigation({ setSearch, setSearchState }) {
  return (
    <header>
      <div className="navigation-main">
        <div>
          <Link href="/" className="header-back">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
          </Link>
          <h1 className="header-name">ФОТО ВЫСТАВКА</h1>
        </div>
        <div>
          <input
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button onClick={(e)=>setSearchState(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </button>
        </div>
        <div>
          <Link href="/">Главная</Link>
        </div>
        <div>
          <span>
            {sessionStorage.getItem("auth") ? "Профиль" : <Link href={'auth/login'}>Авторизация</Link>}
          </span>
        </div>
      </div>
    </header>
  );
}

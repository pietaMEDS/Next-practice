"use client";

import Link from "next/link";

function Home() {
  return (
    <div>
      <main>
        <div className="rounded-x-left photo-box">
          <h1 className="main-header">
            Добро пожаловать в мир неограниченного творчества!
          </h1>
          <span className="quite">
            Присоединяйтесь к тысячам креативных людей, которые уже нашли всё
            необходимое для своих проектов.
          </span>
          <div className="round-18 bg-white flex justify-round main-btn-list">
            <Link href='/auth/registration' className="main-button round-18">
              Регистрация{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </Link>
            <Link href='/auth/login' className="main-button round-18">
              Вход{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;

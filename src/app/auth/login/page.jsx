"use client";

import Link from "next/link";

function Home() {
  return (
    <div>
      <div className="login-flex">
        <div className="form">
          <form className="login-form">
            <div>
            <h1>Добро пожаловать!</h1>
            <span className="quite">
              Доступ к миллионам изображений за пару кликов
            </span>
            </div>
            <div>
              <input type="email" name="mail" id="mail" placeholder="Email" />
            </div>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Пароль"
              />
              <Link href='/auth/registration' className="hide-link">Еще нет учетной записи?</Link>
            </div>
          </form>

          <button className="round-18 main-button">
              Войти{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </button>
        </div>
        <div className="image">
          <img
            src="https://i.ytimg.com/vi/eSYekPFR64E/maxresdefault.jpg"
            alt="NeonPrime"
          />
          <div className="substract" />
        </div>
      </div>
    </div>
  );
}

export default Home;

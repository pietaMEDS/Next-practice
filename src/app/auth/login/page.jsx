"use client";

import Link from "next/link";
import { useState } from "react";

function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    let result = await fetch('http://localhost:3000/api/users', {
      method: "POST",
      body: JSON.stringify({
        "email": email,
        "password": password
      })
    })

    let succesBody = await result.json()
    sessionStorage.setItem("auth", true)
    sessionStorage.setItem("Uniform_id", succesBody.Sessionid)
    
  }

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
              <input
                type="email"
                name="mail"
                id="mail"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
             />
            </div>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Пароль"
                onChange={ (e) => setPassword(e.target.value)}
              />
              <Link href="/auth/registration" className="hide-link">
                Еще нет учетной записи?
              </Link>
            </div>
          </form>

          <button onClick={(e)=> login()} className="round-18 main-button">
            Войти{" "}
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

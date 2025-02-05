"use client";

import { NavPush } from "@/utility/navigation";
import Link from "next/link";
import { useState } from "react";

function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    try {
      let result = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      let succesBody = await result.json();

      if (result.status == 200) {
        sessionStorage.setItem("auth", true);
        sessionStorage.setItem("Uniform_id", succesBody.Sessionid);
        NavPush('/catalog')
      }
      else{
        console.log(succesBody.message);
      }

      
    } catch (err) {
      console.error("login error", err);
    }
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
            <div className="form-link-point">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Пароль"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Link href="/auth/registration" className="hide-link">
                Еще нет учетной записи?
              </Link>
            </div>
          </form>

          <button onClick={(e) => login()} className="round-18 main-button">
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
            src="https://s3-alpha-sig.figma.com/img/ee0c/3577/77d3f32fdb91c448eea43d3bda9bf5c6?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=baSWFfkC3NU6S4djm0BaxcATK5McWaH9EDPeznquWEpi5dIeRxagdT3GqmZaQefEzsJ0XJg8s8Wzk4g5qLSMLVnbdVNmVSkkU2p8KShDTLHVtF3B6Ym40uIDfFEWLm20ss13e6-jIj87zrKqztqgtAOW7QoqYC0wdtwsROHWXNCq9RUH1RnRqNQY0DV6kqZYaINoIwzDRj3SUvATYtakvUqTZxSeTuIHGH-54~g-MVJ1wuM0sNuvCnjgP6YZa6SyluvSQlQf-YDdQq8edRSA9zsUSJ7-bEWUZuqS5M61mbkGeniX0MNk2z~RsPI2Iiso4bvozFKql5UJ~jVIU3hzGg__"
            alt="NeonPrime"
          />
          <div className="substract" />
        </div>
      </div>
    </div>
  );
}

export default Home;

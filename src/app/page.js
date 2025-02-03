"use client";

import AuthorizeLinks from "@/components/AuthorizeLinks";
import CatalogLinks from "@/components/CatalogLinks";
import Header from "@/components/Header";
import { NavPush } from "@/utility/navigation";
import Link from "next/link";

function Home() {
  return (
    <div>
      <Header />
      <main>
        <div className="rounded-x-left photo-box">
          <h1 className="main-header">
            Добро пожаловать в мир неограниченного творчества!
          </h1>
          <span className="quite">
            Присоединяйтесь к тысячам креативных людей, которые уже нашли всё
            необходимое для своих проектов.
          </span>
          { sessionStorage.getItem("auth") ? <CatalogLinks /> : <AuthorizeLinks />}
        </div>
      </main>
    </div>
  );
}

export default Home;

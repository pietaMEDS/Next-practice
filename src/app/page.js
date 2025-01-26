'use client'
import { useState } from "react";

export default function Home() {
  const [count, SetCount] = useState(0)
  return (
    <main>
      <div className="container">
        <p>
          Счётчик: 
          <br />
          <button className="btn" onClick={() => SetCount(count - 1)}>--</button>
          <span id="count">{count}</span>
          <button className="btn" onClick={() => SetCount(count + 1)}>++</button>
        </p>
      </div>
    </main>
  );
}

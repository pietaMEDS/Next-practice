import Image from "next/image";

export default function Home() {
  return (
    <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "5rem" }}><span style={{ color: "green", textDecoration: "none" }}>&gt;</span><span style={{ color: "white", textDecoration: "underline green" }}>Hello World</span></div>
  );
}

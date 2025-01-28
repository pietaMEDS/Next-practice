import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-500 font-medium">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8 text-white"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <img src="/logo.png" alt="New Rise icon" className="max-w-12" />
          <span className="content-center font-bold">New Rise</span>
        </div>

        <div className="flex lg:flex-1">
          <div className="flex lg:flex-1">
            <span>Форум</span>
          </div>
          <div className="flex lg:flex-1">
            <span>Контакты</span>
          </div>
          <div className="flex lg:flex-1">
            <span>Регистрация</span>
          </div>
          <div className="flex lg:flex-1">
            {/* <button className="btn" onClick={() => setCount(count + 1)}>++</button> */}
          </div>
        </div>
      </nav>
    </header>
  );
}

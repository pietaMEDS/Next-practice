import Link from "next/link";

export default function Footer() {
  return (
    <footer  className="bg-blue-500 font-medium">
      <div className="flex items-center justify-between p-2 lg:px-8 text-white w-full">
        <div>
          <span>&copy; 2025 New Rise. Все права защищены.</span>
        </div>
        <div className="flex gap-2">
          <h5 className="items-center flex">Контакты</h5>
          <div className="flex">
            <ul className="flex flex-row gap-2 flex-direct-col">
              <li>
                <a href="">Discord</a>
              </li>
              <li>
                <a href="">VK</a>
              </li>
              <li>
                <a href="">Telegram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

'use client'

export default function Navigation({counter=0, setCounter}) {
  return (
    <div>
        <div className="flex items-center justify-between lg:px-8 text-white bg-blue-500 w-full p-2">
            <div className="flex items-center">
                <h5 className="items-center flex lg:flex-1">Поиск</h5>
                <input type="text" className="flex lg:px-10 lg:flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full" />
            </div>
            <div className="flex">
                <h5 className="items-center flex lg:flex-1">Управление счётчиком</h5>
                <ul className="flex lg:flex-1 lg:px-8">
                    <li>
                        <button onClick={() => setCounter( counter + 1 )} className="flex lg:flex-1 lg:px-8">Увеличить</button>
                    </li>
                    <li>
                        <button onClick={() => setCounter(0)} className="flex lg:flex-1 lg:px-8">Сбросить</button>
                    </li>
                    <li>
                        <button onClick={() => setCounter( counter - 1 )} className="flex lg:flex-1 lg:px-8">Уменьшить</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
}

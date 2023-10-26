import React from 'react';

const Sidebar = (props) => {
  const menuItems = [
    'Главная',
    'Каталог',
    'О нас',
    'Контакты',
    // Добавьте больше пунктов меню по мере необходимости
  ];

  return (
    <div className="bg-gray-100 text-gray-700 rounded-lg shadow-md h-full">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Меню</h2>
      <ul className="h-full flex flex-col justify-between">
        {menuItems.map((item, index) => (
          <li key={index} className="mb-2">
            <a href="#" className="text-blue-600 hover:underline"></a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
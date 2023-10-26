import React from 'react';

const Card = (props) => {
  return (
    <article className="items-start">
      <div className="flex items-center gap-x-4 text-xs">
        <time className="text-gray-500">Mar 16, 2020</time>
        <a href="#" className="relative z-10 rounded-full bg-gray-50 px-2 py-1 font-medium text-gray-600 hover:bg-gray-100">AI</a>
      </div>
      <div className="group relative">
        <h3 className="mt-2 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 text-left">
          <a href="#" className="no-underline text-black">
            SomeName
          </a>
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600 text-left">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
      </div>
      <div className="relative mt-4 flex items-start gap-x-4">
        <span className="flex items-center justify-center text-gray-600 font-semibold">Команда:</span>
        <div className="text-sm leading-6 flex items-center">
          <p className="font-semibold text-gray-900 items-start gap-x-2">
            <a href="#" className="no-underline text-gray-600">
              Павел Демухаметов
            </a>
          </p>
        </div>
      </div>
    </article>
  );
}

export default Card;
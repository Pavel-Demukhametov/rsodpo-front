import React from 'react';
import Card from '../../components/card/Card';
import SideBar from '../../components/sideBar/SideBar';
import Pagination from '../../components/pagination/Pagination';

const Catalog = (props) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-10 max-w-xl space-y-4 lg:mx-0 lg:max-w-none">
          <div className="lg:flex lg:space-x-4"> {/* Изменили flex на lg:flex */}
            <div className="w-1/4 p-4 hidden lg:block"> {/* Скрываем на маленьких экранах */}
              <SideBar />
            </div>

            {/* Правая часть (Карточки) */}
            <div className="w-full lg:w-3/4 space-y-12 p-4">
              <Card />
              <Card />
              <Card />
              <div className="text-center"> {/* Центрируем пагинацию по горизонтали */}
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
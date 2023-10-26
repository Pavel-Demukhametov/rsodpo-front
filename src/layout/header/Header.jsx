import React from 'react';
import styles from './Header.module.scss'
import Switcher12 from '../../components/switch/Switch';
import Search from '../../components/search/Search';
import {
  Collapse,
  Ripple,
  initTE,
} from "tw-elements";


const Header = () => {
//  initTE({ Collapse, Ripple });
    return (
      <div className="w-full">
        <div className={styles.containerShadow}>
          <nav className={styles.navbar1}>
              <div className={styles.logo}>

                  <h2 className={styles.logoText}>PH</h2>
              </div>
              {/* <ul className="hidden md:flex flex-auto space-x-2">
                  <li className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white bg-indigo-600 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">Каталог</li>
                  <li className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">О проекте</li>

              </ul> */}
            <Search></Search>
            <Switcher12></Switcher12>
          </nav>
        </div>
        {/* <div className="w-full bg-slate-200 h-screen">
          
        </div> */}
      </div>
      
    );
    
  };
  
  export default Header;

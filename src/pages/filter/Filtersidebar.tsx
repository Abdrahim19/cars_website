import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import Custom_button from "../../components/commen/ui/Custom_button";
import { menus } from "../../data/menus";
import Nestedsidebar from "./Nestedsidebar";
import { AiOutlineMinus } from "react-icons/ai";

type prop = {
  mobilestate:boolean
}
const Filtersidebar:React.FC<prop> = (props) => {
  const [selectedfilter, setselectedfilter] = useState(''); 
  const handelfilterclick = () => {
    if (props.mobilestate) {
      localStorage.setItem('filterMobile', 'flase')
    }
  }
     
  console.log(selectedfilter);
  
  return (
    <section className={`${props.mobilestate ? 'fixed left-0 top-0 h-screen w-full z-40' : 'hidden lg:flex  gap-4'}`} >
      <div
        className={`bg-white border-r-2 ${props.mobilestate ? 'w-full' : 'w-72'} min-h-fit  overflow-hidden
        } duration-500  px-4`}
      >
        <div className="mt-4 flex flex-col gap-2 relative">
          {menus?.map((menu, i) => (
            <Link
              to={''}
              key={i}
              onClick={() => setselectedfilter(menu.name)}
              className={`flex flex-col`}
            >
              <div className={`${styles.flexBetween} group text-sm capitalize font-medium p-2 gap-3.5 rounded-md hover:bg-gray-300`}>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 `}
                >
                {menu?.name}
              </h2>
                <div>{React.createElement(selectedfilter === menu.name ? AiOutlineMinus  :AiOutlinePlus, { size: "20" })}</div>
              </div>
              {selectedfilter === menu.name && <Nestedsidebar selectedfilter={selectedfilter} /> }
            </Link>
          ))}
        </div>
        <Custom_button type={"submit"} onClick={handelfilterclick} isLoading={false}>
        Rechercher (17 675)
        </Custom_button>
      </div>
    </section>
  );
};

export default Filtersidebar;

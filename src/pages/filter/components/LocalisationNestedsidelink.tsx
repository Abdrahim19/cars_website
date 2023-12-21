import { useState } from "react";
import styles from "../../../styles/styles";

const LocalisationNestedsidelink = () => {
  const [toggle, setToggle] = useState(true);
  const toggleClass = "transform translate-x-5";
  
  return (
    <div className={`${styles.flexBetween} my-2`}>
      <p>Livraison</p>
      <div className={`flex-col ${styles.flexCenter}`}>
        <div
          className={`${!toggle ? 'bg-lcui_primary' : 'bg-gray-400'} md:w-14 md:h-7 w-12 h-6
           flex items-center  rounded-full p-1 cursor-pointer mr-2`}
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {/* Switch */}
          <div
            className={
              `bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out ${toggle ? '' : toggleClass}`
            }
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LocalisationNestedsidelink;
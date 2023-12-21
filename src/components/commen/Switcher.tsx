import { useState } from "react";
import styles from "../../styles/styles";

type prop = {
    titel:string
}
const Switcher:React.FC<prop> = (props) => {
    const [toggle, setToggle] = useState(true);
    const toggleClass = "transform translate-x-5";

  return (
    <div className={`${styles.flexBetween} my-2`}>
    <p>{props.titel}</p>
    <div className={`flex-col ${styles.flexCenter}`}>
      <div
        className={`${!toggle ? 'bg-lcui_primary' : 'bg-gray-400'} md:w-11 md:h-5 w-10 h-6
         flex items-center  rounded-full p-1 cursor-pointer mr-2`}
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {/* Switch */}
        <div
          className={
            `bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${toggle ? '' : toggleClass}`
          }
        ></div>
      </div>
    </div>
  </div>
  )
}

export default Switcher
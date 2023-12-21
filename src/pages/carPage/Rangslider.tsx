import React, { useState } from "react";
import styles from "../../styles/styles";

type props  = {
min:number,
max:number,
step?:number
}
const Rangslider:React.FC<props> = ({ step, min, max }) => {

    const [Range, setRange] = useState<number>(max)
    
    const handleRangeChange = (event:any) => {
        const newRange = parseInt(event.target.value);
        setRange(newRange);
      };
  return (
    <div >
    <input  min={min}
            max={max}
            value={Range}
            onChange={handleRangeChange} id="range" type="range" className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
<div className={`${styles.flexBetween} mt-0.5 `}>
<p>{min} €</p>
<p>{max} €</p>
</div>
</div>
  )
}

export default Rangslider
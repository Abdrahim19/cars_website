import { AiOutlineMinusCircle } from "react-icons/ai";
import { CiCirclePlus } from "react-icons/ci";
import styles from "../../../styles/styles";
import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);
 
    //increase counter
    const increase = () => {
      setCounter(count => count + 1);
    };
   
    //decrease counter
    const decrease = () => {
        if (counter > 1) {
            setCounter(count => count - 1);
        }
    };

    return (
        <div className={`${styles.flexitems} gap-4`}>
            <AiOutlineMinusCircle onClick={decrease}  size={25} color='text-' />
            {counter}
            <CiCirclePlus onClick={increase} size={25} color='text-' />
        </div>
    );
};

export default Counter;
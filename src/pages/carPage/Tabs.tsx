import { useState } from "react";
import { styles } from "../../styles/styles";

type prop = {
    data:string[],
    setstate: React.Dispatch<React.SetStateAction<string>>;
}
const Tabs:React.FC<prop> = (props) => {
    const [selected, setselected] = useState(props.data[0])
    props.setstate(selected)
  return (
    <div className={` bg-[#f6f6f9]  my-4 p-1 grid-cols-1 md:grid-cols-${props.data.length} grid lg:grid-cols-${props.data.length} gap-2`}>
    {props.data.map((item) => (
  <p
    onClick={() => setselected(item)}
    className={`${selected == item ?"bg-white duration-1000 ease-in-out" :''} text-[#5057f4] py-1 px-14 
    rounded-[2.0625rem] text-base not-italic font-normal text-center cursor-pointer leading-[normal] ${styles.flexCenter}`}
  > 
    {item}
  </p>

    ))}
</div>
  )
}

export default Tabs
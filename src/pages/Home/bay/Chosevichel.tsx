import React from "react"
import styles from "../../../styles/styles"
import { vehicleTypes } from "../../../types/Types"

const Chosevichel:React.FC<vehicleTypes> = (props) => {
  return (
    <ul className={`${styles.flexCenter} gap-4 mb-5`}>
    {props.list.map((item: string ,  index: number) => (
      <li
        key={index}
        onClick={() => props.setselected(item)}
        className={`${styles.hover_Link} ${
            props.selected === item ? "after:w-full" : ""
        } `}
      >
        {item}
      </li>
    ))}
  </ul>
  )
}

export default Chosevichel
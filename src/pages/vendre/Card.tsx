import React from "react"
import styles from "../../styles/styles"

type props = {
    titel:string,
    discrption:string
}

const Card:React.FC<props> = (props) => {
  return (
    <div className={`h-[140px] flex-1 p-4 bg-lcui_whiteSoft  rounded-[21px] flex-col ${styles.flexCenter} `}>
        <h1 className="text-3xl font-medium text-lcui_primary tracking-wider">{props.titel} </h1>
        <p className="text-base font-normal">{props.discrption} </p> 
    </div>
  ) 
}

export default Card 
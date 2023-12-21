import { Link } from "react-router-dom"
import styles from "../../../styles/styles"
type props = {
    titel:string,
    discrption:string,
    imgSrc:string,
    icon:React.ReactNode,
    to?:string
}
const CaraAvis_card = (props:props) => {
  return (
    <Link className={`flex text-lcui_black shadow-lcui_shadow9 cursor-pointer rounded-lg h-28 `} to={props.to as string}>
        <div className={`min-w-[123px] bg-lcui_primary100 max-w-[123px] h-full  object-cover ${styles.flexCenter}`}>
            {props.icon ? 
                 <span className="text-xl"> {props.icon} </span>
              :
                <img className="w-full h-full rounded-l-lg" src={props.imgSrc} alt="" />
             }
        </div>
        <div className="m-3">
                {props.titel && <h1 className="text-base font-medium mb-2 leading-5">{props.titel} </h1>}
                {props.discrption && <p className="text-sm font-normal leading-5 ">{props.discrption}</p>}
        </div>

    </Link>
  ) 
}

export default CaraAvis_card
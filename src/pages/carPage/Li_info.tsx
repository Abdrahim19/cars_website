import styles from "../../styles/styles"

const Li_info = (props:{titel:string,id:string ,discrption:string , icon?:React.ReactNode}) => {
  return (
    <li id={props.id} className={`${styles.flexitems} flex-wrap`}>
        <span className="font-medium text-lg leading-6">{props.titel} :</span>
        <span className="font-normal text-base leading-4">{props.discrption} </span>
        {props.icon && <span className="ml-2">{props.icon}</span>}
    </li>
  )
}

export default Li_info 
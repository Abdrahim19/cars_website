import { CiCircleInfo } from "react-icons/ci";
import styles from "../../styles/styles";


type props = {
    price:number
}

const Simulator_modalContainer:React.FC<props> = (props) => {
  return (
    <div className={`bg-lcui_vehiculesilver rounded-lg h-[55px] text-center mb-4 ${styles.flexCenter}`}>
        <p>Dès {props.price} € / mois </p>
        <CiCircleInfo size={20}  />
    </div>
  )
}

export default Simulator_modalContainer
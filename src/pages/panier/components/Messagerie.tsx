import Line from "../../../components/commen/Line"
import Linkwithicon from "../../../components/commen/links/Linkwithicon"
import styles from "../../../styles/styles"
import { FaInfoCircle } from "react-icons/fa";
import Mes_rendez_vous from "./Mes_rendez-vous";


const Messagerie = () => {
  return (
    <div className="p-5 w-full ">
        <div className={`${styles.flexBetween}`}>
    <h1>Ma Messagerie (0)</h1>
    <Linkwithicon icon={<FaInfoCircle />} text={"Évitez les arnaques ! Plus d infos"} />
        </div>
    <Line />
        <p className="text-base mb-2">Vous n’avez aucun message.</p>
        <img src="/no-message-desktop.png" alt="" />
        <Mes_rendez_vous />
</div>
  )
}

export default Messagerie
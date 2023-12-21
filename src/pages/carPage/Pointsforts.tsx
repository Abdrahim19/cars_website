import { AiFillAlert } from "react-icons/ai"
import Linkwithicon from "../../components/commen/links/Linkwithicon"
import { CiCamera } from "react-icons/ci";
import styles from "../../styles/styles"

const Pointsforts = () => {
  return (
    <div>
        <h1 className="mb-2">Points forts</h1>
        <div className={`${styles.flexCards} gap-4`}>
        <Linkwithicon icon={<AiFillAlert />} text={"Energie verte"} />
        <Linkwithicon icon={<CiCamera  />} text={"Caméra de recul"} />
        <Linkwithicon icon={<AiFillAlert />} text={"GPS"} />
        <Linkwithicon icon={<AiFillAlert />} text={"Véhicule récent"} />
        <Linkwithicon icon={<AiFillAlert />} text={"Bluetooth"} />
        <Linkwithicon icon={<AiFillAlert />} text={"Climatisation"} />
        <Linkwithicon icon={<AiFillAlert />} text={"Annonce récente"} />

        </div>
    </div>
  )
}

export default Pointsforts
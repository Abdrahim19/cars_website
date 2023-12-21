import styles from "../../styles/styles"
import { IoCarSportOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import Profilemenu from "../../components/commen/Profilemenu";
import Favoris from "./components/Favoris";
import Line from "../../components/commen/Line";
import Profile from "./components/Profile";
import Annonces from "./components/Annonces";
import Messagerie from "./components/Messagerie";



const Panier = () => {
  return (
    <div className="flex">
      <Profilemenu />
      <Messagerie />
      {/* <Annonces /> */}
      {/* <Profile /> */}
      {/* <section className="w-full p-4">
      <h1 className="font-medium text-base">Mes favoris</h1>
      <p className="font-normal text-sm max-w-3xl my-2">
        Retrouvez ici toutes les annonces que vous avez ajoutées à vos favoris.
        Les annonces qui disparaissent du site sont 
        automatiquement retirées de votre sélection</p>

<div className={`${styles.flexBetween}`}>
  <div className={`${styles.flexCenter} text-lcui_primary gap-2`}>
  <IoCarSportOutline size={25} />
    <p className="text-black">Mes voitures (1)</p>
  </div>
  <AiOutlineDelete size={25} />
</div>
<Line />
<div className="grid grid-cols-1 gap-4">
<Favoris />
<Favoris />
<Favoris />
</div>

      </section> */}
    </div>
  )
}

export default Panier


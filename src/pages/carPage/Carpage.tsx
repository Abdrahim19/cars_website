import Custom_button from "../../components/commen/ui/Custom_button"
import CaradisiacFragmentLcRelatedContent from "../../components/commen/pages/CaradisiacFragmentLcRelatedContent";
import styles from "../../styles/styles";
import Carditals from "./Carditals"
import Carscarsoul from "./Carscarsoul"
import { MdArrowBack } from "react-icons/md";


const Carpage = () => {
  const carsImgs = [
    {
      carImg:'	https://image-annonce.lacentrale.fr/1096x829/E113283932_STANDARD_0.jpg?version=1701443282'
    },
    {
      carImg:'	https://image-annonce.lacentrale.fr/1096x829/E113283932_STANDARD_0.jpg?version=1701443282'
    },
    {
      carImg:'	https://image-annonce.lacentrale.fr/1096x829/E113283932_STANDARD_0.jpg?version=1701443282'
    }
  ]
  return (
    <>
    <div className="fixed bottom-5 right-5">
    <Custom_button type={"submit"} to="/" beforeicon={<MdArrowBack color={'text-black'} />} isOutline isLoading={false}>
      Retour
    </Custom_button>
    </div>
    <div className={`${styles.grid_two_cols} gap-4 mt-4`}>
      <Carscarsoul carsImgs={[]}/>
      <Carditals carImges={"https://image-annonce.lacentrale.fr/352x264/W102834170_STANDARD_0.jpg?version=1701789650"}
     carModel={"2.0 35 150 DESIGN "} carName={"AUDI A4 V "} carPrice={2017} year={2009} garantie={""} Energie={"Diesel"}
     Boite_de_vitesse={"Automatique"} IsCredit={false} Credit={"300"} Kilométrage={"81 613 km"} />
    </div>
    <CaradisiacFragmentLcRelatedContent />
     </>
  )
}

export default Carpage
import { SetStateAction, useState } from "react"
import Chosen from "../ui/Chosen"
import { ArrayofLetters } from "../../../data/ArrayofLetters"
import Line from "../Line"
import styles from "../../../styles/styles"
import Linkwithimg from "../links/Linkwithimg"
import TechnicalLinks from "./TechnicalLinks"
type props = {
    type:'marques' | 'modèles '
}
const TouteMarqueModele = (props:props) => {
    const [selected, setselected] = useState(ArrayofLetters[0])
    console.log(selected);

    
    return (
        <div className={`md:flex items-center gap-4 md:gap-0 justify-between `}>
        <div className={`grid grid-cols-1 w-full md:mr-6 md:pr-6 md:border-r md:border-gray-900 md:w-4/6 `}>
        <h1 className="text-xl font-medium mb-2">Tous les {props.type} de voitures d'occasion</h1>
        <p className="text-sm max-w-xl font-normal">Découvrez tous nos {props.type} de voitures d'occasion classés par ordre alphabétique, et accédez aux annonces de voitures</p>
        <div className={`${styles.flexCards} gap-8 justify-center mt-4`}>
            {ArrayofLetters.map((letter) => (
            <p onClick={() => setselected(letter)} className="text-base capitalize cursor-pointer hover:text-lcui_primary font-normal hover:underline duration-100 m-1" key={letter}>{letter} </p>
            ))}
        </div>
        <Line />
        <div className={`${styles.flexCenter} mx-auto text-center w-10 h-10 gap-4 rounded-full bg-lcui_primary text-white`}>
            <h1 className="text-xl font-normal capitalize">{selected}</h1>
        </div>
        {/* // depanded of the type will fitech date base on that */}
            <div className={`${styles.flexCards} gap-8 justify-center mt-4`}>
                <Linkwithimg srcImg={"https://static.lacentrale.fr/images/lc_fr/logos_marques/auto--abarth.png"} titel="AC (12)" />
                <Linkwithimg srcImg={"https://static.lacentrale.fr/images/lc_fr/logos_marques/auto--abarth.png"} titel="AC (12)" />
                <Linkwithimg srcImg={"https://static.lacentrale.fr/images/lc_fr/logos_marques/auto--abarth.png"} titel="AC (12)" />
                <Linkwithimg srcImg={"https://static.lacentrale.fr/images/lc_fr/logos_marques/auto--abarth.png"} titel="AC (12)" />
                <Linkwithimg srcImg={"https://static.lacentrale.fr/images/lc_fr/logos_marques/auto--abarth.png"} titel="AC (12)" />
                <Linkwithimg srcImg={"https://static.lacentrale.fr/images/lc_fr/logos_marques/auto--abarth.png"} titel="AC (12)" />
                <Linkwithimg srcImg={"https://static.lacentrale.fr/images/lc_fr/logos_marques/auto--abarth.png"} titel="AC (12)" />
                <Linkwithimg srcImg={"https://static.lacentrale.fr/images/lc_fr/logos_marques/auto--abarth.png"} titel="AC (12)" />
                <Linkwithimg srcImg={"https://static.lacentrale.fr/images/lc_fr/logos_marques/auto--abarth.png"} titel="AC (12)" />
                <Linkwithimg srcImg={"https://static.lacentrale.fr/images/lc_fr/logos_marques/auto--abarth.png"} titel="AC (12)" />
                <Linkwithimg srcImg={"https://static.lacentrale.fr/images/lc_fr/logos_marques/auto--abarth.png"} titel="AC (12)" />
                <Linkwithimg srcImg={"https://static.lacentrale.fr/images/lc_fr/logos_marques/auto--abarth.png"} titel="AC (12)" />
                <Linkwithimg srcImg={"https://static.lacentrale.fr/images/lc_fr/logos_marques/auto--abarth.png"} titel="AC (12)" />
                <Linkwithimg srcImg={"https://static.lacentrale.fr/images/lc_fr/logos_marques/auto--abarth.png"} titel="AC (12)" />
                <Linkwithimg srcImg={"https://static.lacentrale.fr/images/lc_fr/logos_marques/auto--abarth.png"} titel="AC (12)" />
                <Linkwithimg srcImg={"https://static.lacentrale.fr/images/lc_fr/logos_marques/auto--abarth.png"} titel="AC (12)" />
                <Linkwithimg srcImg={"https://static.lacentrale.fr/images/lc_fr/logos_marques/auto--abarth.png"} titel="AC (12)" />
                <Linkwithimg srcImg={"https://static.lacentrale.fr/images/lc_fr/logos_marques/auto--abarth.png"} titel="AC (12)" />
                <Linkwithimg srcImg={"https://static.lacentrale.fr/images/lc_fr/logos_marques/auto--abarth.png"} titel="AC (12)" />
                <Linkwithimg srcImg={"https://static.lacentrale.fr/images/lc_fr/logos_marques/auto--abarth.png"} titel="AC (12)" />
                <Linkwithimg srcImg={"https://static.lacentrale.fr/images/lc_fr/logos_marques/auto--abarth.png"} titel="AC (12)" />
                <Linkwithimg srcImg={"https://static.lacentrale.fr/images/lc_fr/logos_marques/auto--abarth.png"} titel="AC (12)" />

            </div>
    </div>
    <TechnicalLinks />
        </div>
  )
}
export default  TouteMarqueModele   
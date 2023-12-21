import Custom_button from "../../components/commen/ui/Custom_button"
import Simulator_modalContainer from "../../components/commen/Simulator_modalContainer"
import styles from "../../styles/styles"
import Li_info from "./Li_info"
import Rangslider from "./Rangslider"

const Financement = () => {
  return (
    <div>
        <h1 className="text-xl leading-5 mb-4 font-medium">Financement</h1>
        <p className="font-normal text-base leading-4">Simulez votre mensualité indicative pour un crédit ou une LOA (Location avec Option d'Achat).</p>
        <section className={`${styles.grid_two_cols} mt-4 w-full`}>
            <div>
                <p className="mb-4 text-center">Crédit</p>

                <Simulator_modalContainer price={134} />
                <Li_info titel={"Apport "} id={"Crédit"} discrption={"22 970 €"} />
                <Rangslider min={0} max={2000} />
                <Li_info titel={"Durée "} id={"Crédit"} discrption={"60 mois"} />
                <Custom_button type={"button"} isLoading={false}>
                Contacter pour un financement
                </Custom_button>
            </div>
            <div className="text-center md:ml-8 md:pl-8 md:border-l md:border-gray-800">
                <p>Location (LOA)</p>
                <div>
                <p className="max-w-xs mb-2">Pour vérifier si la LOA est disponible pour ce véhicule</p>
                <Custom_button type={"submit"}  isLoading={false}>
                Contacter le vendeur
                </Custom_button>
                </div> 
            </div>

        </section>
    </div>
  )
}

export default Financement 
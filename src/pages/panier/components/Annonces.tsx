import Line from "../../../components/commen/Line"
import Custom_button from "../../../components/commen/ui/Custom_button"
import Alertes_prix from "./Alertes_prix"

const Annonces = () => {
  return (
    <>
    <div className="p-5 w-full ">
        <h1>Mes Annonces (0)</h1>
        <Line />
        <div className="flex shadow-lcui_shadow9 flex-col items-center gap-4 pt-4 pb-5 px-4 rounded-lg">
            <p>Vous n’avez pas d’annonces</p>
            <div className="w-fit">
            <Custom_button to="/vander" type={"submit"}  isLoading={false}>
            Déposer une annonce
            </Custom_button>
            </div>
        </div>
    </div>
    <Alertes_prix />
    </>
  )
}

export default Annonces
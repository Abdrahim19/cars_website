import Line from "../../../components/commen/Line"
import Custom_button from "../../../components/commen/ui/Custom_button"

const Mes_rendez_vous = () => {
  return (
    <div className="p-5 w-full ">
    <h1>Mes Rendez-Vous (0)</h1>
    <Line />
    <div className="flex shadow-lcui_shadow9 w-fit mx-auto flex-col items-center gap-4 pt-4 pb-5 px-4 rounded-lg">
        <p>Vous n'avez pas de rendez-vous</p>
        <div className="w-fit">
        <Custom_button to="/vander" type={"submit"}  isLoading={false}>
        Prendre RDV
        </Custom_button>
        </div>
    </div>
</div>
  )
}

export default Mes_rendez_vous
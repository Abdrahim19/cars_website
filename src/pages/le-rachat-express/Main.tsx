import Custom_Input from "../../components/commen/ui/Custem_Input"
import Custom_button from "../../components/commen/ui/Custom_button"
import styles from "../../styles/styles"

const Main = () => {
  return (
    <section className={`${styles.grid_two_cols} items-center w-full gap-[72px] px-8 pt-8 pb-4 rounded-[32px] my-5 bg-[#f6f6f9]`}>
    <div className={`rounded-[2.0625rem] bg-[#f6f6f9] mb-2 grid grid-cols-1 gap-6 p-6 ${styles.flexBetween}`}>
        <Custom_Input name={""} type={"text"}  label="Immatriculation"/>
        <Custom_button type={"submit"} isLoading={false} >
        Estimer ma voiture
        </Custom_button>
    </div>
    <div>
        <h2 className="text-2xl mb-3 font-medium">Vendez votre voiture à un professionnel en 48h</h2>
        <p className="text-base font-normal mb-3">Votre estimation gratuite en moins de 2 minutes</p>
    <img src={`/search_cote_desktop.png`} alt="hero" />
        {/* <Heroimg /> */}
    </div>
</section>
  )
}

export default Main
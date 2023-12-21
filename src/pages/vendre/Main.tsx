import Custom_Input from "../../components/commen/ui/Custem_Input"
import Custom_button from "../../components/commen/ui/Custom_button"
import styles from "../../styles/styles"
import Agreeallterms from "./Agreeallterms"

const Main = () => {
  return (
    <section className={`${styles.grid_two_cols} place-items-center items-center gap-[72px] px-8 pt-8 pb-4 rounded-[32px] my-5 bg-[#f6f6f9]`}>
        <form method="post" className="p-5 rounded-[21px] bg-white
        grid grid-cols-1 gap-6  w-full ">
            <Custom_Input name={""} type={"text"} label="N°immatriculation" />
            <Custom_Input name={""} type={"text"} label="3 derniers caractères du VIN"/>
            <Agreeallterms />
            <Custom_button type={"submit"} isLoading={false}>
            Déposer mon annonce
            </Custom_button>
        </form>
        <div>
        <h1 className="text-4xl mb-3  font-semibold ">Vendez votre véhicule entre particuliers en toute sérénité.</h1>
        <img src={`/venderimg.png`} alt="hero" />
        </div>
    </section>
  )
}
 
export default Main
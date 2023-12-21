import styles from "../../styles/styles"
import Marques from "../Home/Marques"
import Benfites from "./Benfites"
import Model from "../Home/Model"
import { SetStateAction, useState } from "react"
import Chosen from "../../components/commen/ui/Chosen"
import Custom_Input from "../../components/commen/ui/Custem_Input"
import Custom_button from "../../components/commen/ui/Custom_button"
import Link from "../../components/commen/links/Link"
import Select from "react-select/base"

const Lacot = () => {
  const data = ['Immatriculation','Modèle'];
  const [selected, setselected] = useState(data[0]);

  const setselect = ({item}:{item:string}) => {
    setselected(item)
  }
 
  type optiontype = [
    {value: string, label: string}
  ]

  const options = [
    { value: "blues", label: "Blues" },
    { value: "rock", label: "Rock" },
    { value: "jazz", label: "Jazz" },
    { value: "orchestra", label: "Orchestra" },
  ];

  return (
    <>
    <section className={`${styles.grid_two_cols} items-end w-full gap-[72px] px-8 pt-8 pb-4 rounded-[32px] my-5 bg-[#f6f6f9]`}>
        <div className="p-5 rounded-[21px] grid grid-cols-1 gap-2  bg-white">
          <Chosen data={data} setstate={setselected} />
          {selected === "Immatriculation" ?
          <>
          <Custom_Input name={""} type={"text"} label="N° immatriculation" />
          <Custom_Input name={""} type={"text"} label="Kilométrage" />
          <Custom_button type={"submit"}  isLoading={false}>
          Valider
          </Custom_button>
          <div className="text-center">
          <Link link={"Valider Informations légales"} to={""} />
          </div>
          </>
           : 
           <>
        <div className={`grid grid-cols-1 w-full gap-2 mb-2`}>
          <Select
        placeholder="marque"
        isMulti
        name="colors"
        options={options} inputValue={""} onChange={undefined} onInputChange={undefined} onMenuOpen={function (): void {
          throw new Error("Function not implemented.");
        } } onMenuClose={function (): void {
          throw new Error("Function not implemented.");
        } } value={null}          />
          <Select
        placeholder="modlel"
        isMulti
        name="colors"
        options={options} inputValue={""} onChange={undefined} onInputChange={undefined} onMenuOpen={function (): void {
          throw new Error("Function not implemented.");
        } } onMenuClose={function (): void {
          throw new Error("Function not implemented.");
        } } value={null}          />
        <Select
        placeholder="Année de mise en circulation "
        isMulti
        name="colors"
        options={options} inputValue={""} onChange={undefined} onInputChange={undefined} onMenuOpen={function (): void {
          throw new Error("Function not implemented.");
        } } onMenuClose={function (): void {
          throw new Error("Function not implemented.");
        } } value={null}          />
        </div>
        <Custom_button type={"submit"}  isLoading={false}>
          Valider
          </Custom_button>
           </>}
        </div>
        <div>
            <h1 className="text-2xl mb-3 ">
Informations légales
Découvrez gratuitement la valeur de votre véhicule.</h1>
        <img src={`/search_cote_desktop.png`} alt="hero" />
            {/* <Heroimg /> */}
        </div>
    </section>
    <Benfites />
    <Marques />
    <Model />
    </>
  )
}

export default Lacot
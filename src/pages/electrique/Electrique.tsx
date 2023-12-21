import Benfites from "../../components/commen/pages/Benfites"
import { MdOutlineTimelapse } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import { MdOutlineDownloadDone } from "react-icons/md";
import Blogsection from "../../components/commen/ui/Blogsection";
import Hero from "../Home/Hero";
import { SetStateAction, useState } from "react";
import Hilightcars from "../Home/components/Hilightcars";
import Bay from "../Home/bay/Bay";
import styles from "../../styles/styles";
import Chosevichel from "../Home/bay/Chosevichel";
import Select from "react-select/base";
import Custom_button from "../../components/commen/ui/Custom_button";
import { TbMichelinStarGreen } from "react-icons/tb";
import { MdSpeed } from "react-icons/md";
import { MdOutlineFileDownloadDone } from "react-icons/md";




const Electrique = () => {
    const data = ['Voitures', 'Utilitaires']
    const [selected, setselected] = useState(data[0])
  const benfites = [
    {
      icon:<TbMichelinStarGreen />,
      text:'Un catalogue de plus de 49 000 électriques et hybrides d’occasion      '
    },
    {
      icon:<MdSpeed /> ,
      text:'Un comparateur d’autonomie et de consommation en kWh/100 km '
    },
    {
      icon:<MdOutlineFileDownloadDone /> ,
      text:'Des annonces pour tous les budgets '
    },
  ]
  type optiontype = [
    {value: string, label: string}
  ]

  const options = [
    {label:'hamza' , value:'hamza'},
  ];
  return (
    <>
        <section className={`${styles.grid_two_cols} items-center w-full gap-[72px] px-8 pt-8 pb-4 rounded-[32px] my-5 bg-[#f6f6f9]`}>
        <div className="p-5 rounded-[21px] bg-white">
          <Chosevichel list={data} selected={selected} setselected={setselected} />
          <div className={`${styles.grid_two_cols} w-full gap-2 mb-4`}>
      <Select
    isMulti
    name="Marque"
    options={options}
    className="basic-multi-select"
    classNamePrefix="select"
  />
        <Select
        placeholder="modéls"
        isMulti
        name="colors"
        options={options} inputValue={""}  />
      </div>
      {selected === "Motos" && (
        <div className={`${styles.grid_two_cols} w-full gap-2 mb-2`}>
          <Select
        placeholder="Cylindere min"
        isMulti
        name="colors"
        options={options} inputValue={""} onChange={undefined} onInputChange={undefined} onMenuOpen={function (): void {
          throw new Error("Function not implemented.");
        } } onMenuClose={function (): void {
          throw new Error("Function not implemented.");
        } } value={null}          />
          <Select
        placeholder="Cylindere max"
        isMulti
        name="colors"
        options={options} inputValue={""} onChange={undefined} onInputChange={undefined} onMenuOpen={function (): void {
          throw new Error("Function not implemented.");
        } } onMenuClose={function (): void {
          throw new Error("Function not implemented.");
        } } value={null}          />
        </div>
      )}
      <div className={`${styles.grid_two_cols} w-full gap-2 mb-4`}>
        <Select
          placeholder="Prix"
          isMulti
          name="colors"
          options={options} inputValue={""} />
        <Select
          placeholder="Énergie"
          isMulti
          name="colors"
          options={options} inputValue={""}  />
      </div>
            <div className={`${styles.grid_two_cols} w-full gap-2 mb-4`}>
        <Select
          placeholder="Prix"
          isMulti
          name="colors"
          options={options} inputValue={""} />
        <Select
          placeholder="Énergie"
          isMulti
          name="colors"
          options={options} inputValue={""}  />
      </div>
        <Custom_button type={"button"} isLoading={false}>
        Rechercher (17 675)
      </Custom_button>
        </div>
        <div>
            <h1 className="text-2xl mb-3 ">Nous sélectionnons les meilleures voitures d'occasion pour vous.</h1>
        <img src={'/claims_landing_electric.png' ||
         `https://www.lacentrale.fr/fragments/recherche-fragment-front/media/claims_landing_search_desktop.a7bae0d0.png`} alt="hero" />
            {/* <Heroimg /> */}
        </div>
    </section>
    <Benfites imageSrc={"/usp_electric.png"} benefits={benfites} 
    titel={"Votre meilleur allié pour rouler en électrique"} />
    <Hilightcars />
    <Blogsection />
    </>
  )
}

export default Electrique

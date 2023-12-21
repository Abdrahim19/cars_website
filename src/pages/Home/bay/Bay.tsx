import Select from "react-select/base";
import { styles } from "../../../styles/styles";
import Custom_button from "../../../components/commen/ui/Custom_button";
import { useState } from "react";
import Chosevichel from "./Chosevichel";
import MotosTypes from "./MotosTypes";

const Bay = () => {
  const list = ['Voitures','Utilitaires','Motos'];
  const [selected, setselected] = useState('Utilitaires')
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
    <Chosevichel list={list} selected={selected} setselected={setselected}  />
    {selected === 'Motos' && <MotosTypes />}
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
      {selected === "Utilitaires" && (
        <div className={`${styles.grid_two_cols} w-full gap-2 mb-2`}>
          <Select
        placeholder="Enirgie"
        isMulti
        name="colors"
        options={options} inputValue={""} onChange={undefined} onInputChange={undefined} onMenuOpen={function (): void {
          throw new Error("Function not implemented.");
        } } onMenuClose={function (): void {
          throw new Error("Function not implemented.");
        } } value={null}          />
          <Select
        placeholder="localisation"
        isMulti
        name="colors"
        options={options} inputValue={""} onChange={undefined} onInputChange={undefined} onMenuOpen={function (): void {
          throw new Error("Function not implemented.");
        } } onMenuClose={function (): void {
          throw new Error("Function not implemented.");
        } } value={null}          />
        </div>
      )}
      <div className="mt-5">
      <Custom_button type={"button"} isLoading={false}>
        Rechercher (17 675)
      </Custom_button>
      </div>
    </>
  );
};

export default Bay
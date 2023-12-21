import Select from "react-select/base";
import Carinfo from "../../components/commen/cards/Carinfo"
import Mobilebuttons from "./Mobilebuttons";
import Pagination from "./Pagination";

const Filterdproduct = () => {

  type OptionType = {
    value: string;
    label: string;
    onInputChange?: (inputValue: string) => void;
  };

  const options = [
    { value: "blues", label: "Blues" },
    { value: "rock", label: "Rock" },
    { value: "jazz", label: "Jazz" },
    { value: "orchestra", label: "Orchestra" },
  ];
  const handleInputChange = (inputValue: string) => {
    console.log('Input Value:', inputValue);
  };
  const handleChange = (selectedOption: OptionType | null) => {
    console.log(selectedOption);
  };
  return (
     <div className="w-full p-4" id="main-content">
      <div className={`flex items-center md:justify-between justify-center mx-auto w-full flex-wrap mb-6`}>
        <h1>Voiture occasion - 314 839 annonces</h1>
        <Select className="mt-3 md:mt-0" options={options} placeholder='Le choix La Centrale' inputValue={""} onChange={handleChange} onMenuOpen={function (): void {
          throw new Error("Function not implemented.");
        } } onMenuClose={function (): void {
          throw new Error("Function not implemented.");
        } } value={null} onInputChange={handleInputChange} />
      </div>
      <Mobilebuttons />
      <div className={`w-full grid-cols-1 md:grid-cols-2 gap-4 grid lg:grid-cols-3`}>
        <Carinfo carImges={"https://image-annonce.lacentrale.fr/352x264/W102834170_STANDARD_0.jpg?version=1701789650"}
     carModel={"2.0 35 150 DESIGN "} carName={"AUDI A4 V "} carPrice={2017} year={2009} garantie={""} Energie={"Diesel"}
     Boite_de_vitesse={"Automatique"} IsCredit={false} Credit={"300"} Kilométrage={"81 613 km"} />
         <Carinfo carImges={"https://image-annonce.lacentrale.fr/352x264/W102834170_STANDARD_0.jpg?version=1701789650"}
     carModel={"2.0 35 150 DESIGN "} carName={"AUDI A4 V "} carPrice={2017} year={2009} garantie={""} Energie={"Diesel"}
     Boite_de_vitesse={"Automatique"} IsCredit={false} Credit={"300"} Kilométrage={"81 613 km"} />
         <Carinfo carImges={"https://image-annonce.lacentrale.fr/352x264/W102834170_STANDARD_0.jpg?version=1701789650"}
     carModel={"2.0 35 150 DESIGN "} carName={"AUDI A4 V "} carPrice={2017} year={2009} garantie={""} Energie={"Diesel"}
     Boite_de_vitesse={"Automatique"} IsCredit={false} Credit={"300"} Kilométrage={"81 613 km"} />
     <Carinfo carImges={"https://image-annonce.lacentrale.fr/352x264/W102834170_STANDARD_0.jpg?version=1701789650"}
     carModel={"2.0 35 150 DESIGN "} carName={"AUDI A4 V "} carPrice={2017} year={2009} garantie={""} Energie={"Diesel"}
     Boite_de_vitesse={"Automatique"} IsCredit={false} Credit={"300"} Kilométrage={"81 613 km"} />
    </div>

<Pagination />

    </div>
  )
}

export default Filterdproduct
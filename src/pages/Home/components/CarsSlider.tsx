import Carinfo from "../../../components/commen/cards/Carinfo";

const CarsSlider = () => {
  return (
    <div className={`w-full grid-cols-1 md:grid-cols-3 gap-4 grid lg:grid-cols-4`}>
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

  );
};

export default CarsSlider;
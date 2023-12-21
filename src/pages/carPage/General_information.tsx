import Line from "../../components/commen/Line";
import Entretien from "./Entretien";
import Garantie from "./Garantie";
import Li_info from "./Li_info";
import { IoSpeedometerOutline } from "react-icons/io5";
import Equipements from "./Équipements";
import Financement from "./Financement";


const General_information = () => {
  // Car information data
  const carInformation = [
    {
      title: "Marque",
      id: "marque",
      description: "Nissan",
      icon: undefined
    },
    {
      title: "Modèle",
      id: "modele",
      description: "Qashqai",
      icon: undefined
    },
    {
      title: "Motorisation",
      id: "motorisation",
      description: "1.3 DIG-T MHEV",
      icon: undefined
    },
    {
      title: "Puissance",
      id: "puissance",
      description: "140CH",
      icon: undefined
    },
    {
      title: "Transmission",
      id: "transmission",
      description: "Manuelle",
      icon: <IoSpeedometerOutline size={20} color='#CCC'/>
    },
  ];

  return (
    <div id="General_information">
      <h1>Informations générales</h1>
      <p>NISSAN QASHQAI N-CONNECTA 1.3 DIG-T MHEV 140CH MANUELLE</p>
      <div className="grid grid-cols-[1fr_1fr] gap-6 mt-5">
        <section>
          <h1 className="text-lg font-medium leading-5">Caractéristiques</h1>
          <ul className="grid grid-cols-1 mt-2 gap-2">
            {carInformation.map((info, index) => (
              <Li_info
                key={index}
                titel={info.title}
                id={info.id}
                discrption={info.description}
                icon={info.icon}
              />
            ))}
          </ul>
        </section>
        <section>
          <h1 className="text-lg font-medium leading-5">Batterie du véhicule</h1>
          <p className="text-gray-300 text-base my-3">Aucune donnée disponible</p>
          <ul className="grid grid-cols-1 mt-2 gap-2">
            {carInformation.map((info, index) => (
              <Li_info
                key={index}
                titel={info.title}
                id={info.id}
                discrption={info.description}
                icon={info.icon}
              />
            ))}
          </ul>
        </section>
      </div>
      <Line />
      <Garantie durtion={12} />
      <Line />
      <Entretien />
      <Line />
      <Equipements />
      <Financement />
    </div>
  );
};

export default General_information;
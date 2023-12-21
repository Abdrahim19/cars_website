import Linkwithicon from "../../components/commen/links/Linkwithicon";
import { IoMdEye } from "react-icons/io";
import { CiCamera } from "react-icons/ci";
import { MdCreate } from "react-icons/md";
import { CiLock } from "react-icons/ci";

const Befites_Vander = () => {
  return (
    <section className="md:flex justify-around items-center">
      <div className="mb-4 md:mb-0">
        <img src="/usp_sell.png" alt="" />
      </div>
      <div>
        <h2 className="text-2xl mb-4 font-semibo gap-4ld">Nos annonces pleines d’avantages</h2>
        <ul className="flex flex-col gap-4 justify-end">
          <Linkwithicon icon={<IoMdEye />} text="Gratuites : bénéficiez d’une visibilité maximale, sans rien payer" />
          <Linkwithicon icon={<CiCamera />} text="Pratiques : publiez jusqu'à 50 photos et mettez en valeur votre véhicule" />
          <Linkwithicon icon={<MdCreate />} text="Flexibles : modifiez votre annonce autant de fois que vous le souhaitez" />
          <Linkwithicon icon={<CiLock />} text="Sûres : préservez votre anonymat, vos coordonnées n’apparaissent jamais" />
        </ul>
      </div>
    </section>
  );
};

export default Befites_Vander;
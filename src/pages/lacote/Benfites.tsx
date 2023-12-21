import { CiCamera, CiLock } from "react-icons/ci"
import { IoMdEye } from "react-icons/io"
import { MdCreate } from "react-icons/md"
import Linkwithicon from "../../components/commen/links/Linkwithicon"
import { IoDocumentTextOutline } from "react-icons/io5";
import { CiRedo } from "react-icons/ci";



const Benfites = () => {
  return (
    <section className="md:flex justify-around items-center">
      <div className="mb-4 md:mb-0">
        <img src="/usp_cote.png" alt="" />
      </div>
      <div>
        <h2 className="text-2xl mb-4 font-semibo gap-4ld">Notre cote, la référence</h2>
        <ul className="flex flex-col gap-4 justify-end">
          <Linkwithicon icon={<IoMdEye />} text="Un argus gratuit et instantané" />
          <Linkwithicon icon={<IoDocumentTextOutline />} text="20 millions d’estimations par an" />
          <Linkwithicon icon={<CiRedo />} text="Mise à jour en temps réel selon les évolutions du marché" />
          <Linkwithicon icon={<CiLock />} text="Calculée grâce au modèle statistique de nos ingénieurs" />
        </ul>
      </div>
    </section>
  )
}

export default Benfites
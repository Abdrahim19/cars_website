import Reasons from "../../components/commen/pages/Reasons"
import Benfites from "../../components/commen/pages/Benfites"
import { MdOutlineTimelapse } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import { MdOutlineDownloadDone } from "react-icons/md";
import Main from "./Main"
import Blogsection from "../../components/commen/ui/Blogsection";
import Fqo from "../vendre/Fqo";

const Le_rachat_express = () => {
  const rachat_express = [
    {
      titel:'300',
      discrption:'professionnels agréés par La Centrale '
    },
    {
      titel:'+ de 70 000 ',
      discrption:'clients nous ont choisi '
    },
    {
      titel:'+ de 90 % ',
      discrption:'d utilisateurs satisfaits '
    },
  ]

  const benfites = [
    {
      icon:<MdOutlineTimelapse /> ,
      text:'Rapide : Recevez une offre de rachat ferme sous 48h '
    },
    {
      icon:<GrUserWorker /> ,
      text:'Facile : Confiez à l acheteur pro toutes les démarches administratives'
    },
    {
      icon:<MdOutlineDownloadDone /> ,
      text:'Sûr : Recevez un paiement rapide et sécurisé'
    },
  ]
  return (
    <>
    <Main />
    <Reasons titel="Confiez-nous votre véhicule les yeux fermés" date={rachat_express} />
    <Benfites imageSrc={"/usp_cote.png"} benefits={benfites} titel={"Les avantages du Rachat Express"} />
    <Blogsection />
    <Fqo />
    </>
  )
}

export default Le_rachat_express

// my api key 3482846c26724730ac49bfcdfcf78933

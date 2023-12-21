import { useState } from "react";
import Hero from "../Home/Hero";
import Benfites from "../../components/commen/pages/Benfites";
import { GrUserWorker } from "react-icons/gr";
import { MdOutlineTimelapse, MdOutlineDownloadDone } from "react-icons/md";
import { RiPriceTag3Fill } from "react-icons/ri";

import { BsCalendar3Week } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";

import Hilightcars from "../Home/components/Hilightcars";
import { RiListSettingsLine } from "react-icons/ri";
import Blogsection from "../../components/commen/ui/Blogsection";





const Financement = () => {
  const data = ['Acheter' , 'Vendre'];
  const [selected, setselected] = useState<string>(data[0])
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
      icon:<RiListSettingsLine /> ,
      text:'  Personnalisez votre situation (apport, durée,...) '
    },
    {
      icon:<BsCalendar3Week /> ,
      text:'  Planifiez vos futures mensualités '
    },
    {
      icon:<IoDocumentTextOutline /> ,
      text:'  Demandez des prestations sur mesure '
    },
    {
      icon:<RiPriceTag3Fill />,
      text:'  Maîtrisez votre budget en toute sérénité      '
    },
  ]
  return (
    <>
    <Hero data={data} selected = {selected} setselected = {setselected}   />
    <div className="my-14">
    <Benfites imageSrc={"https://www.lacentrale.fr/static/fragment-landing/media/usp_financing_moto.b32b7d30.png"}
     titel={"Notre simulateur de prêt intuitif"} benefits={benfites} />
     </div>
    <Hilightcars />
    <Blogsection />
    </>
  )
}

export default Financement
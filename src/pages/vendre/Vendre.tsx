import Befites_Vander from "./Befites"
import Fqo from "./Fqo"
import How from "./How"
import Main from "./Main"
import Reasons from "../../components/commen/pages/Reasons"

const Vendre = () => {
  const reasons= [
    {
      titel: "5 min", discrption: "pour publier une annonce"
    },
    {
      titel: "+ de 90%", discrption: "d’utilisateurs satisfaits"
    },
    {
      titel: "+ 12 000", discrption: "véhicules vendus par mois entre particuliers"
    },
  ]
  {/* <Card  />
<Card />
<Card  /> */}
  return (
    <>
    <Main />
    <Reasons titel={"Nos annonces pleines d’avantages"} date={reasons} />
    <Befites_Vander />
    <How />
    <Fqo />
    </>
  )
}

export default Vendre
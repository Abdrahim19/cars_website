import styles from "../../../styles/styles"
import Card from "../../../pages/vendre/Card"

type props = {
  titel:string,
  date:{
    titel:string, discrption:string}[]
}

const Reasons = ({titel , date}:props) => {
  return (
    <div className={`mx-auto my-8 text-center`}>
      <h1 className="text-xl font-medium mb-4">{titel}</h1>
      <div className={`${styles.flexCards} gap-8`}>
        {date.map((item) => (
          <Card key={item.titel} titel={item.titel} discrption={item.discrption} />
          ))}
      </div>
    </div>
  )
}

export default Reasons 


{/* <Card titel={"5 min"} discrption={"pour publier une annonce"} />
<Card titel={"+ de 90%"} discrption={"d’utilisateurs satisfaits"} />
<Card titel={"+ 12 000"} discrption={"véhicules vendus par mois entre particuliers"} /> */}
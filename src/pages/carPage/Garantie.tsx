import Li_info from "./Li_info"

const Garantie = (props:{durtion:12|6|24|18}) => {
  return (
    <div>
      <h1>Garantie</h1>
      <Li_info titel={"Garantie"} id={""} discrption={`${props.durtion} mois` } />
    </div>
  )
}

export default Garantie
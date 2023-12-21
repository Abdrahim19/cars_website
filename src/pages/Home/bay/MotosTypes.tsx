import { useState } from "react"
import Chosen from "../../../components/commen/ui/Chosen"

const MotosTypes = () => {
  const [selected, setselected] = useState('')
  console.log(selected);
  
  return (
    <Chosen setstate={setselected} data={['Motos' , 'Scooter' , 'Quad']} />
  )
}

export default MotosTypes
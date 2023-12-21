import { useState } from "react"
import Chosen from "../../../components/commen/ui/Chosen"
import Ckeckbox from "../../../components/commen/ui/Ckeckbox"
import Custom_Input from "../../../components/commen/ui/Custem_Input"

const PrixesDrowdown = () => {
  const [selected, setselected] = useState('Prix')

  return (
    <div>
        <Chosen data={['Prix', 'Mensualité']} setstate={setselected} />
        <div className={`grid grid-cols-1 gap-4 place-items-center max-w-full `}>
            <Custom_Input name={""} type={"text"} label={"Mensualité min"} />
            <Custom_Input name={""} type={"text"} label={"Mensualité max"} />
        </div>
        <Ckeckbox title={"Indicateur prix"} checkboxs={['Très bonne affaire' , 'Bonne affaire' , 'Offre équitable']} />
    </div>
  )
}

export default PrixesDrowdown
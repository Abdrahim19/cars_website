import Ckeckbox from "../../../components/commen/ui/Ckeckbox"

const CouleursNestedlink = () => {
  return (
    <div className="flex flex-col gap-1 -mr-10">
    <Ckeckbox title={"Couleurs extérieur"} checkboxs={['Argent','Beige','Blanc']} />
    <Ckeckbox title={"Couleurs intérieur"} checkboxs={['Beige','Blanc','Bleu']} />
    </div>

  )
}

export default CouleursNestedlink
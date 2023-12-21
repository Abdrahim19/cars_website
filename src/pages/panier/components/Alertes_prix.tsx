import Line from "../../../components/commen/Line"
import styles from "../../../styles/styles"

const Alertes_prix = () => {
  return (
    <div className="p-5 w-full ">
        <h1>Mes alertes prix (0)</h1>
        <Line />
        <div className={`${styles.flexitems} flex-col gap-4 pt-4 pb-5 px-4`}>
            <p>Aucune alerte prix</p>
        </div>
    </div>
  )
}

export default Alertes_prix
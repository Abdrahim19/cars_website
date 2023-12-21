import Counter from "../../../components/commen/ui/Counter"
import styles from "../../../styles/styles"

const Places_PortesNestedsidebar = () => {
  return (
    <>
    <div className={`my-4 ${styles.flexBetween}`}>
        <p>Places</p>
        <Counter />
    </div>
    <div className={`${styles.flexBetween}`}>
        <p>Portes</p>
        <Counter />
    </div>
    </>
  )
}

export default Places_PortesNestedsidebar
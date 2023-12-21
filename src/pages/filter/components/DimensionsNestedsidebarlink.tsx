import Custom_Input from "../../../components/commen/ui/Custem_Input"
import styles from "../../../styles/styles"

const DimensionsNestedsidebarlink = () => {
  return (
    <div className={`${styles.flexCenter} gap-4 flex-col my-3`}>
        <Custom_Input name={""} type={"text"} label="L max" />
        <Custom_Input name={""} type={"text"} label="l max" />
        <Custom_Input name={""} type={"text"} label="H max" />
        <h1 className="my-1 text-base font-normal">Volume de coffre</h1>
        <Custom_Input name={""} type={"text"} label="Volume min" />

    </div>
  )
}

export default DimensionsNestedsidebarlink
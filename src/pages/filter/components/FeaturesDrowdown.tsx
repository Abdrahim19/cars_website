import Custom_Input from "../../../components/commen/ui/Custem_Input"

const FeaturesDrowdown = () => {
  return (
    <div className="my-2 max-w-full gap-4 grid grid-cols-1 place-items-center">
        <h1>Année</h1>
            <Custom_Input name={""} type={"text"} label={"Année min"} />
            <Custom_Input name={""} type={"text"} label={"Année max"} />
        <h1>Kilométrage</h1>
            <Custom_Input name={""} type={"text"} label={"Km min"} />
            <Custom_Input name={""} type={"text"} label={"Km max"} />
    </div>
  )
}

export default FeaturesDrowdown
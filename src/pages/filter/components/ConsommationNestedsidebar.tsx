import Custom_Input from "../../../components/commen/ui/Custem_Input"

const ConsommationNestedsidebar = () => {
  return (
    <div className="my-2 max-w-full gap-4 grid grid-cols-1 place-items-center">
      <h1 className="mb-2 text-base">Emission de CO2</h1>
      <Custom_Input name={""} type={"text"} label={"CO2 min"} />
      <Custom_Input name={""} type={"text"} label={"CO2 max"} />
    </div>
  )
}

export default ConsommationNestedsidebar
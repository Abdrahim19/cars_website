import Custom_Input from "../../../components/commen/ui/Custem_Input"
import Switcher from "../../../components/commen/Switcher"

const PerformancesNestedsidebar = () => {
  return (
    <>
    <div className="my-2 max-w-full gap-4 grid grid-cols-1 place-items-center">
      <Custom_Input name={""} type={"text"} label={"ficale min"} />
      <Custom_Input name={""} type={"text"} label={"ficale max"} />
      <Custom_Input name={""} type={"text"} label={"DIN (ch) min"} />
      <Custom_Input name={""} type={"text"} label={"DIN (ch) max"} />
    </div>
      <Switcher titel={"4 roues motrices"} />
    </>
  )
}

export default PerformancesNestedsidebar
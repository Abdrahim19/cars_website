import { gander } from "../../../types/Types"

const Chosegander = (data:gander) => {
  return (
    <div className="main flex border rounded-full overflow-hidden m-4 select-none">
    <div className="title py-3 my-auto px-5 bg-blue-500 text-white text-sm font-semibold mr-3">Gender</div>
    {data.data.slice(0.2).map((G) => (
    <label key={G.label} className="flex radio p-2 cursor-pointer">
      <input className="my-auto transform scale-125" type="radio" name="sfg" />
      <div className="title px-2">{G.value}</div>
    </label>
    ))}  
    <label className="flex radio p-2 cursor-pointer font-extralight text-xs">
      <input className="my-auto transform scale-125" type="checkbox" name="sfg" checked />
      <div className="title px-2 my-auto">show public</div>
    </label>
  </div>
  )
}

export default Chosegander
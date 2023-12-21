import styles from "../../../styles/styles"

type props = {
    srcImg:string,
    titel:string
}
const Linkwithimg = (props:props) => {
  return (
    <div className={`${styles.flexitems} gap-2 py-2 max-w-7xl px-2 rounded-md group text-center cursor-pointer hover:bg-lcui_primary  duration-150`}>
        <img className="w-6 h-6 group-hover:text-white" src={props.srcImg} alt="srcImg" />
        <p className="text-lg font-medium">{props.titel}</p>
    </div>
  )
}
 
export default Linkwithimg 
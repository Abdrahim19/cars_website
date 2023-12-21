import Custom_button from "../../components/commen/ui/Custom_button"
import styles from "../../styles/styles"
import { Cartype } from "../../types/Types"
import { IoCallOutline } from "react-icons/io5";
import { TbMessage } from "react-icons/tb";



const Carditals:React.FC<Cartype> = (props) => {
  return (
    <div className="pt-4 pb-5 px-4 text-center rounded-[21px] bg-white 
    shadow-lcui_shadow9 h-fit">
      <h3>{props.carName}</h3>
      <p>{props.carModel}</p>
      <div className="my-1">
      <span className="text-lcui_vehiculeblack  mr-1 pr-1 border-r border-lcui_vehiculeblack">{props.year} </span>
      <span className="text-lcui_vehiculeblack mr-1 pr-1 border-r border-lcui_vehiculeblack">{props.Kilométrage} </span>
      <span className="text-lcui_vehiculeblack mr-1 pr-1 border-r border-lcui_vehiculeblack">{props.Boite_de_vitesse} </span>
      <span className="text-lcui_vehiculeblack ">{props.Energie } </span>
      </div>
      <div className={`${styles.flexBetween}`}>
      <p className="my-2 underline duration-150 hover:text-opacity-40 font-normal">{props.carPrice} € </p>
        <p className=" my-4">Publiée il y a 18 jours</p>
      </div>
      <div className="md:flex-row flex flex-col gap-2 items-center">
        <Custom_button beforeicon={<IoCallOutline color='text-lcui_vehiculeblue border-2 border-white' /> } type={"button"} isLoading={false}>
        N° téléphone
        </Custom_button>
        <Custom_button beforeicon={<TbMessage color='text-lcui_vehiculeblue border-2 border-white' /> } type={"button"} isLoading={false}>
        Message
        </Custom_button>
      </div>

    </div>
  )
}

export default Carditals
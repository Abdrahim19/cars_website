import React from "react"
import { Cartype } from "../../../types/Types"
import Custom_button from "../ui/Custom_button"
import { BsHeart } from "react-icons/bs";
import Offerslinks from "../links/Offerslinks";
import { useLocation } from 'react-router-dom';




const Carinfo:React.FC<Cartype> = (props) => {
    let location = useLocation();
  return (
    <div  className="mx-auto w-fit transform text-left overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
        <span className="absolute top-2 cursor-pointer right-2 p-2 rounded-full bg-lcui_white text-xl">
        {React.createElement(BsHeart)}</span>
        <img className="h-48 w-full object-cover object-center"  src={props.carImges} alt="product image" />
    <div className="px-5 pb-5">
                <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
                    {props.carName}</h3>
                <h4 className="text-gray-400 font-semibold text-base tracking-tight dark:text-white">
                    {props.carModel}</h4>
                    <div className="py-3  border-b border-lcui_veil_black">
                        <span className="text-lcui_vehiculeblack mr-1 pr-1 border-r border-lcui_vehiculeblack">{props.year} </span>
                        <span className="text-lcui_vehiculeblack mr-1 pr-1 border-r border-lcui_vehiculeblack">{props.Kilométrage} </span>
                        <span className="text-lcui_vehiculeblack mr-1 pr-1 border-r border-lcui_vehiculeblack">{props.Boite_de_vitesse} </span>
                        <span className="text-lcui_vehiculeblack ">{props.Energie } </span>
                    </div>
                    <p className="my-2 text-left">{props.carPrice} € 
                        {props.IsCredit && <span>ou des {props.Credit}€ / moin</span>}
                    </p>
                    {location.pathname !== '/' && <div className="flex gap-2 items-center w-full flex-wrap ">
                    <Offerslinks type={"Garantie"} garantie={24} />
                    <Offerslinks type={"Offre équitable"} />
                    <Offerslinks type={"Livraison"} />
                    </div>}
                    {location.pathname !== '/' && <hr className="h-[1.5px] w-full bg-gray-400 my-2" />}
                    <div className='w-full mx-auto'>
                    <Custom_button type={"submit"}  isLoading={false}>
                    Voir l'annonce
                    </Custom_button>
                    </div>
    </div>
</div >
  )
}

export default Carinfo
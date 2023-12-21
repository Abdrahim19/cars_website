import { IoPersonCircleSharp } from "react-icons/io5"
import Profilemenu from "./Profilemenu"
import { profilemenu } from "../../data/profilemenu"

type props = {
    onClick?: ()=> void
    Showstate:boolean
}

const Usericon = ({onClick , Showstate}:props) => {
  return (
    <div onClick={onClick} className="relative">
        <IoPersonCircleSharp className='cursor-pointer' size={30} />
        <Profilemenu profilemenu={profilemenu} Isopen = {Showstate}/>
    </div>
  )
}

export default Usericon
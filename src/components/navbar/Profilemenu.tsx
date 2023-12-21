import { Link } from "react-router-dom";

 
type props = {
    profilemenu:{name: string;link: string;}[]
    Isopen:boolean
}

const Profilemenu = ({profilemenu , Isopen}:props) => {
  return (
    <ul className={`${Isopen ? 'opacity-100' : 'opacity-0'} absolute transition-opacity delay-200 right-0 origin-top-right duration-150  z-20 w-48 py-2 mt-2  bg-white rounded-md shadow-xl dark:bg-gray-800`}>
        {profilemenu.map((menu) => (

<Link to={menu.link} className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300
 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">{menu.name}</Link>
        ))}

    </ul>

  )

  
  
}

export default Profilemenu
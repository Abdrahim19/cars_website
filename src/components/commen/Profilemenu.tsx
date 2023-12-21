import { Link } from "react-router-dom"
import { profilemenu } from "../../data/profilemenu"
import { IoIosLogOut } from "react-icons/io";
import styles from "../../styles/styles";


const Profilemenu = () => {
  return (
    <section className="flex gap-4">
    <div
      className={`bg-white border-r-2  min-h-screen text-lcui_danger w-72 overflow-hidden
      } duration-500  px-4`}
    >
      <div className={`grid grid-cols-1 gap-2 mt-4 relative`}>
        {profilemenu.map((menu, i) => (
          <Link className={`${menu.name === 'Se déconnecter' ? 'text-lcui_danger' : ''} py-2 px-8
           text-gray-400  ${styles.flexitems}  gap-2 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100`} key={i} to={menu.link}>
            {menu.name === 'Se déconnecter' ? <IoIosLogOut size={25}/> : false}
            {menu.name}
          </Link>
        ))}
      </div>
    </div>
  </section>
  ) 
}

export default Profilemenu
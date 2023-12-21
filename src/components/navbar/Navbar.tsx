import  { useCallback, useMemo, useState } from 'react';
import styles from '../../styles/styles';
import { navlinks } from '../../data/navlinks';
import { CiHeart , CiSearch , CiMenuFries } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";
import Navbarmenu from './Navbarmenu';
import { Link, useNavigate } from 'react-router-dom';
import Custemlink from "../commen/links/Link";
import Usericon from './Usericon';





const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [Isopen, setIsopen] = useState(false)
    const Navigate  = useNavigate()

    const handleClick = useCallback(() => {
      setToggle((prevToggle) => !prevToggle);
    }, []);
    const memoizedHandleClick = useMemo(() => handleClick, [handleClick]);

    console.log(toggle);

    const handeluseclick = () => {
      setIsopen(() => !Isopen)
    }
    
  

  return (
    <nav className={`${styles.flexBetween} sticky transition-all duration-500 ease-in h-[72px]`}>
      <section className={`${styles.flexitems}`}>
        {toggle ? <MdOutlineClose onClick = {memoizedHandleClick} size={35} className = 'cursur-pointer lg:hidden mr-2' /> 
        :<CiMenuFries onClick = {memoizedHandleClick} size={30} className = 'cursur-pointer lg:hidden mr-2' /> }
    <Link to='/' className='text-3xl font-bold text-[#00df9a] mr-4'>
      REACT.</Link>
    {/* <img src="logo.svg" alt="site_logo" /> */}
    <ul className={`xl:flex hidden items-center`}>
        {navlinks.map(navlink => (
          <Custemlink link={navlink.name} to={navlink.link} />
        ))} 
    </ul>
    <Navbarmenu state={toggle} />
      </section>
    <div className={`${styles.flexitems} gap-1`}>
    <CiSearch onClick={() => Navigate('listing')} className='cursor-pointer' size={30} />
    <CiHeart  onClick={() => Navigate('panier')} className='cursor-pointer' size={30} />
    <Usericon onClick={handeluseclick} Showstate={Isopen} />
    </div>
    </nav>
  )
}

export default Navbar 
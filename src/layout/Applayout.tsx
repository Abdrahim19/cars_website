import { Outlet } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Navbar from "../components/navbar/Navbar"
import ScrollToTop from "../utils/ScrollToTop"
import { useEffect, useState } from "react"

const Applayout = () => {
  const [loaded, setLoaded] = useState(false);
useEffect(() => {
window.addEventListener('load',() => setLoaded(true))
} , [loaded])
  return (
  <div className={`max-w-[1200px] duration-200 transition-opacity  mx-auto my-0 px-4 py-0 
  ${loaded ? "-translate-x-[100px]" : "opacity-100 translate-x-0" }`}>
  <ScrollToTop />
  <Navbar/>,
  <Outlet />
  <Footer />
  </div>
  )
}

export default Applayout

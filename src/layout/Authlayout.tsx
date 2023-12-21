import { Outlet } from "react-router-dom"

const Authlayout = () => {
  return (
    <div className="flex  w-full h-screen bg-lcui_whiteSoft">
      <div  className="hidden lg:flex items-center justify-center w-full bg-white text-black">
        <img src="/authimg.jpg" className="h-full" alt="authimg" />
      </div>
  <div className={`grid place-items-center w-full`}>
    <Outlet />
  </div>
</div> 
    // <div className={`${styles.center_grid} `}>
    //   <img src="/vehicle.svg" className="-mt-28 " alt="" />
    // </div>
  )
}

export default Authlayout
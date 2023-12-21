import styles from "../../../styles/styles"
import { Cartype } from "../../../types/Types"

const Favoris = () => {
  return (
    <div className="md:flex items-strech">
    <div className="md:w-4/12 2xl:w-1/4 w-full">
      <img src="https://i.ibb.co/SX762kX/Rectangle-36-1.png" alt="Black Leather Bag" className="h-full object-center object-cover md:block hidden" />
      <img src="https://i.ibb.co/g9xsdCM/Rectangle-37.pngg" alt="Black Leather Bag" className="md:hidden w-full h-full object-center object-cover" />
    </div>
    <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
      <p className="text-base mb-4 leading-3 text-gray-800 dark:text-white md:pt-0 pt-4">RF293</p>
      <div className="flex items-center justify-between w-full pt-1">
        <p className="text-xl font-black leading-none text-gray-800 dark:text-white">North wolf bag</p>
      </div>
      <p className="text-base leading-3 text-gray-600 dark:text-white my-4">Garantie 12 mois</p>
      <div className={`${styles.flexitems}`}>
        <span className="mr-2 text-base leading-3 text-gray-600 dark:text-white pr-2 border-r border-gray-700">2011</span>
        <span className="text-base leading-3 text-gray-600 dark:text-white">
        17 000 km
        </span>
      </div>
      <div className="flex items-center justify-between pt-5">
        <div className="flex itemms-center text-lg">
          <p className="leading-3 underline text-gray-800 dark:text-white cursor-pointer">Add to Cart</p>
          <p className="leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
        </div>
        <p className="text-base font-black leading-none text-gray-800 dark:text-white">1,000 $</p>
      </div>
    </div>
  </div>
  )
}

export default Favoris


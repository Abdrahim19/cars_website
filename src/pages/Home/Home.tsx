import { useState } from "react"
import Hero from "./Hero"
import Ideal from "./Ideal";
import Dmaned from "./Dmaned";
import Marques from "./Marques";
import Model from "./Model";
import Hilightcars from "./components/Hilightcars";
import Benfites from "../../components/commen/pages/Benfites";
import Blogsection from "../../components/commen/ui/Blogsection";

const Home = () => {
  const data = ['Acheter' , 'Vendre'];

  

  const [selected, setselected] = useState<string>(data[0])
  return (
    <>
    <Hero data={data} selected = {selected} setselected = {setselected}   />
    <Ideal />
    <Dmaned />
    <Marques />
    <Benfites imageSrc={""} titel={""} benefits={[]} />
    <Model />
    <Blogsection />
    <Hilightcars />
    </>
  )
}

export default Home
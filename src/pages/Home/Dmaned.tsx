import SectionTitle from "../../components/commen/Sectiontitel"
import Commencard from "../../components/commen/cards/Commencard"

const Dmaned = () => {
  return (
    <section className="my-6 ">
    <SectionTitle title={"Les modèles les plus demandés "}  to="occasion-voiture"/>
    <section className={`grid grid-cols-2 place-items-center md:grid-cols-4 lg:grid-cols-6 gap-4`}>
      <Commencard Name={""} img={""} />
      <Commencard Name={""} img={""} />
      <Commencard Name={""} img={""} />
      <Commencard Name={""} img={""} />
      <Commencard Name={""} img={""} />
      <Commencard Name={""} img={""} />
    </section>
    </section>
  )
}

export default Dmaned
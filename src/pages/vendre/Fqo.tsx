import { useState } from "react";
import { questions } from "../../data/questions";
import styles from "../../styles/styles"
import SingleQuestion from "./SingleQuestion";
import { Link } from "react-router-dom";

const Fqo = () => {
    const [cards] = useState(questions);
  return (
    <section className={`${styles.grid_two_cols} place-items-center items-center w-full gap-[72px] px-8 pt-8 pb-4 rounded-[32px] my-5`}>
    <div className="text-center w-full mx-auto mb-2">
        <h1 className="text-2xl max-w-2xl font-medium ">Les questions les plus posées</h1>
        <p className="text-xl font-normal mt-4 mb-2">Une question ? Nous avons la réponse</p>
        <section className="grid grid-cols-1 gap-2">
          {cards.map((card, index) => (
            <SingleQuestion {...card} key={index} />
          ))}
          <Link className="text-base text-lcui_primary text-center my-4 underline" to=''>Lire toutes les questions</Link>
        </section>
    </div>
    <div className="p-5 rounded-[21px] bg-white place-items-center grid grid-cols-1 gap-6">
    <img src={`/faq_sell.png`} alt="hero" />
    </div>
</section>
  )
}

export default Fqo
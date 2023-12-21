import styles from "../../styles/styles"

const How = () => {
    const steps = [
        {
          text: "Register for free on La Centrale by creating your account",
        },
        {
          text: "Simply enter your registration and all vehicle information is automatically added.",
        },
        {
          text: "Download the most beautiful photos of your car to show it off.",
        },
        {
          text: "Proofread, publish, sell!",
        },
      ];
  return (
    <section className={`${styles.grid_two_cols} place-items-center items-center w-full gap-[72px] px-8 pt-8 pb-4 rounded-[32px] my-5 bg-[#f6f6f9]`}>
        <div>
            <h1 className="text-2xl max-w-2xl font-medium ">How to create your ad on La Centrale?</h1>
            <p className="text-xl font-normal mt-4 mb-2">Nothing easier :</p>
            <ul className="my-4 flex flex-col gap-2">
                {steps.map((item , i:number) => (
                    <li key={i}>
                        <span className="font-bold">{i+1}:{'  '}</span>{item.text}</li>
                ))}
            </ul>
        </div>
        <div className="p-5 rounded-[21px] bg-white place-items-center grid grid-cols-1 gap-6">
        <img src={`/auto-promo_sell.png`} alt="hero" />
        </div>
    </section>
  )
}
 
export default How
 
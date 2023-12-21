import Custom_button from "../ui/Custom_button"

function TechnicalLinks() {
  return (
    <div className="grid grid-cols-1 w-full md:w-2/6 gap-5"> 
    <Custom_button type={"submit"} isLoading={false}>
    Toutes les marques
    </Custom_button> 
    <Custom_button isOutline type={"submit"} isLoading={false}>
    Toutes les marques
    </Custom_button>
    <Custom_button isOutline type={"submit"} isLoading={false}>
    Toutes les marques
    </Custom_button>
    <Custom_button isOutline type={"submit"} isLoading={false}>
    Toutes les marques
    </Custom_button>
    <div className="text-[15px] font-[bold] leading-[35px] bg-black text-white px-2.5 py-0">
    Sponsorisé
    </div>

    </div>
  )
}

export default TechnicalLinks
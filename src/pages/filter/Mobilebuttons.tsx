import Custom_button from "../../components/commen/ui/Custom_button"
import { IoFilter } from "react-icons/io5";

const Mobilebuttons = () => {
  return (
    <div className={`md:hidden flex items-center mb-2 gap-2`}>
        <Custom_button  size="normal" onClick={() => localStorage.setItem('filterMobile', 'true')} type={"submit"}  isOutline beforeicon={<IoFilter />} isLoading={false}>
            Filter
        </Custom_button>
        <Custom_button size="normal"  type={"submit"} isOutline beforeicon={<IoFilter />} isLoading={false}>
            Trier
        </Custom_button>

    </div>
  )
}

export default Mobilebuttons
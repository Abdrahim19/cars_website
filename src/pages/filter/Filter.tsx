import { useState, useEffect, Suspense } from "react";
import Filterdproduct from "./Filterdproduct"
import Filtersidebar from "./Filtersidebar"
import useWindowSize from "../../hooks/useWindowSize";
import Loding from "../../components/loding/Loding";

const Filter = () => {
  const [filterState, setFilterState] = useState(false);
  const size = useWindowSize()

  useEffect(() => {
    const storedFilterState = localStorage.getItem('filterMobile');
    if (storedFilterState) {
      setFilterState(storedFilterState === 'true');
    }
  }, [filterState]);  

  useEffect(() => {
    if (size.width && size.width > 768) {
      localStorage.setItem('filterMobile' , 'false')
      setFilterState(false);
    } 
  }, [size]);
  console.log(filterState);
  

  return (
    <Suspense fallback= {
    <Loding />
    }> 
    <main className="flex">
      <Filtersidebar mobilestate = {filterState} />
      <Filterdproduct />
    </main>
    </Suspense>
  )
}

export default Filter
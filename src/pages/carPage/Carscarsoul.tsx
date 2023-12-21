// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// Import Swiper styles
import React, { useState } from 'react';
import Pointsforts from './Pointsforts';
import Tabs from './Tabs';
import General_information from './General_information';
const Carscarsoul:React.FC<{carsImgs:string[]}> = () => {
  const [selected, setselected] = useState('')
  console.log(selected);
  
  return (
    <>
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
    
      <SwiperSlide><img src="https://image-annonce.lacentrale.fr/1096x829/E113283932_STANDARD_0.jpg?version=1701443282" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://image-annonce.lacentrale.fr/1096x829/E113283932_STANDARD_0.jpg?version=1701443282" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://image-annonce.lacentrale.fr/1096x829/E113283932_STANDARD_0.jpg?version=1701443282" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://image-annonce.lacentrale.fr/1096x829/E113283932_STANDARD_0.jpg?version=1701443282" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://image-annonce.lacentrale.fr/1096x829/E113283932_STANDARD_0.jpg?version=1701443282" alt="" /></SwiperSlide>
      ...
    </Swiper>
    <Pointsforts />
    <div>
    <Tabs data={['Informations générales',
'Garanties',
'Entretien',
'Équipement & options',
'Financement']} setstate={setselected} />
<General_information />
    </div>
    </>
  )
}

export default Carscarsoul
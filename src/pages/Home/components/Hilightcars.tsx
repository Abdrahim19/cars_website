// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

import '../../../index.css';


// import required modules
import { Scrollbar } from 'swiper/modules';
import Carinfo from '../../../components/commen/cards/Carinfo';
import SectionTitle from '../../../components/commen/Sectiontitel';

export default function Hilightcars() {
  return (
    <>
    <SectionTitle title={'Notre sélection de véhicules d’occasion'} to='listing' />
      <Swiper
       slidesPerView={4}
       spaceBetween={30}
       navigation={true}
       rewind={true}
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>   
    <Carinfo carImges={"https://image-annonce.lacentrale.fr/352x264/W102834170_STANDARD_0.jpg?version=1701789650"}
     carModel={"2.0 35 150 DESIGN "} carName={"AUDI A4 V "} carPrice={2017} year={2009} garantie={""} Energie={"Diesel"}
     Boite_de_vitesse={"Automatique"} IsCredit={false} Credit={"300"} Kilométrage={"81 613 km"} /></SwiperSlide>
             <SwiperSlide>   
    <Carinfo carImges={"https://image-annonce.lacentrale.fr/352x264/W102834170_STANDARD_0.jpg?version=1701789650"}
     carModel={"2.0 35 150 DESIGN "} carName={"AUDI A4 V "} carPrice={2017} year={2009} garantie={""} Energie={"Diesel"}
     Boite_de_vitesse={"Automatique"} IsCredit={false} Credit={"300"} Kilométrage={"81 613 km"} /></SwiperSlide>
             <SwiperSlide>   
    <Carinfo carImges={"https://image-annonce.lacentrale.fr/352x264/W102834170_STANDARD_0.jpg?version=1701789650"}
     carModel={"2.0 35 150 DESIGN "} carName={"AUDI A4 V "} carPrice={2017} year={2009} garantie={""} Energie={"Diesel"}
     Boite_de_vitesse={"Automatique"} IsCredit={false} Credit={"300"} Kilométrage={"81 613 km"} /></SwiperSlide>
             <SwiperSlide>   
    <Carinfo carImges={"https://image-annonce.lacentrale.fr/352x264/W102834170_STANDARD_0.jpg?version=1701789650"}
     carModel={"2.0 35 150 DESIGN "} carName={"AUDI A4 V "} carPrice={2017} year={2009} garantie={""} Energie={"Diesel"}
     Boite_de_vitesse={"Automatique"} IsCredit={false} Credit={"300"} Kilométrage={"81 613 km"} /></SwiperSlide>
                  <SwiperSlide>   
    <Carinfo carImges={"https://image-annonce.lacentrale.fr/352x264/W102834170_STANDARD_0.jpg?version=1701789650"}
     carModel={"2.0 35 150 DESIGN "} carName={"AUDI A4 V "} carPrice={2017} year={2009} garantie={""} Energie={"Diesel"}
     Boite_de_vitesse={"Automatique"} IsCredit={false} Credit={"300"} Kilométrage={"81 613 km"} /></SwiperSlide>
                  <SwiperSlide>   
    <Carinfo carImges={"https://image-annonce.lacentrale.fr/352x264/W102834170_STANDARD_0.jpg?version=1701789650"}
     carModel={"2.0 35 150 DESIGN "} carName={"AUDI A4 V "} carPrice={2017} year={2009} garantie={""} Energie={"Diesel"}
     Boite_de_vitesse={"Automatique"} IsCredit={false} Credit={"300"} Kilométrage={"81 613 km"} /></SwiperSlide>
                  <SwiperSlide>   
    <Carinfo carImges={"https://image-annonce.lacentrale.fr/352x264/W102834170_STANDARD_0.jpg?version=1701789650"}
     carModel={"2.0 35 150 DESIGN "} carName={"AUDI A4 V "} carPrice={2017} year={2009} garantie={""} Energie={"Diesel"}
     Boite_de_vitesse={"Automatique"} IsCredit={false} Credit={"300"} Kilométrage={"81 613 km"} /></SwiperSlide>
      </Swiper>
    </>
  );
}

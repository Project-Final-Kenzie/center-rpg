import slide1 from "../../assets/img/imagem-5.jpg"
import slide2 from "../../assets/img/imagem-2.jpg"
import slide3 from "../../assets/img/imagem-3.jpg"
import slide4 from "../../assets/img/imagem-4.jpg"
import slide5 from "../../assets/img/imagem-6.jpg"

import {Swiper, SwiperSlide} from "swiper/react"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";

import Swipers from 'swiper/bundle';

import "./styles.css"

import {Pagination} from "swiper"

export const Carousel = () => {

    const swiper = new Swipers('.swiper', {
        autoplay: {
          delay: 5000,
        },
        disableOnInteraction: false,

       });

    return(
        <>

        <Swiper pagination={true}  modules={[Pagination]}>

            <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slide5} alt="" /></SwiperSlide>
            

        </Swiper>
    
        </>
    )
}

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

import Duck1 from '../images/ducks/duck-1.png';
import Duck2 from '../images/ducks/duck-2.png';
import Duck3 from '../images/ducks/duck-3.png';
import Duck4 from '../images/ducks/duck-4.png';
import Duck5 from '../images/ducks/duck-5.png';
import Duck6 from '../images/ducks/duck-6.png';
import Duck7 from '../images/ducks/duck-7.png';
import Duck8 from '../images/ducks/duck-8.png';

//Activates Autoplay?
// Swiper.use([Autoplay]);

import Hidden from "@material-ui/core/Hidden";

function Carousel() {
  return (
    <div>
        
        
<Hidden mdDown>
            <div className="container">
            <div class="carousel-container">
            <Swiper
            slidesPerView={5}
            spaceBetween={10}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            pagination={{
            clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
            >
                <SwiperSlide><img src={Duck1} alt="Duck"/></SwiperSlide>
                <SwiperSlide><img src={Duck2} alt="Duck"/></SwiperSlide>
                <SwiperSlide><img src={Duck3} alt="Duck"/></SwiperSlide>
                <SwiperSlide><img src={Duck4} alt="Duck"/></SwiperSlide>
                <SwiperSlide><img src={Duck5} alt="Duck"/></SwiperSlide>
                <SwiperSlide><img src={Duck6} alt="Duck"/></SwiperSlide>
                <SwiperSlide><img src={Duck7} alt="Duck"/></SwiperSlide>
                <SwiperSlide><img src={Duck8} alt="Duck"/></SwiperSlide>
            </Swiper>
        </div>
            </div>
          </Hidden>

          <Hidden smDown mdUp>
            <div className="container">
            <div class="carousel-container">
            <Swiper
            slidesPerView={5}
            spaceBetween={10}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            pagination={{
            clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
            >
                <SwiperSlide><img src={Duck1} alt="Duck"/></SwiperSlide>
                <SwiperSlide><img src={Duck2} alt="Duck"/></SwiperSlide>
                <SwiperSlide><img src={Duck3} alt="Duck"/></SwiperSlide>
                <SwiperSlide><img src={Duck4} alt="Duck"/></SwiperSlide>
                <SwiperSlide><img src={Duck5} alt="Duck"/></SwiperSlide>
                <SwiperSlide><img src={Duck6} alt="Duck"/></SwiperSlide>
                <SwiperSlide><img src={Duck7} alt="Duck"/></SwiperSlide>
                <SwiperSlide><img src={Duck8} alt="Duck"/></SwiperSlide>
            </Swiper>
        </div>
            </div>
          </Hidden>

          <Hidden smUp>
            <div className="container">
            <div class="carousel-container">
            <Swiper
            slidesPerView={3}
            spaceBetween={10}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            pagination={{
            clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
            >
                <SwiperSlide><img src={Duck1} alt="Duck"/></SwiperSlide>
                <SwiperSlide><img src={Duck2} alt="Duck"/></SwiperSlide>
                <SwiperSlide><img src={Duck3} alt="Duck"/></SwiperSlide>
                <SwiperSlide><img src={Duck4} alt="Duck"/></SwiperSlide>
                <SwiperSlide><img src={Duck5} alt="Duck"/></SwiperSlide>
                <SwiperSlide><img src={Duck6} alt="Duck"/></SwiperSlide>
                <SwiperSlide><img src={Duck7} alt="Duck"/></SwiperSlide>
                <SwiperSlide><img src={Duck8} alt="Duck"/></SwiperSlide>
            </Swiper>
        </div>
            </div>
          </Hidden>
    </div>
  );
}

export default Carousel;


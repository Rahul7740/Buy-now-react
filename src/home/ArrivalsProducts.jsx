import React from 'react'
import "../style/arrival-and-promotion.css"
import SvgPath from '../assets/svg/SvgPath'
import arrivalImg from "../json/arrivalProducts.json"
import AllButtons from "../snippets/AllButtons"
import arrivalcontainerss from "../json/arrival-products-containers.json"

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const ArrivalsProducts = () => {
    return (
        <>
            <section className='all-sections'>
                <div className='container'>
                    <div className='product-head'>
                        <h2>New arrivals products</h2>
                        <div>
                            <button><img src={SvgPath.arrowBack} alt='back' /></button>
                            <img src={SvgPath.horizontalLine31px} alt="horizontal-line" />
                            <button><img src={SvgPath.arrowForword} alt='forword' /></button>
                        </div>
                    </div>
                    <Swiper
                        spaceBetween={24} // Try reducing this
                        centeredSlides={false} // Change to false
                        slidesPerView={2} // Change to a fractional value
                        autoplay={{
                            delay: 1900,
                            disableOnInteraction: false,
                        }}
                        pagination={false}
                        navigation={false}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                        breakpoints={{
                            350: {
                                slidesPerView: 1.25 
                            },
                            700: {
                                slidesPerView: 1.5
                            },
                            800: {
                                slidesPerView: 2 
                            }
                        }}

                    >
                        {
                            arrivalcontainerss.map((item, index) => (
                                <SwiperSlide key={index} className='arrival-card'>
                                    <div className='arrival-card-imgs'>
                                        {
                                            arrivalImg[item.id].map((i, index) => (
                                                <img key={index} src={require(`../assets/images/${i.img}`)} alt="arrival" />
                                            ))
                                        }
                                    </div>
                                    <div className='arrival-card-content'>
                                        <h3>{item.name}</h3>
                                        <AllButtons name="Shop Top Collection" />

                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default ArrivalsProducts

import React, { useRef } from "react"
import "../style/products.css"
import SvgPath from '../assets/svg/SvgPath'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

import topProductsss from "../json/top-Products.json"
import ProductCard from '../snippets/ProductCard';

const TopProducts = () => {
    const swiperRef = useRef(null);

    return (
        <>
            <section className="all-sections">
                <div className='container'>
                    <h2 className="top-product-heading">Top products for top brands</h2>
                    <div className='product-head'>
                        <p>Top brands up to 30% off</p>
                        <div>
                            <button onClick={() => swiperRef.current.swiper.slidePrev()}><img src={SvgPath.arrowBack} alt='back' /></button>
                            <img src={SvgPath.horizontalLine31px} alt="horizontal-line" />
                            <button onClick={() => swiperRef.current.swiper.slideNext()}><img src={SvgPath.arrowForword} alt='forword' /></button>
                        </div>
                    </div>
                    <Swiper
                        ref={swiperRef}
                        pagination={false}
                        navigation={false}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                        // slidesPerView={4} 
                        breakpoints={{
                            540: {
                                slidesPerView: 1,
                            },
                            650: {
                                slidesPerView: 2,
                            },
                            900: {
                                slidesPerView: 3,
                            },
                            1100: {
                                slidesPerView: 4,
                            },
                            1440: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        {topProductsss.map((i, index) => (
                            <SwiperSlide key={index}>
                                <ProductCard
                                    img={i.img}
                                    name={i.name}
                                    price={i.price}
                                    ratting={i.ratting}
                                    new={i.new}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default TopProducts

import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Category1 from '../../assets/home/slide1.jpg';
import Category2 from '../../assets/home/slide2.jpg'
import Category3 from '../../assets/home/slide3.jpg'
import Category4 from '../../assets/home/slide4.jpg'
import Category5 from '../../assets/home/slide4.jpg'
import SectionTitle from '../../Components/SectionTitle';

const Category = () => {
    return (
        <div className='pb-16'>
            <SectionTitle
                subheading={"---From 11:00am to 10:00pm---"}
                heading={"ORDER ONLINE"}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={Category1} alt="" />
                    <h3 className='md:text-4xl sm:text_2xl uppercase text-center sm:-mt-14 md:-mt-14'> salats</h3>
                </SwiperSlide>
                <SwiperSlide><img src={Category2} alt="" />
                    <h3 className='md:text-4xl sm:text_2xl uppercase text-center sm:-mt-14 md:-mt-14'> salats</h3></SwiperSlide>
                <SwiperSlide><img src={Category3} alt="" />
                    <h3 className='md:text-4xl sm:text_2xl uppercase text-center sm:-mt-14 md:-mt-14'> salats</h3></SwiperSlide>
                <SwiperSlide><img src={Category4} alt="" />
                    <h3 className='md:text-4xl sm:text_2xl uppercase text-center sm:-mt-14 md:-mt-14'> salats</h3></SwiperSlide>
                <SwiperSlide><img src={Category5} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-14'> salats</h3></SwiperSlide>

            </Swiper>


        </div>



    );
};

export default Category;
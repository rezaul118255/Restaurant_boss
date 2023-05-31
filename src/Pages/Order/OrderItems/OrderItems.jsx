import React from 'react';
import FoodCard from '../../../Components/FoodCard';


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const OrderItems = ({ items }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };

    return (

        < div >


            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='grid md:grid-cols-3 gap-4'>
                        {
                            items.map(Salad => <FoodCard
                                key={Salad._id}
                                item={Salad}
                            ></FoodCard>)
                        }
                    </div>

                </SwiperSlide>

            </Swiper>


        </div >
    )

};

export default OrderItems;
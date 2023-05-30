import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';
import Call from '../Call-Us/Call';
import Boss from '../Boss/Boss';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Restaurant-Boss | Home</title>

            </Helmet>

            <Banner></Banner>
            <Category></Category>
            <Boss></Boss>
            <PopularMenu></PopularMenu>
            <Call></Call>
            <Featured></Featured>
            <Testimonials></Testimonials>

        </div>
    );
};

export default Home;
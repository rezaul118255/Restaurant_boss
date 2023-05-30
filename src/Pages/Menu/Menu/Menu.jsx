import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover';
// import image from '../../../assets/menu/banner3.jpg';
import image from "../../../assets/menu/banner3.jpg";
import PopularMenu from '../../PopularMenu/PopularMenu';



const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Restaurant-Boss | menu</title>

            </Helmet>
            <Cover img={image} title="OUR MENU"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={image} title="OUR MENU"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={image} title="OUR MENU"></Cover>




        </div>
    );
};

export default Menu;
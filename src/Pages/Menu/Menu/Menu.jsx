import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover';
import SectionTitle from '../../../Components/SectionTitle.jsx';

import menuImage from "../../../assets/menu/banner3.jpg";
import dessertImage from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImage from "../../../assets/menu/pizza-bg.jpg";
import saladImage from "../../../assets/menu/salad-bg.jpg";
import soupImage from "../../../assets/menu/soup-bg.jpg";
import UseMenu from '../../../Hooks/UseMenu';
import MenuCategory from '../MenuCategory/MenuCategory';




const Menu = () => {
    const [Menu] = UseMenu()
    const salad = Menu.filter(item => item.category === "salad")
    const soup = Menu.filter(item => item.category === "soup")
    const pizza = Menu.filter(item => item.category === "pizza")
    const popular = Menu.filter(item => item.category === "popular")
    const dessert = Menu.filter(item => item.category === "dessert")
    const offered = Menu.filter(item => item.category === "offered")
    return (
        <div>
            <Helmet>
                <title>Restaurant-Boss | menu</title>

            </Helmet>
            <Cover img={menuImage} title="OUR MENU"></Cover>
            <SectionTitle subheading="---Don't miss---" heading="TODAY'S OFFER"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={dessert}
                title="DESSERTS"
                img={dessertImage}
            ></MenuCategory>
            <MenuCategory items={pizza}
                title="PIZZA"
                img={pizzaImage}
            ></MenuCategory>
            <MenuCategory items={salad}
                title="SALADS"
                img={saladImage}
            ></MenuCategory>
            <MenuCategory items={soup}
                title="SOUPS"
                img={soupImage}
            ></MenuCategory>





        </div>
    );
};

export default Menu;
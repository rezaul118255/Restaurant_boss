import React, { useState } from 'react';

import BannerImg from '../../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cover from '../../../Shared/Cover';
import UseMenu from '../../../Hooks/UseMenu';
// import FoodCard from '../../../Components/FoodCard';
import { Helmet } from 'react-helmet-async';
import OrderItems from '../OrderItems/OrderItems';
import { useParams } from 'react-router-dom';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams()
    const initialIndex = categories.indexOf(category);
    const [tapIndex, setTabIndex] = useState(initialIndex)
    const [Menu] = UseMenu()


    console.log(category)
    const salad = Menu.filter(item => item.category === "salad")
    const soup = Menu.filter(item => item.category === "soup")
    const pizza = Menu.filter(item => item.category === "pizza")
    const popular = Menu.filter(item => item.category === "popular")
    const dessert = Menu.filter(item => item.category === "dessert")
    const offered = Menu.filter(item => item.category === "offered")
    const drinks = Menu.filter(item => item.category === "drinks")
    return (
        <div>
            <Helmet>
                <title>Restaurant-Boss / Order</title>

            </Helmet>
            <Cover img={BannerImg} title="ORDER FOOD" ></Cover>
            <Tabs defaultIndex={tapIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderItems items={salad}></OrderItems>

                </TabPanel>
                <TabPanel>
                    <OrderItems items={pizza}></OrderItems>

                </TabPanel>

                <TabPanel>
                    <OrderItems items={soup}></OrderItems>

                </TabPanel>

                <TabPanel>
                    <OrderItems items={dessert}></OrderItems>

                </TabPanel>
                <TabPanel>
                    <OrderItems items={drinks}></OrderItems>

                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Order;
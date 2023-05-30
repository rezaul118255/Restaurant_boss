import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle';
import MenuItem from '../../Shared/MenuItem';
import UseMenu from '../../Hooks/UseMenu';

const PopularMenu = () => {
    const [Menu] = UseMenu()
    const popular = Menu.filter(item => item.category === "popular")
    // const [Menu, setMenu] = useState([])
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === "popular");
    //             setMenu(popularItems)


    //         })

    // }, [])

    return (
        <div className='mb-12'>
            <SectionTitle
                heading="From our Menu"
                subheading="Popular Items"
            >

            </SectionTitle>
            <div className='grid   md:grid-cols-2 gap-6'>
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)

                }
            </div>

        </div>
    );
};

export default PopularMenu;
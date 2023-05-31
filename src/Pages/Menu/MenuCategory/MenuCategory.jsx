import React from 'react';
import MenuItem from '../../../Shared/MenuItem';
import Cover from '../../../Shared/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, img, title }) => {
    return (
        <div>
            {title && <Cover img={img} title={title}></Cover>}
            <div className='grid   md:grid-cols-2 gap-6 my-9'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)

                }
            </div>
            <div className='mx-auto'>
                <Link to={`/order/${title}`}> <button className='btn btn-outline border-0 border-b-4 mx-auto '>Order Your Favourite  Food</button></Link>
                {/* <Link to='/order'> <button className='btn btn-outline border-0 border-b-4 mx-auto '>Order Your Favourite  Food</button></Link> */}
            </div>
        </div>
    );
};

export default MenuCategory;
import React from 'react';
import MenuItem from '../../../Shared/MenuItem';
import Cover from '../../../Shared/Cover';

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

        </div>
    );
};

export default MenuCategory;
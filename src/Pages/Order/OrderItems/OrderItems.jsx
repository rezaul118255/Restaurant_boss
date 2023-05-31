import React from 'react';
import FoodCard from '../../../Components/FoodCard';

const OrderItems = ({ items }) => {
    return (
        <div className='grid md:grid-cols-3 gap-4'>
            {
                items.map(Salad => <FoodCard
                    key={Salad._id}
                    item={Salad}
                ></FoodCard>)
            }
        </div>
    );
};

export default OrderItems;
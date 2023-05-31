import React from 'react';


const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item


    return (
        <div>
            <div className="card w-80  bg-base-100 shadow-xl ">
                <p className='absolute right-0 bg-slate-900 px-4 mt-3 me-3'>{price}</p>
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary bottom-0 absolute">Order Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FoodCard;
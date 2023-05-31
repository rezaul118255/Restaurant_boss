import React from 'react';


const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item


    return (
        <div>
            <div className="card w-80 h-[430px]  bg-base-100 shadow-xl ">
                <p className='absolute right-0 bg-slate-900 px-4 mt-3 me-3'>{price}</p>
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline border-0 border-b-4 bg-slate-100 border-orange-400 mx-auto bottom-0 absolute">Order Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FoodCard;
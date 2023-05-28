import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import featuredImg from '../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className='featuredImg bg-fixed text-white pt-8 my-20'>
            <SectionTitle className='pt-16'
                heading='Form Our Menu'
                subheading='check it out'
            ></SectionTitle>
            <div className='md:flex justify-center items-center pt-12 px-36 pb-20 '>
                <img className='w-1/2 fix' src={featuredImg} alt="" />
                <div className='md:ml-10 w-1/2'>
                    <p>March 20, 2023</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className='btn btn-outline border-0 border-b-4'>order Now</button>

                </div>

            </div>

        </div>
    );
};

export default Featured;
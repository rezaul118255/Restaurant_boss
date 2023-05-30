import React from 'react';
import { Parallax, Background } from 'react-parallax';

const Cover = ({ img, title }) => {
    return (
        <div>
            <Parallax
                blur={{ min: -50, max: 50 }}
                bgImage={img}
                bgImageAlt="the dog"
                strength={-200}
            >
                <div className="hero h-[32rem]">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                            <p className="mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium possimus quam similique ?</p>

                        </div>
                    </div>
                </div>
            </Parallax>


        </div>
    );
};

export default Cover;
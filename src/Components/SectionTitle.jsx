import React from 'react';

const SectionTitle = ({ heading, subheading }) => {
    return (
        <div className='text-center'>
            <p className='text-yellow-500'>{subheading}</p>
            <div className='border-y-4 border-gray-600 w-4/12 mx-auto m-4 text-3xl'>
                <h3>{heading}</h3>

            </div>


        </div>
    );
};

export default SectionTitle;
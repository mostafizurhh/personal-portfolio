import React from 'react';
import Me from '../Assets/me.png'

const Banner = () => {
    return (

        <div className=" my-6 flex justify-around items-center aos-init aos-animate" id='banner' data-aos="flip-left">

            <h1 className='hidden md:block text-xl font-semibold md:text-4xl pl-5'> An enthusiastic <br /> web developer</h1>

            <img src={Me} alt="" className='w-[280px] md:w-[550px] rounded-full ring' />
        </div>

    );
};

export default Banner;
import React from 'react';
import Me from '../Assets/me.png'

const Banner = () => {
    return (

        <div className="py-10 flex justify-around items-center" id='banner'>
            <h1 className='hidden md:block text-xl font-semibold md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'> An enthusiastic <br /> web developer</h1>

            <img src={Me} alt="" className='w-[280px] md:w-[550px] rounded-full ring ring-violet-500 transition ease-in-out hover:translate-x-1 hover:scale-90 duration-75' />
        </div>
    );
};

export default Banner;
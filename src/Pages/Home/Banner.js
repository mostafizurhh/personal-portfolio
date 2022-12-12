import React from 'react';
import Me from '../Assets/me.png'

const Banner = () => {
    return (

        <div className="py-10 grid grid-cols-1 md:grid-cols-2" id='banner'>
            <div className='flex items-center justify-center pt-4'>
                <h1 className='text-xl font-semibold md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'> An enthusiastic <br /> web developer</h1>
            </div>

            <div className='flex items-center justify-center pt-4 md:pt-0'>
                <img src={Me} alt="" className='w-[280px] md:w-[550px] rounded-full ring ring-violet-500 transition ease-in-out hover:translate-x-1 hover:scale-90 duration-75' />
            </div>
        </div>
    );
};

export default Banner;
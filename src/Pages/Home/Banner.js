import React from 'react';
import Me from '../Assets/me.png'
import Bg from '../Assets/bg.png'

const Banner = () => {
    return (
        <div className="hero" style={{ backgroundImage: `url(${Bg}` }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content flex-row-reverse justify-between">
                <img src={Me} alt='' className='w-3/4 translate-y-4  md:w-full translate-x-10 md:translate-x-80' />
                <div className=''>
                    <h1 className="md:text-4xl text-lg font-bold text-white translate-x-4 translate-y-28 md:-translate-x-48 capitalize"> An enthusiastic <br /> web developer</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;
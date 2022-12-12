import React from 'react';
import photo from '../Assets/stylish.png'

const About = () => {
    return (
        <div className='pt-24 md:mx-4 lg:mx-8 text-justify aos-animate aos-init' data-aos="fade-right" id='about'>
            <h2 className='font-bold text-4xl mb-3'>About</h2>
            <div>
                <p className='font-bold text-lg'>
                    I can develop a fully responsive website by using REST APIs, Firebase Authentication, JWT Authentication, Online Payment System, Vanilla CSS, JavaScript, React, MongoDB, and the most popular CSS frameworks like Tailwind CSS, and BootStrap.<br /> <br />

                    I love coding because it allows me to work with different project requirements and learn new things by fulfilling project goals. I can add value to any company with my expertise, experience, and qualification. I love working in a team and am used to being a part of a multicultural work environment. <br /> <br />
                </p>
                <div className='flex justify-center items-center'>
                    <img src={photo} className='w-[450px]' alt="" />
                </div>
            </div>
        </div>
    );
};

/* sticky top-0 h-screen bg-[#121B2F] */
export default About;

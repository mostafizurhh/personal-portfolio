import React from 'react';

const Skills = () => {
    return (
        <div className='py-10' id='skills'>
            <h2 className='font-bold text-4xl mb-3'>Technologies and Tools</h2>
            <div className='grid grid-cols-3 md:grid-cols-4 gap-4'>
                <div className='aos-init aos-animate' data-aos='fade-up'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt='' className='w-[100px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-75' />
                </div>

                <div className='aos-init aos-animate' data-aos='fade-down'>
                    <img src="https://img.icons8.com/nolan/64/express-js.png" alt='' className='w-[100px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-75' />
                </div>

                <div className='aos-init aos-animate' data-aos='fade-right'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt='' className='w-[100px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-75' />
                </div>

                <div className='aos-init aos-animate' data-aos='fade-left'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" alt='' className='w-[100px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-75' />
                </div>

                <div className='aos-init aos-animate' data-aos='fade-up-right'>
                    <img src="https://img.icons8.com/color/96/null/java-web-token.png" alt='' className='w-[100px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-75' />
                </div>

                <div className='aos-init aos-animate' data-aos='fade-up-left'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" alt='' className='w-[100px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-75' />
                </div>

                <div className='aos-init aos-animate' data-aos='fade-down-left'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" alt='' className='w-[100px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-75' />
                </div>

                <div className='aos-init aos-animate' data-aos='fade-down-right'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt='' className='w-[100px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-75' />
                </div>

                <div className='aos-init aos-animate' data-aos='zoom-in-up'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt='' className='w-[100px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-75' />
                </div>

                <div className='aos-init aos-animate' data-aos='zoom-in-down'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt='' className='w-[100px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-75' />
                </div>

                <div className='aos-init aos-animate' data-aos='zoom-in-left'>
                    <img src="https://img.icons8.com/color/96/null/microsoft-sql-server.png" alt='' className='w-[100px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-75' />
                </div>

                <div className='aos-init aos-animate' data-aos='zoom-in-right'>
                    <img src="https://img.icons8.com/color/96/null/tableau-software.png" alt='' className='w-[100px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-75' />
                </div>
            </div>
        </div >
    );
};

export default Skills;
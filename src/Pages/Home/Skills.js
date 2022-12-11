import React from 'react';

const Skills = () => {
    return (
        <div className='py-10' id='skills'>
            <h2 className='font-bold text-4xl mb-3'>Technologies and Tools</h2>
            <div className='grid grid-cols-3 md:grid-cols-4 gap-4'>
                <div className='aos-init aos-animate' data-aos='fade-up'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt='' className='w-[100px]' />
                </div>

                <div className='aos-init aos-animate text-white' data-aos='fade-down'>
                    <img src="https://img.icons8.com/nolan/64/express-js.png" alt='' className='w-[100px]' />
                </div>

                <div className='aos-init aos-animate text-white' data-aos='fade-right'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt='' className='w-[100px]' />
                </div>

                <div className='aos-init aos-animate text-white' data-aos='fade-left'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" alt='' className='w-[100px]' />
                </div>

                <div className='aos-init aos-animate text-white' data-aos='fade-up-right'>
                    <img src="https://img.icons8.com/color/96/null/java-web-token.png" alt='' className='w-[100px]' />
                </div>

                <div className='aos-init aos-animate text-white' data-aos='fade-up-left'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" alt='' className='w-[100px]' />
                </div>

                <div className='aos-init aos-animate text-white' data-aos='fade-down-left'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" alt='' className='w-[100px]' />
                </div>

                <div className='aos-init aos-animate text-white' data-aos='fade-down-right'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt='' className='w-[100px]' />
                </div>

                <div className='aos-init aos-animate text-white' data-aos='zoom-in-up'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt='' className='w-[100px]' />
                </div>

                <div className='aos-init aos-animate text-white' data-aos='zoom-in-down'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt='' className='w-[100px]' />
                </div>

                <div className='aos-init aos-animate text-white' data-aos='zoom-in-left'>
                    <img src="https://img.icons8.com/color/96/null/microsoft-sql-server.png" alt='' className='w-[100px]' />
                </div>

                <div className='aos-init aos-animate text-white' data-aos='zoom-in-right'>
                    <img src="https://img.icons8.com/color/96/null/tableau-software.png" alt='' className='w-[100px]' />
                </div>
            </div>
            {/* <div className='grid grid-cols-6 gap-4'>
                <img src="https://img.shields.io/badge/JavaScript-282C34?logo=javascript&logoColor=F7DF1E" alt="JavaScript logo" titles="JavaScript" className='w-[290px] h-[90px]' />

                <img src="https://img.shields.io/badge/ReactJS-282C34?logo=react&logoColor=61DAFB" alt="ReactJS logo" title="ReactJS" className='w-[290px] h-[90px]' />

                <img src="https://img.shields.io/badge/Node.js-282C34?logo=node.js&logoColor=00F200" alt="Node.js logo" title="Node.js" className='w-[290px] h-[90px]' />

                <img src="https://img.shields.io/badge/Express-282C34?logo=express&logoColor=FFFFFF" alt="Express.js logo" title="Express.js" className='w-[290px] h-[90px]' />

                <img src="https://img.shields.io/badge/MongoDB-282C34?logo=mongodb&logoColor=47A248" alt="MongoDB logo" title="MongoDB" className='w-[290px] h-[90px]' />

                <img src="https://img.shields.io/badge/JSON Web Tokens-282C34?logo=json-web-tokens&logoColor=FFCA28" alt="JSON Web Tokens logo" title="JSON Web Tokens" className='w-[290px] h-[90px]' />

                <img src="https://img.shields.io/badge/Firebase-282C34?logo=firebase&logoColor=FFCA28" alt="Firebase logo" title="Firebase" className='w-[290px] h-[90px]' />

                <img src="https://img.shields.io/badge/React Query-282C34?logo=react-query&logoColor=FF4154" alt="React Query logo" title="React Query" className='w-[290px] h-[90px]' />

                <img src="https://img.shields.io/badge/React Router-282C34?logo=react-router&logoColor=CA4245" alt="React Router logo" title="React Router" className='w-[290px] h-[90px]' />

                <img src="https://img.shields.io/badge/Stripe-282C34?logo=Stripe&logoColor=008CDD" alt="Stripe logo" title="Stripe" className='w-[290px] h-[90px]' />

                <img src="https://img.shields.io/badge/Bootstrap-282C34?logo=bootstrap&logoColor=7952B3" alt="Bootstrap logo" title="Bootstrap" className='w-[290px] h-[90px]' />

                <img src="https://img.shields.io/badge/Tailwind%20CSS-282C34?logo=tailwind-css&logoColor=38B2AC" alt="TailwindCSS logo" title="TailwindCSS" className='w-[290px] h-[90px]' />

                <img src="https://img.shields.io/badge/TypeScript-282C34?logo=typescript&logoColor=3178C6" alt="TypeScript logo" title="TypeScript" className='w-[290px] h-[90px]' />

                <img src="https://img.shields.io/badge/VS%20Code-282C34?logo=visual-studio-code&logoColor=007ACC" alt="Visual Studio Code logo" title="Visual Studio Code" className='w-[290px] h-[90px]' />

                <img src="https://img.shields.io/badge/HTML5-282C34?logo=html5&logoColor=E34F26" alt="HTML5 logo" title="HTML5" className='w-[290px] h-[90px]' />

                <img src="https://img.shields.io/badge/CSS3-282C34?logo=css3&logoColor=1572B6" alt="CSS3 logo" title="CSS3" className='w-[290px] h-[90px]' />

                <img src="https://img.shields.io/badge/Figma-282C34?logo=figma&logoColor=F24E1E" alt="Figma logo" title="Figma" className='w-[290px] h-[90px]' />

                <img src="https://img.shields.io/badge/git-282C34?logo=git&logoColor=F05032" alt="git logo" title="git" className='w-[290px] h-[90px]' />

                <img src="https://img.shields.io/badge/npm-282C34?logo=npm&logoColor=CB3837" alt="npm logo" title="npm" className='w-[290px] h-[90px]' />

                <img src="https://img.shields.io/badge/Microsoft SQL Server-282C34?logo=microsoft-sql-server&logoColor=CC2927" alt="Microsoft SQL Server logo" title="Microsoft SQL Server" className='w-[290px] h-[90px]' />

                <img src="https://img.shields.io/badge/Tableau-282C34?logo=tableau&logoColor=E97627" alt="Tableau" title="Tableau" className='w-[290px] h-[90px]' />

            </div > */}
        </div >
    );
};

export default Skills;
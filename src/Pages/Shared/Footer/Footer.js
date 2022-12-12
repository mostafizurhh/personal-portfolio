import React from 'react';

const Footer = () => {
    return (
        <footer className=" py-10 footer footer-center text-white">
            <div>
                <p>Copyright © Syed Mostafizur Rahman - All right reserved </p>
                <div className="flex mt-2">
                    <a href="mailto:mostafizur.iubat.eee@gmail.com">
                        <img src="https://img.icons8.com/clouds/100/null/gmail.png" alt='' className='w-[50px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-75' />
                    </a>

                    <a href='https://www.linkedin.com/in/syed-mostafizur-rahman/'>
                        <img src="https://img.icons8.com/clouds/100/null/linkedin.png" alt='' className='w-[50px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-75' />
                    </a>

                    <a href='https://github.com/mostafizurhh'>
                        <img src="https://img.icons8.com/clouds/100/null/github.png" alt='' className='w-[50px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-75' />
                    </a>
                </div>
            </div>


        </footer>
    );
};

export default Footer;
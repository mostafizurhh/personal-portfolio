import React from 'react';
import { TiSocialLinkedinCircular, TiSocialGithubCircular } from "react-icons/ti";

const Footer = () => {
    return (
        <footer className="footer footer-center py-5 bg-[#121B2F] text-white">
            <div>
                <p>Copyright © Syed Mostafizur Rahman - All right reserved </p>
                <div className="flex mt-2">

                    <a href='https://www.linkedin.com/in/syed-mostafizur-rahman/'>
                        <TiSocialLinkedinCircular className='font-bold text-4xl'></TiSocialLinkedinCircular></a>

                    <a href='https://github.com/mostafizurhh'>
                        <TiSocialGithubCircular className='font-bold text-4xl' ></TiSocialGithubCircular></a>
                </div>
            </div>


        </footer>
    );
};

export default Footer;
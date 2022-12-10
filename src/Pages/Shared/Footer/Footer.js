import React from 'react';
import { TiSocialLinkedinCircular, TiSocialGithubCircular } from "react-icons/ti";

const Footer = () => {
    return (
        <footer className="footer footer-center py-5 bg-primary text-primary-content">
            <div>
                <p className="font-bold text-xl">
                    Syed Mostafizur Rahman
                </p>
                <p className="font-semibold text-lg">
                    Full-Stack Web Developer
                </p>
                <p>Copyright © 2022 - All right reserved</p>
            </div>

            <div className="flex">
                <TiSocialLinkedinCircular className='font-bold text-4xl'></TiSocialLinkedinCircular>
                <TiSocialGithubCircular className='font-bold text-4xl' ></TiSocialGithubCircular>
            </div>

        </footer>
    );
};

export default Footer;
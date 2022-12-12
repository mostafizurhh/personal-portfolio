import React from 'react';
import PrimaryButton from '../../Home/PrimaryButton';

const Header = () => {
    return (
        <div className="flex-col">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box bg-[#25204f] w-40">
                    <a href='#banner' className="text-xl font-bold">Syed Mostafizur Rahman</a>
                    <li><a href='#banner' className="hover:underline decoration-pink-500 decoration-wavy">Home</a></li>
                    <li><a href='#skills' className="hover:underline decoration-pink-500 decoration-wavy">Technologies and Tools</a></li>
                    <li><a href="#projects" className="hover:underline decoration-pink-500 decoration-wavy">Projects</a></li>
                    <li><a href="#blog" className="hover:underline decoration-pink-500 decoration-wavy">Blog</a></li>
                    <li><a href='#about' className="hover:underline decoration-pink-500 decoration-wavy">About</a></li>
                    <li><a href="https://form.jotform.com/223432459291356" target="blank" className="hover:underline decoration-pink-500 decoration-wavy">Contact Me</a></li>
                    <a href='https://drive.google.com/file/d/1QCKUO1xTK_jOYIVoUmFEa6Yf8g8UiZwp/view?usp=sharing' download='Resume of Syed Mostafizur Rahman' target="blank"><PrimaryButton>Download Resume</PrimaryButton></a>
                </ul>
            </div>
            <div className="hidden lg:flex">
                <ul className="menu menu-vertical p-2">
                    <a href='#banner' className="text-xl font-bold">Syed Mostafizur Rahman</a>
                    <li><a href='#banner' className="hover:underline decoration-pink-500 decoration-wavy">Home</a></li>
                    <li><a href='#skills' className="hover:underline decoration-pink-500 decoration-wavy">Technologies and Tools</a></li>
                    <li><a href="#projects" className="hover:underline decoration-pink-500 decoration-wavy">Projects</a></li>
                    <li><a href="#blog" className="hover:underline decoration-pink-500 decoration-wavy">Blog</a></li>
                    <li><a href='#about' className="hover:underline decoration-pink-500 decoration-wavy">About</a></li>
                    <li><a href="https://form.jotform.com/223432459291356" target="blank" className="hover:underline decoration-pink-500 decoration-wavy">Contact Me</a></li>
                    <a href='https://drive.google.com/file/d/1QCKUO1xTK_jOYIVoUmFEa6Yf8g8UiZwp/view?usp=sharing' download='Resume of Syed Mostafizur Rahman' target="blank"><PrimaryButton>Download Resume</PrimaryButton></a>
                </ul>
            </div>
        </div>
    );
};

export default Header;
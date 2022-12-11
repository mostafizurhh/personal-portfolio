import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex-col">
            <div className="">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box bg-[#25204f] w-40">
                        <Link to='/' className="text-xl font-bold">Syed Mostafizur Rahman</Link>
                        <li><a href='#banner' className="hover:underline decoration-pink-500 decoration-wavy">Home</a></li>
                        <li><a href='#about' className="hover:underline decoration-pink-500 decoration-wavy">About</a></li>
                        <li><a href='#skills' className="hover:underline decoration-pink-500 decoration-wavy">Technologies and Tools</a></li>
                        <li><a href="#projects" className="hover:underline decoration-pink-500 decoration-wavy">Projects</a></li>
                        <li><a href="#blog" className="hover:underline decoration-pink-500 decoration-wavy">Blog</a></li>
                        <li><a href="https://form.jotform.com/223432459291356" target="blank" className="hover:underline decoration-pink-500 decoration-wavy">Contact Me</a></li>
                        <a href='https://drive.google.com/file/d/1QCKUO1xTK_jOYIVoUmFEa6Yf8g8UiZwp/view?usp=sharing' className="btn bg-[#25204f] animate-pulse" download='Resume of Syed Mostafizur Rahman' target="blank"><span className='animate-bounce'>Download Resume</span></a>
                    </ul>
                </div>

            </div>
            <div className="hidden md:flex">
                <ul className="menu menu-vertical px-1">
                    <Link to='/' className="text-xl font-bold">Syed Mostafizur Rahman</Link>
                    <li><a href='#banner' className="hover:underline decoration-pink-500 decoration-wavy">Home</a></li>
                    <li><a href='#about' className="hover:underline decoration-pink-500 decoration-wavy">About</a></li>
                    <li><a href='#skills' className="hover:underline decoration-pink-500 decoration-wavy">Technologies and Tools</a></li>
                    <li><a href="#projects" className="hover:underline decoration-pink-500 decoration-wavy">Projects</a></li>
                    <li><a href="#blog" className="hover:underline decoration-pink-500 decoration-wavy">Blog</a></li>
                    <li><a href="https://form.jotform.com/223432459291356" target="blank" className="hover:underline decoration-pink-500 decoration-wavy">Contact Me</a></li>
                    <a href='https://drive.google.com/file/d/1QCKUO1xTK_jOYIVoUmFEa6Yf8g8UiZwp/view?usp=sharing' className="btn bg-[#25204f] animate-pulse" download='Resume of Syed Mostafizur Rahman' target="blank"><span className='animate-bounce'>Download Resume</span></a>
                </ul>
            </div>
            {/* <div className="">
                <a href='https://drive.google.com/file/d/1QCKUO1xTK_jOYIVoUmFEa6Yf8g8UiZwp/view?usp=sharing' className="btn btn-accent animate-pulse" download='Resume of Syed Mostafizur Rahman' target="blank">Download Resume</a>
            </div> */}
        </div>

        // <div className="navbar md:drawer-side sticky left-0">
        //     <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        //     <ul className="menu p-4 w-80 bg-base-100 text-base-content">
        //         <li><a href='#banner' className="hover:underline decoration-pink-500 decoration-wavy">Home</a></li>
        //         <li><a href="#projects">Projects</a></li>
        //         <li><a href="https://form.jotform.com/223432459291356" target="blank">Contact Me</a></li>
        //     </ul>

        // </div>
    );
};

export default Header;
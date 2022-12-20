import React from 'react';
import car from '../Assets/car.jpg'
import dental from '../Assets/treatment.png'
import heart from '../Assets/heart.png'
import cover from '../Assets/cover-1.png'
import download from '../Assets/download.jpeg'
import typing from '../Assets/typing.png'
import { Link } from 'react-router-dom';
import PrimaryButton from './PrimaryButton';

const Projects = () => {
    return (
        <div className='py-10 lg:h-screen md:mx-4 lg:mx-8' id='projects'>
            <h2 className='font-bold text-4xl mb-5'>My Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className="card card-compact  border text-white bg-[#15213a] aos-init aos-animate" data-aos='fade-up'>
                    <figure><img src={car} alt="car" className='h-[250px] w-full transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-75' /></figure>
                    <div className="card-body text-justify">
                        <h2 className="card-title text-2xl">Simora Motors</h2>
                        <p className='font-bold'>This is a full-stack web development site to buy/sell used cars.</p>
                        <div className="card-actions mt-3 justify-end">
                            <a href='https://simora-motors-client.web.app/'>
                                <PrimaryButton>Live Site</PrimaryButton>
                            </a>
                            {/* <Link to='/simoramotors'><PrimaryButton>See Details</PrimaryButton></Link> */}
                        </div>
                    </div>
                </div>
                <div className="card card-compact  border text-white bg-[#15213a] aos-init aos-animate" data-aos='fade-down-right'>
                    <figure><img src={dental} alt="car" className='h-[250px] w-full transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-75' /></figure>
                    <div className="card-body text-justify">
                        <h2 className="card-title text-2xl">Simora Dental</h2>
                        <p className='font-bold'>This is a full-stack web development site to book doctor's appointments.</p>
                        <div className="card-actions mt-3 justify-end">
                            <a href='https://auth-react-context-3b499.web.app/'>
                                <PrimaryButton>Live Site</PrimaryButton>
                            </a>
                            {/* <Link to=''><PrimaryButton>See Details</PrimaryButton></Link> */}
                        </div>
                    </div>
                </div>
                <div className="card card-compact  border text-white bg-[#15213a] aos-init aos-animate" data-aos='fade-down-left'>
                    <figure><img src={heart} alt="car" className='h-[250px] w-full transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-75' /></figure>
                    <div className="card-body text-justify">
                        <h2 className="card-title text-2xl">Dr. Shihan Mostafizur</h2>
                        <p className='font-bold'>This is a full-stack doctor's website that provides different services and takes customer reviews.</p>
                        <div className="card-actions mt-3 justify-end">
                            <a href='https://dr-shihan-mostafizur.web.app/'>
                                <PrimaryButton>Live Site</PrimaryButton></a>
                            {/* <Link to=''><PrimaryButton>See Details</PrimaryButton></Link> */}
                        </div>
                    </div>
                </div>
                <div className="card border  text-white bg-[#15213a] aos-init aos-animate" data-aos='fade-left'>
                    <figure><img src={cover} alt="car" className='h-[250px] w-full transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-75' /></figure>
                    <div className="card-body text-justify">
                        <h2 className="card-title text-2xl">EdTech</h2>
                        <p className='font-bold'>This is a responsive Bootstrap-designed front-end development project with different sections.</p>
                        <div className="card-actions mt-3 justify-end">
                            <a href='https://edtechweb.netlify.app/'>
                                <PrimaryButton>Live Site</PrimaryButton></a>
                            {/* <Link to=''><PrimaryButton>See Details</PrimaryButton></Link> */}
                        </div>
                    </div>
                </div>
                <div className="card card-compact  border text-white bg-[#15213a] aos-init aos-animate" data-aos='fade-right'>
                    <figure><img src={download} alt="car" className='h-[250px] w-full transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-75' /></figure>
                    <div className="card-body text-justify">
                        <h2 className="card-title text-2xl">WD Basics</h2>
                        <p className='font-bold'>This is React and JavaScript-made front-end project that has quizzes for different subjects.</p>
                        <div className="card-actions mt-3 justify-end">
                            <a href='https://wd-basics.netlify.app/'>
                                <PrimaryButton>Live Site</PrimaryButton></a>
                            {/* <Link to=''><PrimaryButton>See Details</PrimaryButton></Link> */}
                        </div>
                    </div>
                </div>
                <div className="card card-compact  border text-white bg-[#15213a] aos-init aos-animate" data-aos='fade-down-left'>
                    <figure><img src={typing} alt="car" className='h-[250px] w-full transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-75' /></figure>
                    <div className="card-body text-justify">
                        <h2 className="card-title text-2xl">Speed Typer1</h2>
                        <p className='font-bold'>This is a debugging project using JavaScript.</p>
                        <div className="card-actions mt-3 justify-end">
                            <a href='https://speedtyper1.netlify.app/'>
                                <PrimaryButton>Live Site</PrimaryButton></a>
                            {/* <Link to=''><PrimaryButton>See Details</PrimaryButton></Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
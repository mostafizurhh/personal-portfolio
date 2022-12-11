import React from 'react';
import car from '../Assets/car.jpg'
import dental from '../Assets/treatment.png'
import heart from '../Assets/heart.png'
import cover from '../Assets/cover-1.png'
import download from '../Assets/download.jpeg'
import typing from '../Assets/typing.png'
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className='mt-10' id='projects'>
            <h2 className='font-bold text-4xl mb-5'>My Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className="card card-compact border aos-init aos-animate" data-aos='flip-up'>
                    <figure><img src={car} alt="car" className='h-[250px] w-full' /></figure>
                    <div className="card-body text-justify">
                        <h2 className="card-title">Simora Motors</h2>
                        <p>This is a full-stack website where MongoDB, ES6, React, Node.js, JWT and Firebase Authentication, and Stripe have been used. There are different routes for a Buyer, Seller, and Admin.</p>
                        <div className="card-actions mt-3 justify-end">
                            <a href='https://simora-motors-client.web.app/'>
                                <button className="btn btn-primary">Live Site</button></a>
                            <Link to=''><button className='btn btn-primary'> See Details</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact border aos-init aos-animate" data-aos='fade-down-right'>
                    <figure><img src={dental} alt="car" className='h-[250px] w-full' /></figure>
                    <div className="card-body text-justify">
                        <h2 className="card-title">Simora Dental</h2>
                        <p>This is an example of a full-stack website where JWT and Firebase Authentication has been used along with Stripe (for online card payment), MongoDB, ES6, Node.Js, and React. There are Admin and user routes.</p>
                        <div className="card-actions mt-3 justify-end">
                            <a href='https://auth-react-context-3b499.web.app/'>
                                <button className="btn btn-primary">Live Site</button></a>
                            <Link to=''><button className='btn btn-primary'> See Details</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact border aos-init aos-animate" data-aos='fade-down-left'>
                    <figure><img src={heart} alt="car" className='h-[250px] w-full' /></figure>
                    <div className="card-body text-justify">
                        <h2 className="card-title">Dr. Shihan Mostafizur</h2>
                        <p>This is a full-stack project where MongoDB, ES6, React, Node.js, JWT, and Firebase Authentication are used. After registration, a user will be able to add, modify, and remove a review to any service he has taken.</p>
                        <div className="card-actions mt-3 justify-end">
                            <a href='https://dr-shihan-mostafizur.web.app/'>
                                <button className="btn btn-primary">Live Site</button></a>
                            <Link to=''><button className='btn btn-primary'> See Details</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact border aos-init aos-animate" data-aos='fade-left'>
                    <figure><img src={cover} alt="car" className='h-[250px] w-full' /></figure>
                    <div className="card-body text-justify">
                        <h2 className="card-title">EdTech</h2>
                        <p>This is a front-end development projects with different courses and sections designed with Bootstrap.</p>
                        <div className="card-actions mt-3 justify-end">
                            <a href='https://edtechweb.netlify.app/'>
                                <button className="btn btn-primary">Live Site</button></a>
                            <Link to=''><button className='btn btn-primary'> See Details</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact border aos-init aos-animate" data-aos='fade-right'>
                    <figure><img src={download} alt="car" className='h-[250px] w-full' /></figure>
                    <div className="card-body text-justify">
                        <h2 className="card-title">WD Basics</h2>
                        <p>This is a front-end project made with React and JavaScript.</p>
                        <div className="card-actions mt-3 justify-end">
                            <a href='https://wd-basics.netlify.app/'>
                                <button className="btn btn-primary">Live Site</button></a>
                            <Link to=''><button className='btn btn-primary'> See Details</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact border aos-init aos-animate" data-aos='fade-down-left'>
                    <figure><img src={typing} alt="car" className='h-[250px] w-full' /></figure>
                    <div className="card-body text-justify">
                        <h2 className="card-title">Speed Typer1</h2>
                        <p>This is a debugging project wsing JavaScript.</p>
                        <div className="card-actions mt-3 justify-end">
                            <a href='https://speedtyper1.netlify.app/'>
                                <button className="btn btn-primary">Live Site</button></a>
                            <Link to=''><button className='btn btn-primary'> See Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
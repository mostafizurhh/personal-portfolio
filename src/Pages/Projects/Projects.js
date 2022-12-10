import React from 'react';
import car from '../Assets/car.jpg'
import dental from '../Assets/treatment.png'
import heart from '../Assets/heart.png'

const Projects = () => {
    return (
        <div className='my-10'>
            <h2 className='font-bold mb-5'>My Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={car} alt="car" /></figure>
                    <div className="card-body text-justify">
                        <h2 className="card-title">Simora Motors</h2>
                        <p>This is a full-stack website where MongoDB, ES6, React, Node.js, JWT and Firebase Authentication, and Stripe have been used. There are different routes for a Buyer, Seller, and Admin.</p>
                        <div className="card-actions justify-end">
                            <a href='https://simora-motors-client.web.app/'>
                                <button className="btn btn-primary">See Details</button></a>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={dental} alt="car" /></figure>
                    <div className="card-body text-justify">
                        <h2 className="card-title">Simora Dental</h2>
                        <p>This is an example of a full-stack website where JWT and Firebase Authentication has been used along with Stripe (for online card payment), MongoDB, ES6, Node.Js, and React. There are Admin and user routes.</p>
                        <div className="card-actions justify-end">
                            <a href='https://auth-react-context-3b499.web.app/'>
                                <button className="btn btn-primary">See Details</button></a>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={heart} alt="car" /></figure>
                    <div className="card-body text-justify">
                        <h2 className="card-title">Dr. Shihan Mostafizur</h2>
                        <p>This is a full-stack project where MongoDB, ES6, React, Node.js, JWT, and Firebase Authentication are used. After registration, a user will be able to add, modify, and remove a review to any service he has taken.</p>
                        <div className="card-actions justify-end">
                            <a href='https://dr-shihan-mostafizur.web.app/'>
                                <button className="btn btn-primary">See Details</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
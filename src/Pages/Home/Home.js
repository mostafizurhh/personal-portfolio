import React from 'react';
import Projects from './Projects';
import Header from '../Shared/Header/Header';
import About from './About';
import Banner from './Banner';
import Footer from '../Shared/Footer/Footer';
import Blog from './Blog';
import Skills from './Skills';

const Home = () => {
    return (
        <div className='grid grid-cols-6'>
            <div className='bg-[#15213a] md:fixed md:h-full md:w-1/6 p-2'>
                <Header></Header>
            </div>
            <div className='col-span-6 md:col-span-5 mx-5 md:sticky md:left-96 lg:sticky lg:left-64'>
                <Banner></Banner>
                <About></About>
                <Skills></Skills>
                <Projects></Projects>
                <Blog></Blog>
                <Footer></Footer>
            </div>
        </div>
        // <div>
        //     <Banner></Banner>
        //     <About></About>
        //     <Projects></Projects>
        // </div>
    );
};

export default Home;
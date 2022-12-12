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
            <div className='bg-[#15213a] w-0 lg:w-60 lg:fixed lg:h-full'>
                <Header></Header>
            </div>
            <div className='col-span-6 lg:col-span-5 mx-5 lg:sticky lg:left-72'>
                <Banner></Banner>
                <Skills></Skills>
                <Projects></Projects>
                <Blog></Blog>
                <About></About>
                <Footer></Footer>
            </div>
        </div>
    );
};
/* w-0 lg:w-60 lg:fixed lg:h-full */
/* className='col-span-6 lg:col-span-5 mx-4 lg:sticky lg:left-72' */
export default Home;
import React from 'react';

const AboutMe = () => {
    return (
        <div className="px-4 md:px-8 lg:px-16 py-8">
            <h2 className="text-[#F5B711] text-[32px] md:text-[36px] lg:text-[40px] font-semibold font-serif">
                ABOUT ME
            </h2>
            <p className="leading-[26px] md:leading-[28px] lg:leading-[30px] text-[#D5D5D5] text-base md:text-lg lg:text-xl mt-4 lg:w-[1140px] text-justify">
                I’m a Front End Web developer who is passionate about making{' '}
                <span className="bg-[#FFFAA0] text-black">error-free websites</span> with 100% client satisfaction. I am passionate about learning and sharing my knowledge with others as publicly as possible. I love to solve real-world problems.
                and I always <span className="bg-[#FFFAA0] text-black"> I am strategic and goal-oriented</span> work with an end goal in mind. Over the past years, I created 100s of websites for my clients. I pride myself on doing quality work and maintaining excellent communication. Most of the time I work with WordPress but some technologies I enjoy working with include ReactJS, JavaScript, and PHP.
            </p>
        </div>
    );
};

export default AboutMe;

 
import React from 'react';

const Address = () => {
    return (
        <div className="mb-20">
            <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="text-4xl text-[#f8b50d]">
                    <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="ml-0 md:ml-5 mt-3 md:mt-0 text-center md:text-left">
                    <h3 className="text-white text-2xl font-semibold">Address</h3>
                    <p className="text-white text-base font-medium">Mirpur-10, Dhaka – 1216</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start my-10">
                <div className="text-4xl text-[#f8b50d]">
                    <i className="fas fa-user"></i>
                </div>
                <div className="ml-0 md:ml-5 mt-3 md:mt-0 text-center md:text-left">
                    <h3 className="text-white text-2xl font-semibold">Phone</h3>
                    <p className="text-white text-base font-medium">+8801521702577</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="text-4xl text-[#f8b50d]">
                    <i className="far fa-envelope"></i>
                </div>
                <div className="ml-0 md:ml-5 mt-3 md:mt-0 text-center md:text-left">
                    <h3 className="text-white text-2xl font-semibold">Email</h3>
                    <p className="text-white text-base font-medium">example@example.com</p>
                </div>
            </div>
        </div>
    );
};

export default Address;

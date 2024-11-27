import React from 'react';

const SectionHeader = ({ title, subtitle }) => {
    return (
        <div className="text-center mt-12 lg:mt-24">
            <h2 className="text-3xl lg:text-[55px] text-[#F5B711] font-semibold">{title}</h2>
            <p className="text-white font-semibold mt-4 text-lg">{subtitle}</p>
        </div>
    );
};

export default SectionHeader;

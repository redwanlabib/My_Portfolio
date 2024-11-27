import React, { useState } from 'react';
import CardData from '../../Component/BlogCard';
import SectionTitle from '../../Component/SectionTitle';

const Video = () => {
    const itemsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);
    
    const totalPages = Math.ceil(CardData.length / itemsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const displayedItems = CardData.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="container mx-auto px-4">
            <div className="container mx-auto px-4">
                <SectionTitle 
                    title="Blog​"
                    subtitle="Practical project-based courses​"
                        />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 my-16 mb-44">
                {displayedItems.map((video, index) => (
                    <div key={index} className="max-w-sm mx-auto bg-[#1C222A] text-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
                        <a href={video.link} target="_blank" rel="noopener noreferrer">
                            <img
                                className="w-full h-[200px] sm:h-[250px] lg:w-[384px] lg:h-[300px] mx-auto"
                                src={video.image}
                                alt={video.title}
                            />
                        </a>
                        <div className="p-6">
                            <h3 className="text-lg lg:text-xl font-semibold uppercase mt-4">{video.title}</h3>
                            <p className="mt-4 leading-6 lg:leading-[27px] text-white">
                                {video.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center space-x-4 mb-12">
                <button
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className="px-5 py-3 rounded-md bg-[#F5B711] text-black font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Previous
                </button>

                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handleClick(index + 1)}
                        className={`px-5 py-3 rounded-md ${
                            currentPage === index + 1
                                ? 'bg-[#F5B711] text-black font-bold'
                                : 'bg-[#1C222A] text-white'
                        }`}
                    >
                        {index + 1}
                    </button>
                ))}

                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className="px-5 py-3 rounded-md bg-[#F5B711] text-black font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Video;
 
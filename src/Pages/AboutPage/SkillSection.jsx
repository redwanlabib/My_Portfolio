import React, { useState, useEffect } from 'react';

const Skill = () => {
    const [html, setHtml] = useState(0);
    const [css, setCss] = useState(0);
    const [js, setJs] = useState(0);
    const [node, setNode] = useState(0);
    const [bootstrap, setBootstrap] = useState(0);
    const [tailwind, setTailwind] = useState(0);
    const [figma, setFigma] = useState(0);

    const countUp = (setSkill, target) => {
        let current = 0;
        const interval = setInterval(() => {
            if (current < target) {
                current += 1;
                setSkill(current);
            } else {
                clearInterval(interval);
            }
        }, 20);
    };

    useEffect(() => {
        countUp(setHtml, 95);
        countUp(setCss, 90);
        countUp(setJs, 70);
        countUp(setNode, 60);
        countUp(setBootstrap, 80);
        countUp(setTailwind, 90);
        countUp(setFigma, 50);
    }, []);

    return (
        <div className="my-10 flex flex-col md:flex-row justify-center gap-6 lg:px-4">
            {/* Education Section */}
            <div className="bg-[#1C2229] w-full md:w-[700px] p-[40px] rounded-xl">
                <h2 className="text-3xl text-[#F8B90C] font-bold">EDUCATION</h2>
                <div>
                    <i className="fas fa-book-open text-lg text-[#F8B90C] mt-3"></i>
                    <p className="my-3 text-base font-semibold text-white">2024-2025</p>
                    <h4 className="text-xl font-bold text-white">Back-End Developer from CIT</h4> 
                </div>
                <div className="my-4">
                    <i className="fas fa-book-open text-lg text-[#F8B90C] mt-3"></i>
                    <p className="my-3 text-base font-semibold text-white">2023-2024</p>
                    <h4 className="text-xl font-bold text-white">Front-End Developer from CIT</h4> 
                </div>
                <div>
                    <i className="fas fa-book-open text-lg text-[#F8B90C] mt-3"></i>
                    <p className="my-3 text-base font-semibold text-white">2021-2025</p>
                    <h4 className="text-xl font-bold text-white">BBA -Hon's Department of Management</h4> 
                </div>
            </div>

            {/* Skill Section */}
            <div className="bg-[#1C2229] w-full md:w-[700px] p-[40px] rounded-xl">
                <h2 className="text-3xl text-[#F8B90C] font-bold mb-6">SKILL</h2>
                
                {/* Skill: HTML */}
                <div className="mb-4">
                    <div className="w-full bg-gray-300 h-10 relative">
                        <div className="bg-[#F8B90C] h-10 flex items-center justify-between px-6 py-4 text-black text-sm font-bold" style={{ width: `${html}%` }}>
                            <span>HTML</span>
                            <span>{html}%</span>
                        </div>
                    </div>
                </div>

                {/* Skill: CSS */}
                <div className="my-5">
                    <div className="w-full bg-gray-300 h-10 relative">
                        <div className="bg-[#F8B90C] h-10 flex items-center justify-between px-6 py-4 text-black text-sm font-bold" style={{ width: `${css}%` }}>
                            <span>CSS</span>
                            <span>{css}%</span>
                        </div>
                    </div>
                </div>

                {/* Skill: JavaScript */}
                <div className="mb-4">
                    <div className="w-full bg-gray-300 h-10 relative">
                        <div className="bg-[#F8B90C] h-10 flex items-center justify-between px-6 py-4 text-black text-sm font-bold" style={{ width: `${js}%` }}>
                            <span>JavaScript</span>
                            <span>{js}%</span>
                        </div>
                    </div>
                </div>
                {/* Skill: Node.js */}
                <div className="mb-4">
                    <div className="w-full bg-gray-300 h-10 relative">
                        <div className="bg-[#F8B90C] h-10 flex items-center justify-between px-6 py-4 text-black text-sm font-bold" style={{ width: `${node}%` }}>
                            <span>Node.js</span>
                            <span>{node}%</span>
                        </div>
                    </div>
                </div>

                {/* Skill: Bootstrap */}
                <div className="my-5">
                    <div className="w-full bg-gray-300 h-10 relative">
                        <div className="bg-[#F8B90C] h-10 flex items-center justify-between px-6 py-4 text-black text-sm font-bold" style={{ width: `${bootstrap}%` }}>
                            <span>Bootstrap</span>
                            <span>{bootstrap}%</span>
                        </div>
                    </div>
                </div>

                {/* Skill: Tailwind */}
                <div className="mb-5">
                    <div className="w-full bg-gray-300 h-10 relative">
                        <div className="bg-[#F8B90C] h-10 flex items-center justify-between px-6 py-4 text-black text-sm font-bold" style={{ width: `${tailwind}%` }}>
                            <span>Tailwind</span>
                            <span>{tailwind}%</span>
                        </div>
                    </div>
                </div>

                {/* Skill: Figma */}
                <div className="mb-4">
                    <div className="w-full bg-gray-300 h-10 relative">
                        <div className="bg-[#F8B90C] h-10 flex items-center justify-between px-6 py-4 text-black text-sm font-bold" style={{ width: `${figma}%` }}>
                            <span>Figma</span>
                            <span>{figma}%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;

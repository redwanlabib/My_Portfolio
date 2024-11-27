import { NavLink } from "react-router-dom";
import SectionTitle from '../../Component/SectionTitle';

const CardSection = () => {
    return (
        <div className="lg:p-8">
            <div className="container mx-auto px-4">
                <SectionTitle 
                title="What I do​"
                subtitle="My Services​"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-24 my-8 lg:my-16 lg:ml-[-60px]">
                {/* Card 1 */}
                <div className="w-full lg:w-[420px] max-w-md mx-auto py-8 bg-[#1C222A] text-white rounded-2xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
                    <i className="fa-brands fa-figma text-4xl lg:text-5xl text-[#f8b90c] font-extrabold mb-4"></i>
                    <h3 className="text-lg lg:text-xl font-semibold uppercase">FRont-end developer</h3>
                    <p className="mt-4 leading-6 lg:leading-[27px] text-white">
                    Entry-level, learning and contributing to basic UI tasks and projects. Focused on specific areas like accessibility, performance optimization, or a framework like React.
                    </p>
                    <h4 className="mt-6 flex items-center gap-2 text-white font-semibold">
                        Say Hello
                        <NavLink to="/BlogPage">
                            <i className="cursor-pointer text-[#f8b90c] fa-solid fa-arrow-right mt-[6px] ml-2"></i>
                        </NavLink>
                    </h4>
                </div>
                {/* Card 2 */}
                <div className="w-full lg:w-[420px] max-w-md mx-auto py-8 bg-[#1C222A] text-white rounded-2xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
                    <i className="fas fa-laptop-code text-4xl lg:text-5xl text-[#f8b90c] font-extrabold mb-4"></i>
                    <h3 className="text-lg lg:text-xl font-semibold uppercase">Back-end developer</h3>
                    <p className="mt-4 leading-6 lg:leading-[27px] text-white">
                        A Back-End Developer focuses on server-side functionality, building APIs, managing databases, and ensuring application security and performance. Skilled in programming languages (e.g. Node.js), databases (SQL, NoSQL), and frameworks (Django, Express). They enable seamless data processing and power the front-end experience.
                    </p>
                    <h4 className="mt-6 flex items-center gap-2 text-white font-semibold">
                        Say Hello
                        <NavLink to="/BlogPage">
                            <i className="cursor-pointer text-[#f8b90c] fa-solid fa-arrow-right mt-[6px] ml-2"></i>
                        </NavLink>
                    </h4>
                </div>
                {/* Card 3 */}
                <div className="w-full lg:w-[420px] max-w-md mx-auto py-8 bg-[#1C222A] text-white rounded-2xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
                    <i className="fa-solid fa-cogs text-4xl lg:text-5xl text-[#f8b90c] font-extrabold mb-4"></i>
                    <h3 className="text-lg lg:text-xl font-semibold uppercase">Problem Solving</h3>
                    <p className="mt-4 leading-6 lg:leading-[27px] text-white">
                        Skilled at troubleshooting and optimizing code, ensuring smooth and efficient website functionality for a seamless user experience.
                    </p>
                    <h4 className="mt-6 flex items-center gap-2 text-white font-semibold">
                        Say Hello
                        <NavLink to="/BlogPage">
                            <i className="cursor-pointer text-[#f8b90c] fa-solid fa-arrow-right mt-[6px] ml-2"></i>
                        </NavLink>
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default CardSection;

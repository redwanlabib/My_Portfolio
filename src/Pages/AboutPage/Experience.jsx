import SectionTitle from '../../Component/SectionTitle';

const Experience = () => {
    return (
        <div className="">
            <div className="container mx-auto px-4 lg:mb-20">
                <SectionTitle 
                    title="EXPERIENCE​"
                    subtitle="What I have done?​"
                />
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-x-4 items-start p-6 py-10 bg-[#1C2229] rounded-xl shadow-md">
                <div className="text-[#F5B711] text-5xl md:text-6xl mr-4">
                    <i className="fas fa-laptop-code"></i>
                </div>
                <div>
                    <h5 className="font-medium text-white text-base">2024 - Present</h5>
                    <h4 className="text-lg font-bold text-white my-1">www.fiverr.com</h4>
                    <p className="text-[#DDDDDD] my-2 font-ui-monospace font-medium">
                        I am Md jihad, a pixel-perfect web developer with expertise and experience in web development since 2014.
                        Full and fresh hand-coded solutions are my strength. Client satisfaction is my top priority. Work with me and
                        enjoy the results.
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-x-4 items-start p-6 py-10 bg-[#1C2229] rounded-xl shadow-md my-8">
                <div className="text-[#F5B711] text-5xl md:text-6xl mr-4">
                    <i className="fas fa-laptop-code"></i>
                </div>
                <div>
                    <h5 className="font-medium text-white text-base">2024 - Present</h5>
                    <h4 className="text-lg font-bold text-white my-1">www.fiverr.com</h4>
                    <p className="text-[#DDDDDD] my-2 font-system-ui font-medium">
                        I am working on Upwork as a WordPress Theme Designer and Developer. My design is simple & fresh. My coding is W3C validated, fresh, SEO optimized, and also hand-coded. I work flexibly with clients to fulfill their design & development needs. Work with me and create a website that you are gonna be proud of. Use my work in your Business, Portfolio, Agency, Photography, eCommerce & much more.
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-x-4 items-start p-6 py-10 bg-[#1C2229] rounded-xl shadow-md">
                <div className="text-[#F5B711] text-5xl md:text-6xl mr-4">
                    <i className="fas fa-laptop-code"></i>
                </div>
                <div>
                    <h5 className="font-medium text-white text-base">2024 - Present</h5>
                    <h4 className="text-lg font-bold text-white my-1">Web Development Farm </h4>
                    <p className="text-[#DDDDDD] my-2 font-system-ui font-medium">
                        I am working on a remote job in a USA-based company as a WordPress Theme Developer and plugin Developer. My main job is to create a WordPress theme, customization, and create based on client needs. 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Experience;

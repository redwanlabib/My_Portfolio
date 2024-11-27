import SectionTitle from '../../Component/SectionTitle';
const CardSection = () => {
    return (
        <div className="lg:p-8">
            <div className="container mx-auto px-4">
                <SectionTitle 
                    title="Contact​"
                    subtitle=" Are You Looking For Your Business Online Presence? I am here. 🙂​"
                />
            </div>
                    
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-24 my-8 lg:my-16 lg:ml-[-60px]">
                {/* Contact Card 1 */}
                <div className="mx-auto w-full lg:w-[420px] max-w-md py-9 bg-[#1C222A] text-white rounded-2xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center">
                    <i className="text-[#F8B90C] text-[40px] fa-solid fa-user"></i>
                    <h3 className="text-white text-2xl font-semibold my-2 text-center">Redwan Labib</h3>
                    <p className="text-white text-base font-medium text-center">Full-Stack  Web Developer (Bangladesh)</p>
                </div>     
                
                {/* Contact Card 2 */}
                <div className="mx-auto w-full lg:w-[420px] max-w-md py-9 bg-[#1C222A] text-white rounded-2xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center">
                    <i className="fa-solid fa-user-group text-[#F8B90C] text-[40px]"></i>
                    <h3 className="text-white text-2xl font-semibold my-2 text-center">Freelance</h3>
                    <p className="text-white text-base font-medium text-center">Available Right Now</p>
                </div>     
                
                {/* Contact Card 3 */}
                <div className="mx-auto w-full lg:w-[420px] max-w-md py-9 bg-[#1C222A] text-white rounded-2xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center">
                    <i className="fa-solid fa-envelope text-[#F8B90C] text-[40px]"></i>
                    <h3 className="text-white text-2xl font-semibold my-2 text-center">Email</h3>
                    <p className="text-white text-base font-medium text-center">web.redwanlabib@gmail.com</p>
                </div>     
            </div>
        </div>
    );
};

export default CardSection;

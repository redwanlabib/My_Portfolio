import ClientsImg1 from '../../assets/images/Clients.jpg';
import ClientsImg2 from '../../assets/images/rossbrown.jpg';
import ClientsImg3 from '../../assets/images/ryangladhill.jpg';
import SectionTitle from '../../Component/SectionTitle';

const CardSection = () => {
    return (
        <div className="lg:p-8">
            <div className="container mx-auto px-4">
                <SectionTitle 
                title="TESTIMONIALS​"
                subtitle="What my Clients are saying?​"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-24 my-8 lg:my-16 lg:ml-[-60px]">
                {/* Testimonial 1 */}
                <div className="mx-auto w-full lg:w-[420px] max-w-md py-8 bg-[#1C222A] text-white rounded-2xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
                    <p className="mt-4 leading-6 text-white">
                        He is a very nice guy to work with. Thanks a lot for helping and I will do more business with you 🙂
                    </p>
                    <img className='rounded-full mt-6 w-20 h-20 mx-auto' src={ClientsImg1} alt="Client 1" />
                    <h4 className='text-[#F8B90C] text-xl font-semibold my-2 text-center'>mbdevboston</h4>
                    <h5 className='text-white text-center text-lg font-medium'>Designer</h5> 
                </div>      
                {/* Testimonial 2 */}
                <div className="mx-auto w-full lg:w-[420px] max-w-md py-8 bg-[#1C222A] text-white rounded-2xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
                    <p className="mt-4 leading-6 text-white">
                        Great experience, highly recommend him. Worked through all my questions with me and was very timely in his responsiveness.
                    </p>
                    <img className='rounded-full mt-6 w-20 h-20 mx-auto' src={ClientsImg2} alt="Client 2" />
                    <h4 className='text-[#F8B90C] text-xl font-semibold my-2 text-center'>rossbrown</h4>
                    <h5 className='text-white text-center text-lg font-medium'>Manager</h5> 
                </div>      
                {/* Testimonial 3 */}
                <div className="mx-auto w-full lg:w-[420px] max-w-md py-8 bg-[#1C222A] text-white rounded-2xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
                    <p className="mt-4 leading-6 text-white">
                        He is a very nice guy to work with. Thanks a lot for helping and I will do more business with you 🙂
                    </p>
                    <img className='rounded-full mt-6 w-20 h-20 mx-auto' src={ClientsImg3} alt="Client 3" />
                    <h4 className='text-[#F8B90C] text-xl font-semibold my-2 text-center'>ryangladhill</h4>
                    <h5 className='text-white text-center text-lg font-medium'>Manager</h5> 
                </div>      
            </div>
        </div>
    );
};

export default CardSection;

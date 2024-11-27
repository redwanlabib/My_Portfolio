import { NavLink } from 'react-router-dom';
import testimonialsData from '../../Component/CoursesData';
import SectionTitle from '../../Component/SectionTitle';

const Testimonials = () => {
  const displayedTestimonials = testimonialsData.slice(6, 12);

  return (
    <div className="lg:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="TESTIMONIALS"
          subtitle="What my Clients are saying?"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {displayedTestimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="w-full max-w-md mx-auto py-8 bg-[#1C222A] text-white rounded-2xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="flex">
              <img src={testimonial.imageUrl} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover" />
              <div className="ml-4">
                <h3 className="mb-2">{testimonial.name}</h3>
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <i key={index} className="fa-solid fa-star text-[#F5B711]"></i>
                  ))}
                </div>
              </div>
            </div>
            <h3 className="text-lg lg:text-xl font-semibold uppercase mt-4">{testimonial.course}</h3>
            <p className="mt-4 leading-6 lg:leading-[27px] text-white">
              {testimonial.feedback}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center my-8">
        <NavLink to="/ContactPage">
          <button className="text-white text-[12px] lg:text-lg font-semibold lg:px-[30px] font-Sans-serif w-[165px] lg:w-[245px] h-[48px] lg:h-[58px] rounded-full bg-[#f8b90c] shadow-custom flex items-center justify-center text-center animate-button-move">
            INSTRUCTOR PROFILE
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Testimonials;



import HeroImg from '../../assets/images/Man.jpg';

const AboutHero = () => {
    return (
        <div className="flex justify-center items-center px-4 py-12">
            <div className="text-center">
                <img
                    className="w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] rounded-full mx-auto"
                    src={HeroImg}
                    alt="Md Jahidul Islam (Jihad)"
                />
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4">
                    REDWANUL HASSAN LABIB
                </h2>
                <h4 className="text-base sm:text-lg md:text-xl text-gray-300 mt-2">
                    Web Developer ( Full-Stack )
                </h4>
            </div>
        </div>
    );
};

export default AboutHero;

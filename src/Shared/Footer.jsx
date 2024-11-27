
const Footer = () => {
    return (
        <div className="">
            <footer className="flex flex-col md:flex-row justify-center md:justify-between items-center p-6 bg-[#1C222A] text-white space-y-4 md:space-y-0 lg:w-[209vh] lg:ml-[-126px] lg:p-8 lg:px-[100px]">
                <div className="flex space-x-6 justify-center md:justify-start">
                    <a href="https://www.facebook.com/Redwanul.Hasan.Labib" className="text-[#F8B90C]">
                        <i className="fab fa-facebook-f text-[#262626] bg-white w-[45px] h-[45px] flex items-center justify-center rounded-full shadow-[0px_0px_5px_0px_#f9c873]"></i>
                    </a>
                    <a href="https://x.com/LabibRedwa42767" className="text-[#F8B90C]">
                        <i className="fab fa-twitter text-[#262626] bg-white w-[45px] h-[45px] flex items-center justify-center rounded-full shadow-[0px_0px_5px_0px_#f9c873]"></i>
                    </a>
                    <a href="https://www.instagram.com/redwanlabib/" className="text-[#F8B90C]">
                        <i className="fab fa-instagram text-[#262626] bg-white w-[45px] h-[45px] flex items-center justify-center rounded-full shadow-[0px_0px_5px_0px_#f9c873]"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/redwanul-hassan-labib-522a66212/" className="text-[#F8B90C]">
                        <i className="fab fa-linkedin-in text-[#262626] bg-white w-[45px] h-[45px] flex items-center justify-center rounded-full shadow-[0px_0px_5px_0px_#f9c873]"></i>
                    </a>
                </div>
                <p className="text-sm font-semibold text-[#F8B90C] text-center md:text-right">
                    © All Rights Reserved 2024 - 2025 | Redwan Labib
                </p>
                <a href="#" class="block bg-[url('https://alihossain.com/wp-content/themes/aliHossain/img/top.png')] bg-cover bg-center fixed bottom-5 right-5 w-9 h-9 text-white text-center text-[transparent]"></a>
            </footer>
        </div>
    );
};

export default Footer;

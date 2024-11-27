import React, { useState } from 'react';
import SectionTitle from '../../Component/SectionTitle';
import HandImg from '../../assets/images/Hand.png';

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [alert, setAlert] = useState('');
  const [alertType, setAlertType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && email && message) {
      setAlert('All information complete.');
      setAlertType('positive');
    } else {
      setAlert('Please fill all fields.');
      setAlertType('negative');
    }
  };

  return (
    <div className="lg:py-10">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Contact​"
          subtitle="Let's Talk About Ideas​"
        />
      </div>
      
      <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-10 my-20"> 
        {/* Personal Info Section */}
        <div className="text-center lg:text-left mb-10 lg:mb-0">
          <img src={HandImg} alt="Hand" className="rounded-xl mx-auto lg:mx-0" />
          <h2 className="text-2xl lg:text-3xl font-semibold text-white mt-4">REDWANUL HASSAN LABIB</h2>
          <h3 className="text-xl text-white my-3">Web Developer ( Full-Stack )</h3>
          <p className="text-lg text-white">Are You Looking For Your Business Online Presence? I am here. 🙂</p>
        </div>
        
        {/* Form Section */}
        <div className="w-full lg:w-[630px] mx-auto">
            <form onSubmit={handleSubmit} className='p-2 lg:p-0'>
                {/* Input Fields */}
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-1/2">
                        <label htmlFor="firstName" className="block font-medium text-[17px] text-white mb-3">First Name *</label>
                        <input
                            id="firstName"
                            type="text"
                            className="w-full p-2 border hover:border-[#f8b50d] bg-[#1C222A] border-gray-300 rounded-xl mt-1"
                            placeholder="John"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <label htmlFor="lastName" className="block font-medium text-[17px] text-white mb-3">Last Name *</label>
                        <input
                            id="lastName"
                            type="text"
                            className="w-full p-2 border hover:border-[#f8b50d] bg-[#1C222A] border-gray-300 rounded-xl mt-1"
                            placeholder="Doe"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                </div>

                <div className="my-8">
                    <label htmlFor="email" className="block font-medium text-[17px] text-white mb-3">Email Address *</label>
                    <input
                        id="email"
                        type="email"
                        className="w-full p-2 border hover:border-[#f8b50d] border-gray-300 bg-[#1C222A] rounded-xl mt-1"
                        placeholder="example@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block font-medium text-[17px] text-white mb-3">Message *</label>
                    <textarea
                        id="message"
                        className="w-full p-2 bg-[#1C222A] border border-gray-300 hover:border-[#f8b50d] rounded-xl mt-1"
                        placeholder="Tell us more about your project"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>

                {/* Alert Messages */}
                {alert && (
                <div
                    className={`p-4 mb-4 text-white rounded-xl ${
                    alertType === 'positive' ? 'bg-green-500' : 'bg-red-500'
                    }`}
                >
                    {alert}
                </div>
                )}

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full px-4 py-3 bg-[#f8b50d] text-white rounded-xl hover:bg-[#d19809] mt-4"
                >
                    Submit
                </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

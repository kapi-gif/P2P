import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../Images/logo1.png';
import i1 from '../Images/icon1.svg';
import i2 from '../Images/icon2.svg';
import i3 from '../Images/icon3.svg';

export const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectName: '',
    cryptoName: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className='bg-gray-100'>
      {/* Marquee Section */}
      <div className="sticky top-0 z-50 overflow-hidden whitespace-nowrap bg-black text-white py-2">
        <div className="animate-marquee flex space-x-10 px-4 text-sm md:text-base">
          <p>Total Transaction Volume: <span className="ml-1">ATH:</span> <span className="text-yellow-400">126M</span></p>
          <p>Total Commission: <span className="ml-1">ATH:</span> <span className="text-yellow-400">3.2M</span></p>
          <p>Total USDT Withdrawn: <span className="ml-1 text-yellow-400">22M</span></p>
          <p>Total USDT Deposited: <span className="ml-1 text-yellow-400">30M</span></p>
          <p>Total Users: <span className="ml-1 text-yellow-400">964K</span></p>
          <p>Total Transactions: <span className="ml-1 text-yellow-400">430K</span></p>
        </div>
      </div>

      {/* Navbar Section */}
      <nav className="flex flex-col lg:flex-row justify-between items-center px-4 md:px-10 py-3 bg-white shadow">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 lg:gap-12 font-semibold">
          <img src={logo1} alt="logo" className="w-24 h-auto" />
          <span>Athene Network</span>
          <Link to="/register" className="text-green-600">Register for Listing</Link>
          <span>More</span>
        </div>
        <div className="flex gap-3 mt-2 lg:mt-0">
          <span>Login</span>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition">Register</button>
        </div>
      </nav>

      {/* Multi-Step Form Section */}
      <div className="max-w-xl mx-4 sm:mx-auto mt-10 p-6 sm:p-8 bg-white/80 backdrop-blur-lg shadow-xl rounded-xl border border-gray-200">
        <h2 className="text-xl sm:text-3xl font-bold text-center mb-8 text-gray-800">Register to List Cryptocurrency</h2>

        <div className="flex justify-between mb-8 text-sm font-medium text-gray-500">
          <span className={step === 1 ? "text-blue-600 font-bold" : ""}>1 Basic Info</span>
          <span className={step === 2 ? "text-blue-600 font-bold" : ""}>2 Add Details</span>
          <span className={step === 3 ? "text-blue-600 font-bold" : ""}>3 Complete</span>
        </div>

        {step === 1 && (
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold">Project Name</label>
              <input
                type="text"
                name="projectName"
                value={formData.projectName}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Project Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Cryptocurrency Name</label>
              <input
                type="text"
                name="cryptoName"
                value={formData.cryptoName}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Crypto Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Email Address"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={nextStep}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 text-center">
            <p className="text-gray-600">[You can add more detailed fields here later]</p>
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="bg-gray-300 text-black px-6 py-2 rounded-lg"
              >
                Back
              </button>
              <button
                onClick={nextStep}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-semibold text-green-600">🎉 Registration Complete!</h3>
            <p className="text-gray-700">Thank you for registering your cryptocurrency listing.</p>
            <button
              onClick={() => setStep(1)}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
            >
              Submit Another
            </button>
          </div>
        )}
      </div>


      {/* Footer Section */}
      <div className='mx-4 sm:mx-auto max-w-7xl mt-10 p-4 sm:p-6 bg-white rounded-lg shadow-md text-black border-2 border-gray-300 '>

        {/* 
               
               <div className="flex flex-col sm:flex-row items-center gap-2 mb-4 sm:mb-6"> 
                 <img
                   src={logo1}
                   alt="logo1"
                   className="w-[21px] sm:w-[150px] md:w-[180px] object-contain h-[100px]"
                 />
               </div> */}

        {/* Row 2 */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-3"> {/* Reduced gap */}

          {/* Links Section */}
          <div className="grid grid-cols-2 sm:flex sm:flex-row items-center sm:justify-start gap-3 sm:gap-6 font-semibold text-sm sm:text-base text-center sm:text-left "> {/* Reduced gap */}
            <p>Piswap Network</p>
            <p>Download App</p>
            <Link to="/Privacy">Privacy Policy</Link>
            <Link to="/terms-of-use">Terms of Use</Link>
          </div>

          {/* Icons Section */}
          <div className="flex gap-4 mt-4 sm:mt-0"> {/* Reduced gap */}
            {[i1, i2, i3].map((icon, idx) => (
              <div
                key={idx}
                className="bg-gray-900 p-3 rounded-full transform transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={icon}
                  alt={`icon${idx}`}
                  className="w-5 h-5 sm:w-5 sm:h-5"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

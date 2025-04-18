import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo1.png';
import i1 from '../Images/icon1.svg'
import i2 from '../Images/icon2.svg'
import i3 from '../Images/icon3.svg'

function Reg2() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    inviteCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration form submission here
    console.log(formData);
  };

  return (
    // <div className="bg-gradient-to-r from-purple-300 via-pink-200 to-yellow-200">
    <div className="bg-gray-100">
      {/* Scrolling Marquee */}
      <div className="sticky top-0 z-50 overflow-hidden whitespace-nowrap bg-black text-white py-2">
        <div className="animate-marquee flex space-x-8 md:space-x-12 lg:space-x-16 text-sm md:text-base px-4">
          {[
            "Total Transaction Volume: ATH: 126M GEM: 6T USDT: 25M Other: 18T",
            "Total Commission: ATH: 3.2M GEM: 127B USDT: 1.3M",
            "Total USDT Withdrawn: 22M",
            "Total USDT Deposited: 30M",
            "Total Users: 964K",
            "Total Transactions: 430K",
          ].map((text, index) => (
            <p key={index} className="shrink-0 text-yellow-400">{text}</p>
          ))}
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-[40px] z-40 flex flex-col md:flex-row justify-between items-center px-4 md:px-8 lg:px-16 py-4 bg-white shadow-md">
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 font-semibold text-base">
          <img src={logo} alt="logo" className="w-40 h-auto" />
          <li className="list-none ">Piswap Network</li>
          <Link to="/register" className="text-green-600 hover:text-green-800">Register for Listing</Link>
          <li className="list-none">More</li>
        </div>
        <div className="flex items-center space-x-4 mt-2 md:mt-0">
          <Link to="/register" className=" cursor-pointer grow text-center">Login</Link>
          <li className="list-none">
            <button className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition">
              Register
            </button>
          </li>
        </div>
      </nav>

      {/* Registration Form */}
      <div className="max-w-xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12 space-y-8 bg-white mt-8 md:mt-12 rounded-2xl shadow">
        <h1 className="text-2xl md:text-3xl font-bold text-center">Register</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Your Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
            />
            <p className="text-sm text-gray-500 mt-1">
              Length: 8 to 32 characters. Must contain at least one lowercase letter, one uppercase letter, one number, and one special character.
            </p>
          </div>

          {/* Confirm Password Field */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Enter Password Again</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          {/* Country Field */}
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          {/* Invite Code Field (Optional) */}
          <div>
            <label htmlFor="inviteCode" className="block text-sm font-medium text-gray-700">Invite Code (Not Required)</label>
            <input
              type="text"
              id="inviteCode"
              name="inviteCode"
              value={formData.inviteCode}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          {/* Connect Athene App */}
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="connectApp" className="h-4 w-4" />
            <label htmlFor="connectApp" className="text-sm">Connect Athene App</label>
          </div>

          {/* Terms and Conditions */}
          <div className="text-sm text-gray-500">
            By clicking "Register", you agree with our <Link to="/terms" className="text-blue-600 hover:text-blue-800">Terms of Service</Link> and <Link to="/privacy" className="text-blue-600 hover:text-blue-800">Privacy Policy</Link>.
          </div>

          {/* Register Button */}
          <div className="text-center">
            <button type="submit" className="w-full bg-gray-800 text-white px-4 py-3 rounded-full hover:bg-gray-700">
              Register
            </button>
          </div>
        </form>
      </div>



      {/* Footer Section */}
      <div className='mx-4 sm:mx-auto max-w-7xl mt-10 p-4 sm:p-6  bg-white  rounded-lg shadow-md text-black border-2 border-gray-300 '>

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
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>

  );
}

export default Reg2;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo1.png';
import i1 from '../Images/icon1.svg'
import i2 from '../Images/icon2.svg'
import i3 from '../Images/icon3.svg'
import { Menu, X } from 'lucide-react';
import gi from '../Images/gift.svg'
import fl from '../Images/flag.svg'

function Reg2() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    inviteCode: '',
  });

  const [menuOpen, setMenuOpen] = useState(false); // ✅ Correct place
  const toggleMenu = () => setMenuOpen(!menuOpen); // ✅ Correct place

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-gray-100">
      {/* Marquee */}
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
      <nav className="sticky top-[40px] z-40 bg-white shadow-md">
        <div className="flex justify-between items-center px-4 py-3 md:px-8">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="w-[100px] md:w-[140px]" />
            <span className="font-semibold text-sm md:text-base ml-5 text-[17px]">Piswap Network</span>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 text-sm md:text-base">
            <div className="mr-[360px] flex items-center gap-x-16 text-[17px] font-semibold">
              <Link to="/register" className="text-green-600 hover:text-green-800">Register for Listing</Link>
              <span>More</span>
            </div>
            <Link to="/login" className="font-semibold">Login</Link>
            <Link to="/reg2">
              <button className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition">
                Register
              </button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center cursor-pointer hover:bg-gray-300">
                <img src={gi} alt="Gift" />
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300 mr-[40px]">
                <img src={fl} alt="Flag" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-4 py-2 bg-white space-y-2">
            <Link to="/register" className="block text-green-600 hover:text-green-800">Register for Listing</Link>
            <span className="block">More</span>
            <Link to="/login" className="block">Login</Link>
            <button className="w-full bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition">Register</button>
          </div>
        )}
      </nav>


      {/* Registration Form */}
      <div className="max-w-xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12 space-y-8 bg-white mt-8 md:mt-12 rounded-2xl shadow">
        <h1 className="text-2xl md:text-3xl font-bold text-center">Register</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <InputField type="email" name="email" value={formData.email} onChange={handleChange} label="Your Email" />
          <InputField type="password" name="password" value={formData.password} onChange={handleChange} label="Your Password" info="Length: 8 to 32 characters. Must contain at least one lowercase letter, one uppercase letter, one number, and one special character." />
          <InputField type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} label="Enter Password Again" />
          <InputField type="text" name="country" value={formData.country} onChange={handleChange} label="Country" />
          <InputField type="text" name="inviteCode" value={formData.inviteCode} onChange={handleChange} label="Invite Code (Not Required)" />

          <div className="flex items-center space-x-2">
            <input type="checkbox" id="connectApp" className="h-4 w-4" />
            <label htmlFor="connectApp" className="text-sm">Connect Athene App</label>
          </div>

          <div className="text-sm text-gray-500">
            By clicking "Register", you agree with our <Link to="/terms" className="text-blue-600 hover:text-blue-800">Terms of Service</Link> and <Link to="/privacy" className="text-blue-600 hover:text-blue-800">Privacy Policy</Link>.
          </div>

          <div className="text-center">
            <button type="submit" className="w-full bg-gray-800 text-white px-4 py-3 rounded-full hover:bg-gray-700">
              Register
            </button>
          </div>
        </form>
      </div>

      {/* Footer Section */}
      <div className='mx-4 sm:mx-auto max-w-7xl mt-10 p-4 sm:p-6  bg-white rounded-lg shadow-md text-black border-2 border-gray-300 '>

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
            <Link to="/terms">Terms of Use</Link>
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
}

// 🧩 Reusable input field component
function InputField({ type, name, value, onChange, label, info }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={type !== 'text' || name !== 'inviteCode'}
        className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
      />
      {info && <p className="text-sm text-gray-500 mt-1">{info}</p>}
    </div>
  );
}

export default Reg2;

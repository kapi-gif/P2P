import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../Images/logo1.png';
import main1 from '../Images/image1.jpg';

import i1 from '../Images/icon1.svg'
import i2 from '../Images/icon2.svg'
import i3 from '../Images/icon3.svg'

import gi from '../Images/gift.svg'
import fl from '../Images/flag.svg'

function Jump() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const tokenomicsData = [
        { label: "Airdrop for Golden & Diamond Members", percentage: 5, color: '#1e40af' },
        { label: "Funding Rounds", percentage: 55, color: '#10b981' },
        { label: "Reserve", percentage: 5, color: '#facc15' },
        { label: "Marketing", percentage: 10, color: '#fb923c' },
        { label: "Add LP", percentage: 15, color: '#ef4444' },
        { label: "Founders", percentage: 10, color: '#8b5cf6' },
    ];

    const getConicGradient = () => {
        let gradient = "";
        let total = 0;
        tokenomicsData.forEach((item) => {
            const start = total;
            total += item.percentage;
            gradient += `${item.color} ${start}% ${total}%, `;
        });
        return `conic-gradient(${gradient.slice(0, -2)})`;
    };

    return (
        // <div className="bg-gradient-to-r from-purple-300 via-pink-200 to-yellow-200">
        <div className="bg-gray-200">

            <div className="sticky top-0 z-50 overflow-hidden whitespace-nowrap bg-black text-white py-2">
                <div className="animate-marquee flex space-x-16">
                    {Array(2).fill(0).map((_, idx) => (
                        <React.Fragment key={idx}>
                            <p>Total Transaction Volume: <span className="ml-1">ATH:</span> <span className="text-yellow-400">126M</span>
                                <span className="ml-2">GEM:</span> <span className="text-yellow-400">6T</span>
                                <span className="ml-2">USDT:</span> <span className="text-yellow-400">25M</span>
                                <span className="ml-2">Other:</span> <span className="text-yellow-400">18T</span></p>
                            <p>Total Commission: <span className="ml-1">ATH:</span> <span className="text-yellow-400">3.2M</span>
                                <span className="ml-2">GEM:</span> <span className="text-yellow-400">127B</span>
                                <span className="ml-2">USDT:</span> <span className="text-yellow-400">1.3M</span></p>
                            <p>Total USDT Withdrawn: <span className="text-yellow-400">22M</span></p>
                            <p>Total USDT Deposited: <span className="text-yellow-400">30M</span></p>
                            <p>Total Users: <span className="text-yellow-400">964K</span></p>
                            <p>Total Transactions: <span className="text-yellow-400">430K</span></p>
                        </React.Fragment>
                    ))}
                </div>
            </div>

          {/* Navbar */}
              <nav className="sticky top-[40px] z-40 bg-white shadow-md">
                <div className="flex justify-between items-center px-4 py-3 md:px-8">
                  <div className="flex items-center space-x-4">
                    <img src={logo} alt="Logo" className="w-[100px] md:w-[140px]" />
                    <div className="flex items-center">
                      <span className="font-semibold text-sm md:text-base ml-5 text-[17px] font-semibold">Piswap Network</span>
                    </div>
        
                    {/* <span className="font-semibold text-[23px] ">Piswap Network</span> */}
        
        
                  </div>
        
                  {/* Mobile menu icon */}
                  <div className="md:hidden">
                    <button onClick={toggleMenu}>
                      {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                  </div>
        
                  {/* Desktop Menu */}
                  <div className="hidden md:flex items-center space-x-6 text-sm md:text-base">
                    <div className="mr-[360px] flex items-center gap-x-16 text-[17px] font-semibold">
                      <Link to="/register" className="text-green-600 hover:text-green-800">Register for Listing</Link>
                      <span >More </span>
                    </div>
        
                    <Link to="/login" className=" cursor-pointer grow text-center font-semibold">Login</Link>
                    <Link to="/reg2">
                      <button className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition">
                        Register
                      </button>
                    </Link>
                    <div className="flex items-center gap-3">
        
                      <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center cursor-pointer hover:bg-gray-300">
                        <img src={gi} alt="Logo" />
                      </div>
        
                      {/* Second Icon */}
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300 mr-[40px]">
                        <img src={fl} alt="Logo" />
                      </div>
                    </div>
        
                  </div>
                </div>
        
                {/* Mobile Menu */}
                {menuOpen && (
                  <div className="md:hidden px-4 py-2 bg-white space-y-2">
                    <Link to="/register" className="block text-green-600 hover:text-green-800">Register for Listing</Link>
                    <span className="block">More</span>
                    <span className="block">Login</span>
                    <button className="w-full bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition">Register</button>
                  </div>
                )}
              </nav>
        
              {/* Buttons Row */}
              <div className='flex justify-between items-center px-4 md:px-16 mt-2'>
        
                <Link to="/jump">
                  <button className="bg-yellow-400 text-black px-4 py-2 rounded-3xl ml-2 font-semibold mt-2">
                    Jumpstart
                  </button>
                </Link>
        
              </div>

            {/* Banner */}
            <div className='px-4 md:px-16 mt-10'>
                <img src={main1} alt="Main Banner" className="w-full max-w-[1200px] h-auto mx-auto" />
            </div>

            <h2 className="text-3xl font-bold mb-6 text-center mt-[20px]">
                Introducing AtheEx (ATX) on Piswap P2P Jumpstart
            </h2>



            {/* Tokenomics + P2P Section */}
            <div className='px-4 md:px-0 py-10'>
                <div className='max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-8'>

                    {/* Tokenomics Card */}
                    <div className="bg-white text-black rounded-lg p-6 w-full lg:w-[72%] shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4">Short Description</h3>
                        <p className="mb-2 font-semibold">
                            AtheEx is the central exchange platform of the Athene Network, providing various financial services
                            and aims to enhance user experiences by offering innovative trading solutions and secure transactions.
                        </p>
                        <p className="mb-1 font-semibold"><strong>Timeline:</strong> 4th August 2024 to 4th January 2025 (5 months)</p>
                        <p className='font-semibold'><strong>Rewards Pool:</strong> 500,000 ATX over 5 months (100,000 ATX/month)</p>

                        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 mt-6">
                            {/* Tokenomics Details */}
                            <div className="md:w-1/2">
                                <h3 className="text-xl font-semibold mb-4">Tokenomics</h3>
                                <div className="space-y-3">
                                    {tokenomicsData.map((item, index) => (
                                        <div key={index} className="flex items-center space-x-2">
                                            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }} />
                                            <p className="text-sm font-bold">{item.label} — <span className="font-semibold">{item.percentage}%</span></p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Tokenomics Circle */}
                            <div className="relative w-64 h-64 rounded-full border-8 border-gray-300">
                                <div
                                    className="absolute top-0 left-0 w-full h-full rounded-full"
                                    style={{ background: getConicGradient() }}
                                />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-2xl text-center">
                                    Tokenomics
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-white text-black p-6 rounded-lg w-full lg:w-[26%] shadow-lg'>
                        <h1 className='text-xl font-bold mb-4'>P2P Pool</h1>
                        <p className='text-lg mb-2'><strong className="font-normal">Total Stakers:</strong> 475</p>
                        <p className='text-lg mb-2'><strong className="font-normal">Total P2P Staked:</strong> 242,289.71</p>
                        <p className='text-lg mb-2'><strong className="font-normal">My Staked/Staking Rewards:</strong> 0</p>
                        <p className='text-lg mb-4'><strong className="font-normal">My P2P Staked:</strong> 0</p>

                        <div className='flex gap-4 justify-center'>
                            <button className='bg-gray-700 text-white px-4 py-2 rounded-3xl hover:bg-gray-800 transition'>Unstake</button>
                            <Link to="/login">
                                <button className="bg-gray-700 text-white px-4 py-2 rounded-3xl hover:bg-gray-800 transition">
                                    Stake
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>
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
}

export default Jump;
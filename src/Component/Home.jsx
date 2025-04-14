import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../Images/logo1.png';
import main1 from '../Images/image1.jpg';
import main2 from '../Images/image2.jpg';
import main3 from '../Images/image3.jpg';
import main4 from '../Images/image4.jpg';
import main5 from '../Images/image5.jpg';
import { Menu, X } from 'lucide-react';
import w1 from '../Images/work1.svg';
import w2 from '../Images/work2.svg';
import w3 from '../Images/work3.svg';

import e1 from '../Images/earn1.webp'
import e2 from '../Images/earn2.webp'
import e3 from '../Images/earn3.webp'

import i1 from '../Images/icon1.svg'
import i2 from '../Images/icon2.svg'
import i3 from '../Images/icon3.svg'


const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="bg-green-50">
      {/* Scrolling Marquee */}
      <div className="sticky top-0 z-50 overflow-hidden whitespace-nowrap bg-black text-white py-2">
        <div className="animate-marquee flex space-x-16">
          {Array(2).fill(0).map((_, idx) => (
            <>
              <p key={`vol-${idx}`}>
                Total Transaction Volume:
                <span className="ml-1">ATH:</span> <span className="text-yellow-400">126M</span>
                <span className="ml-2">GEM:</span> <span className="text-yellow-400">6T</span>
                <span className="ml-2">USDT:</span> <span className="text-yellow-400">25M</span>
                <span className="ml-2">Other:</span> <span className="text-yellow-400">18T</span>
              </p>
              <p key={`com-${idx}`}>
                Total Commission:
                <span className="ml-1">ATH:</span> <span className="text-yellow-400">3.2M</span>
                <span className="ml-2">GEM:</span> <span className="text-yellow-400">127B</span>
                <span className="ml-2">USDT:</span> <span className="text-yellow-400">1.3M</span>
              </p>
              <p key={`with-${idx}`}>Total USDT Withdrawn: <span className="text-yellow-400">22M</span></p>
              <p key={`dep-${idx}`}>Total USDT Deposited: <span className="text-yellow-400">30M</span></p>
              <p key={`users-${idx}`}>Total Users: <span className="text-yellow-400">964K</span></p>
              <p key={`trans-${idx}`}>Total Transactions: <span className="text-yellow-400">430K</span></p>
            </>
          ))}
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-[40px] z-40 bg-white shadow-md">
        <div className="flex justify-between items-center px-4 py-3 md:px-8">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="w-[100px] md:w-[140px]" />
            <span className="font-semibold text-sm md:text-base">Athene Network</span>
          </div>

          {/* Mobile menu icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 text-sm md:text-base">
            <Link to="/register" className="text-green-600 hover:text-green-800">Register for Listing</Link>
            <span>More</span>
            <span>Login</span>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition">Register</button>
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
      <div className='flex justify-between items-center px-4 md:px-16 mt-6'>
        <button className="bg-yellow-400 text-black px-4 py-2 rounded-3xl">Jumpstart</button>
        <button className='mt-2'>User Guide</button>
      </div>

      {/* Main Banner */}
      <div className='px-4 md:px-16 mt-4'>
        <img src={main1} alt="Main Banner" className="w-full max-w-[1200px] h-auto mx-auto" />
      </div>

      {/* Image Grid */}
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {[main2, main3, main4, main5].map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`main-${i}`}
            className="w-full max-w-[280px] h-[200px] rounded-3xl shadow-md transform transition-transform duration-300 hover:scale-105"
          />
        ))}
      </div>

      {/* Buy/Sell Section */}
      <div className='bg-white rounded-2xl mx-4 md:mx-16 my-4 p-4'>
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex gap-4">
            <button className="bg-gradient-to-r from-green-400 to-emerald-600 text-white font-semibold px-6 py-2 rounded-full hover:from-emerald-600 hover:to-green-500 transition">Buy</button>
            <button className="bg-gradient-to-r from-gray-600 to-gray-800 text-white font-semibold px-6 py-2 rounded-full hover:from-gray-800 hover:to-gray-600 transition">Sell</button>
          </div>

          <div className="flex flex-wrap gap-2">
            {["PI", "DOGE", "P2P", "OCEAN", "SDA", "LION", "GEM"].map((item, i) => (
              <button key={i} className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:from-purple-600 hover:to-indigo-500 transition">
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Action Row */}
        <div className='flex flex-col lg:flex-row justify-between mt-6 gap-4'>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-2xl hover:bg-emerald-700 transition">Create Ad</button>
          <button className="border-2 border-gray-700 text-black px-4 py-2 rounded-lg hover:bg-gray-400 transition">Enter Amount USDT</button>
          <button className="border-2 text-black px-4 py-2 rounded-lg hover:bg-yellow-600 transition">Price low to high</button>
        </div>

        {/* Table Headings */}
        <div className="hidden md:grid grid-cols-4 mt-10 border-b-2 border-gray-500 px-4 gap-x-4 font-semibold">
          <p>Seller</p>
          <p>Price</p>
          <p>Available/Limit</p>
          <p>Transaction</p>
        </div>

        {/* Seller List */}
        {[
          { seller: "OmkarPi", transactions: "4 Transactions", price: "0.88 USDT", available: "76.49 PI", limit: "5–88 USDT" },
          { seller: "GHERBIABDALHAMID", transactions: "2 Transactions", price: "0.88 USDT", available: "76.49 PI", limit: "5–88 USDT" },
          { seller: "hungnguyen0101197999@gmail.com", transactions: "0 Transactions", price: "0.88 USDT", available: "76.49 PI", limit: "5–88 USDT" },
          { seller: "Waqas_trader", transactions: "2 Transactions", price: "0.88 USDT", available: "76.49 PI", limit: "5–88 USDT" }
        ].map((item, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 mt-4 px-4 border-b pb-4">
            <p>{item.seller}</p>
            <p>{item.price}</p>
            <p>{item.available} | {item.limit}</p>
            <p>{item.transactions}</p>
          </div>
        ))}
      </div>

      <div className="md:ml-[80px] bg-white mt-[50px] max-w-screen-xl w-full rounded-2xl w-dvw md:w-[1200px]">
        <h1 className="text-3xl p-8 font-semibold">How P2P Works</h1>
        <div className="flex justify-center items-center gap-4 mt-2">
          <button className="bg-neutral-700 text-white border-2 text-black px-5 py-2 rounded-3xl hover:bg-green-500 transition">
            How to Buy
          </button>

          <button className="text-black px-5 py-2 rounded-3xl hover:bg-green-200 transition border-2 border-black">
            How to Sell
          </button>
        </div>

        <div className="flex justify-center items-start gap-10 mt-2 py-10 flex-col md:flex-row">
          <div className="text-left p-3">
            <img src={w1} alt="My Photo" className="w-[100px] h-auto" />
            <h1 className="text-lg font-semibold mt-4">1. Place an Order</h1>
            <p className="text-gray-600 font-semibold">
              Once you place a P2P order, the crypto asset will be <br /> escrowed by Athene P2P.
            </p>
          </div>

          <div className="text-left p-3">
            <img src={w2} alt="My Photo" className="w-[100px] h-auto" />
            <h1 className="text-lg font-semibold mt-4">2. Pay the Seller</h1>
            <p className="text-gray-600 font-semibold">
              Send money to the seller via the suggested <br /> payment methods. Complete the fiat transaction <br />
              and notify the seller on Athene P2P.
            </p>
          </div>

          <div className="text-left p-3">
            <img src={w3} alt="My Photo" className="w-[100px] h-auto" />
            <h1 className="text-lg font-semibold mt-4">3. Receive Crypto</h1>
            <p className="text-gray-600 text-ms font-semibold">
              Once the seller confirms receipt of the money,<br /> escrowed crypto will be released to you.
            </p>
          </div>
        </div>
      </div>

      <div className="w-dvw flex md:w-[1200px] md:ml-[76px]">
        <div className="bg-white w-full grow max-w-screen-xl mt-[74px] flex items-center justify-between px-4 py-6 rounded-2xl">
          <div className="w-dvw md:w-1/2">
            <h1 className="text-3xl font-bold mb-4 ml-[40px] text-green-800">Earn more ATH on the Athene App</h1>
            <p className="mb-4 ml-[40px]">
              You can download the Athene app on the App Store or Google Play.<br />
              Then register an account to receive many promotions.
            </p>
            <div className="flex gap-4 ml-[40px]">
              <img src={e2} alt="App Store" className="w-[180px]" />
              <img src={e3} alt="Google Play" className="w-[180px]" />
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-end mr-[30px]">
            <img src={e1} alt="Mobile App" className="w-[500px] h-auto" />
          </div>
        </div>
      </div>

      <div className="w-dvw h-auto md:w-[1200px] md:ml-[76px]">
        <div className="bg-white w-full max-w-screen-xl sm:p-3 mt-[50px] p-6 rounded-2xl w-[1200px]">

          <h1 className="text-3xl font-bold mb-6">FAQ About P2P Trading</h1>

          <div className="flex justify-between items-center border-b border-gray-500 py-4 font-semibold">
            <p className="text-lg">What is P2P exchange?</p>
            <span className="text-2xl font-bold">+</span>
          </div>

          <div className="flex justify-between items-center border-b border-gray-500 py-4 font-semibold">
            <p className="text-lg">Which cryptocurrencies are supported in the Athene P2P?</p>
            <span className="text-2xl font-bold">+</span>
          </div>

          <div className="flex justify-between items-center border-b border-gray-500 py-4 font-semibold">
            <p className="text-lg">Why is Athene P2P better than other P2P marketplaces?</p>
            <span className="text-2xl font-bold">+</span>
          </div>

          <div className="flex justify-between items-center border-b border-gray-500 py-4 font-semibold">
            <p className="text-lg">As a P2P trader, how am I protected?</p>
            <span className="text-2xl font-bold">+</span>
          </div>
        </div>
      </div>

      <div className="w-dvw h-auto flex md:w-[1200px] mt-[40px] ">
        <div className=" grow max-w-screen-xl h-[130px] flex flex-col bg-white md:w-[1200px] md:ml-[76px]">
          <div className="flex justify-start">
            <img src={logo} alt="logo" className="w-36 h-auto pl-3" />
          </div>

          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col justify-center overflow-wrap items-center">
              <div className="flex font-semibold text-[22px] w-dvw md:w-[90vw] flex-col justify-between gap-4 items-center">
                <div className="flex justify-center items-center flex-col w-full">
                  <p className="text-2xl font-bold grow text-center">Athene Network</p>
                  <p>Download App</p>
                  <Link to="/Privacy" className="hover:underline cursor-pointer grow text-center">Privacy Policy</Link>
                  <Link to="/Terms" className="hover:underline cursor-pointer grow text-center">Terms of Use</Link>
                </div>
              </div>

              <div className="flex w-max overflow-wrap mt-2 gap-2">
                <div className="bg-gray-900 p-2 rounded-full">
                  <img src={i1} alt="icon1" className="w-5 h-auto" />
                </div>
                <div className="bg-gray-900 p-2 rounded-full">
                  <img src={i2} alt="icon2" className="w-5 h-auto" />
                </div>
                <div className="bg-gray-900 p-2 rounded-full">
                  <img src={i3} alt="icon3" className="w-5 h-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
};

export default Home;

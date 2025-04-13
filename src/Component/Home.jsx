import React from "react";
import { Link } from "react-router-dom";
import logo from '../Images/logo1.png'
import main1 from '../Images/image1.jpg';
import main2 from '../Images/image2.jpg';
import main3 from '../Images/image3.jpg';
import main4 from '../Images/image4.jpg';
import main5 from '../Images/image5.jpg';

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
  return (
    <>

      <div className='bg-green-50'>
        <div>

          <div className="sticky top-0 z-50 overflow-hidden whitespace-nowrap bg-black text-white py-2">
            <div className="animate-marquee flex space-x-16">
              <p>
                Total Transaction Volume:
                <span className="ml-1">ATH:</span> <span className="text-yellow-400">126M</span>
                <span className="ml-2">GEM:</span> <span className="text-yellow-400">6T</span>
                <span className="ml-2">USDT:</span> <span className="text-yellow-400">25M</span>
                <span className="ml-2">Other:</span> <span className="text-yellow-400">18T</span>
              </p>
              <p>
                Total Commission:
                <span className="ml-1">ATH:</span> <span className="text-yellow-400">3.2M</span>
                <span className="ml-2">GEM:</span> <span className="text-yellow-400">127B</span>
                <span className="ml-2">USDT:</span> <span className="text-yellow-400">1.3M</span>
              </p>
              <p>
                Total USDT Withdrawn:
                <span className="ml-1 text-yellow-400">22M</span>
              </p>
              <p>
                Total USDT Deposited:
                <span className="ml-1 text-yellow-400">30M</span>
              </p>
              <p>
                Total Users:
                <span className="ml-1 text-yellow-400">964K</span>
              </p>
              <p>
                Total Transactions:
                <span className="ml-1 text-yellow-400">430K</span>
              </p>

              {/* Duplicate for seamless loop */}
              <p>
                Total Transaction Volume:
                <span className="ml-1">ATH:</span> <span className="text-yellow-400">126M</span>
                <span className="ml-2">GEM:</span> <span className="text-yellow-400">6T</span>
                <span className="ml-2">USDT:</span> <span className="text-yellow-400">25M</span>
                <span className="ml-2">Other:</span> <span className="text-yellow-400">18T</span>
              </p>
              <p>
                Total Commission:
                <span className="ml-1">ATH:</span> <span className="text-yellow-400">3.2M</span>
                <span className="ml-2">GEM:</span> <span className="text-yellow-400">127B</span>
                <span className="ml-2">USDT:</span> <span className="text-yellow-400">1.3M</span>
              </p>
              <p>
                Total USDT Withdrawn:
                <span className="ml-1 text-yellow-400">22M</span>
              </p>
              <p>
                Total USDT Deposited:
                <span className="ml-1 text-yellow-400">30M</span>
              </p>
              <p>
                Total Users:
                <span className="ml-1 text-yellow-400">964K</span>
              </p>
              <p>
                Total Transactions:
                <span className="ml-1 text-yellow-400">430K</span>
              </p>
            </div>
          </div>




          <nav className="sticky top-[40px] z-40 flex justify-between items-center px-16 py-2 bg-white " >
            {/* Left side items */}
            <div className="flex items-center space-x-12 font-semibold text-[18px]">
              <img src={logo} alt="logo" className="w-[180px] h-auto ml-[20px]" />
              <li className="list-none">Athene Network</li>
              <Link
                to="/register"
                className="text-green-600 hover:text-green-800"
              >
                Register for Listing
              </Link>


              <li className="list-none">More</li>
            </div>

            {/* Right side items */}
            <div className="flex items-center space-x-6">
              <li className="list-none">Login</li>
              <li className="list-none">
                <button className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition">
                  Register
                </button>
              </li>

            </div>
          </nav>


        </div>


        <div className='flex flex-row '>
          <button className="bg-yellow-400 text-black px-2 py-2 rounded-3xl ml-[80px] mt-[20px]">
            Jumpstart
          </button>

          <button className='ml-[1000px] mt-[30px] '>User Guide</button>
        </div>

        <div className='ml-[80px] mt-[20px] '>
          <img src={main1} alt="My Photo" style={{ width: "1200px", height: "auto" }} />
        </div>

        <div className="flex flex-wrap justify-center gap-4 p-4 ml-[5px] ">
          <img
            src={main2}
            alt="logo"
            style={{ width: "287px", height: "200px" }}
            className="rounded shadow-md transform transition-transform duration-300 hover:scale-105 rounded-3xl"
          />
          <img
            src={main3}
            alt="logo"
            style={{ width: "287px", height: "200px" }}
            className="rounded shadow-md transform transition-transform duration-300 hover:scale-105 rounded-3xl"
          />
          <img
            src={main4}
            alt="logo"
            style={{ width: "287px", height: "200px" }}
            className="rounded shadow-md transform transition-transform duration-300 hover:scale-105 rounded-3xl"
          />
          <img
            src={main5}
            alt="logo"
            style={{ width: "287px", height: "200px" }}
            className="rounded shadow-md transform transition-transform duration-300 hover:scale-105 rounded-3xl"
          />
        </div>


        <div className='bg-white w-[1200px] ml-[80px] rounded-2xl'>
          <div class="flex flex-wrap space-x-12 p-6">
            <div className="flex gap-4 p-4">
              {/* Buy Button */}
              <button className="m-2 ml-[48px] bg-gradient-to-r from-green-400 to-emerald-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:from-emerald-600 hover:to-green-500">
                Buy
              </button>

              {/* Sell Button */}
              <button className="m-2 bg-gradient-to-r from-gray-600 to-gray-800 text-white font-semibold px-6 py-3 rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:from-gray-800 hover:to-gray-600">
                Sell
              </button>
            </div>

            <div className="flex flex-wrap gap-3 p-4">

              {["PI", "DOGE", "P2P", "OCEAN", "SDA", "LION", "GEM"].map((item, index) => (
                <button
                  key={index}
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-md hover:from-purple-600 hover:to-indigo-500 hover:scale-105 transform transition duration-300 "
                >
                  {item}
                </button>
              ))}
            </div>


          </div>
          <div className='Flex Flex-row ml-[67px] mt-[20px] '>
            <button className="bg-gray-900 text-white p-2 rounded-2xl hover:bg-emerald-700 transition duration-300">
              Create Ad
            </button>

            <button className="border-2 border-gray-700 text-black p-2 rounded-lg hover:bg-gray-400 transition duration-300 ml-[600px]">
              Enter Amount USDT
            </button>

            <button className="border-2 text-black  p-2 rounded-lg hover:bg-yellow-600 transition duration-300 ml-[10px]">
              Price low to high
            </button>

          </div>
          {/* Heading Row */}
          <div className="grid grid-cols-4 mt-10 ml-[67px] w-[89%] border-b-2 border-gray-500 px-4 gap-x-56">
            <p className="font-semibold">Seller</p>
            <p className="font-semibold">Price</p>
            <p className="font-semibold">Available/Limit</p>
            <p className="font-semibold">Transaction</p>
          </div>

          {/* Data Rows */}
          {[
            {
              seller: "OmkarPi",
              transactions: "4 Transactions",
              price: "0.88 USDT",
              available: "76.49 PI",
              limit: "5–88 USDT",
            },
            {
              seller: "GHERBIABDALHAMID",
              transactions: "2 Transactions",
              price: "0.88 USDT",
              available: "76.49 PI",
              limit: "5–88 USDT",
            },
            {
              seller: "hungnguyen0101197999@gmail.com",
              transactions: "0 Transactions",
              price: "0.88 USDT",
              available: "76.49 PI",
              limit: "5–88 USDT",
            },
            {
              seller: "Waqas_trader",
              transactions: "2 Transactions",
              price: "0.88 USDT",
              available: "76.49 PI",
              limit: "5–88 USDT",
            },
            {
              seller: "GHERBIABDALHAMID",
              transactions: "0 Transactions",
              price: "0.88 USDT",
              available: "76.49 PI",
              limit: "5–88 USDT",
            },
            {
              seller: "eligepildora@gmail.com",
              transactions: "8 Transactions",
              price: "0.88 USDT",
              available: "76.49 PI",
              limit: "5–88 USDT",
            },
            {
              seller: "Madni-Brothers",
              transactions: "1 Transactions",
              price: "0.88 USDT",
              available: "76.49 PI",
              limit: "5–88 USDT",
            },
            {
              seller: "Madina-Traders",
              transactions: "3 Transactions",
              price: "0.88 USDT",
              available: "76.49 PI",
              limit: "5–88 USDT",
            },
            {
              seller: "tkmode1g@gmail.com",
              transactions: "6 Transactions",
              price: "0.88 USDT",
              available: "76.49 PI",
              limit: "5–88 USDT",
            },
          ].map((item, index) => (
            <div key={index} className="grid grid-cols-4 mt-8 ml-[67px] w-[89%] px-4 gap-x-56 items-center font-semibold ">
              <div>
                <p>{item.seller}</p>
                <p className="text-xs text-gray-400">{item.transactions}</p>
              </div>
              <div>
                <p>{item.price}</p>
              </div>
              <div>
                <p>{item.available}</p>
                <p className="text-sm text-gray-400">{item.limit}</p>
              </div>
              <div>
                <button className="bg-emerald-400 text-white px-8 py-1 rounded-2xl hover:bg-emerald-600 transition">
                  Buy
                </button>
              </div>
            </div>
          ))}


        </div>
        <div className="ml-[80px] bg-white mt-[50px] w-[1200px] rounded-2xl">
          <h1 className="text-3xl ml-[40px] p-8 font-semibold">How P2P Works</h1>
          <div className="flex justify-center items-center gap-4 mt-2">
            <button className="bg-neutral-700 text-white border-2 text-black px-5 py-2 rounded-3xl hover:bg-green-500 transition">
              How to Buy
            </button>

            <button className=" text-black px-5 py-2 rounded-3xl hover:bg-green-200 transition border-2 border-black">
              How to Sell
            </button>
          </div>


          <div className="flex justify-center items-start gap-10 mt-2 py-10">
            <div className="text-left">
              <img src={w1} alt="My Photo" style={{ width: "100px", height: "auto" }} />
              <h1 className="text-lg font-semibold mt-4">1. Place an Order</h1>
              <p className="text-gray-600 font-semibold">
                Once you place a P2P order, the crypto asset will be <br /> escrowed by Athene P2P.
              </p>
            </div>

            <div className="text-left">
              <img src={w2} alt="My Photo" style={{ width: "100px", height: "auto" }} />
              <h1 className="text-lg font-semibold mt-4">2. Pay the Seller</h1>
              <p className="text-gray-600 font-semibold">
                Send money to the seller via the suggested <br /> payment methods. Complete the fiat transaction <br />
                and notify the seller on Athene P2P.
              </p>
            </div>

            <div className="text-left">
              <img src={w3} alt="My Photo" style={{ width: "100px", height: "auto" }} />
              <h1 className="text-lg font-semibold mt-4">3. Receive Crypto</h1>
              <p className="text-gray-600 text-ms font-semibold">
                Once the seller confirms receipt of the money,<br /> escrowed crypto will be released to you.
              </p>
            </div>
          </div>


        </div>

        <div className="ml-[76px] bg-white w-[1200px] mt-[74px] flex items-center justify-between px-4 py-6 rounded-2xl">
          {/* Left Section (Text + Buttons) */}
          <div className="w-1/2">
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

          {/* Right Section (Mobile Image) */}
          <div className="w-1/2 flex justify-end mr-[30px] ">
            <img src={e1} alt="Mobile App" className="w-[500px] h-auto" />
          </div>
        </div>
        <div className="bg-white w-[1200px] ml-[75px] mt-[50px] p-6 rounded-2xl">
          <h1 className="text-3xl font-bold mb-6">FAQ About P2P Trading</h1>

          {/* Question 1 */}
          <div className="flex justify-between items-center border-b border-gray-500 py-4 font-semibold">
            <p className="text-lg">What is P2P exchange?</p>
            <span className="text-2xl font-bold">+</span>
          </div>

          {/* Question 2 */}
          <div className="flex justify-between items-center border-b border-gray-500 py-4 font-semibold">
            <p className="text-lg">Which cryptocurrencies are supported in the Athene P2P?</p>
            <span className="text-2xl font-bold">+</span>
          </div>

          {/* Question 3 */}
          <div className="flex justify-between items-center border-b border-gray-500 py-4 font-semibold">
            <p className="text-lg">Why is Athene P2P better than other P2P marketplaces?</p>
            <span className="text-2xl font-bold">+</span>
          </div>

          {/* Question 4 */}
          <div className="flex justify-between items-center border-b border-gray-500 py-4 font-semibold">
            <p className="text-lg">As a P2P trader, how am I protected?</p>
            <span className="text-2xl font-bold">+</span>
          </div>
        </div>z

        <div className='ml-[75px] w-[1200px]  mt-[50px] h-[130px] flex flex-col bg-white'>
          {/* Row 1 - Only Logo */}
          <div className="flex justify-start p-4">
            <img src={logo} alt="logo" className="w-36 h-auto ml-[40px]" />
          </div>

          {/* Row 2 - Text on Left, Images on Right */}
          <div className="flex justify-between items-center px-8 ">
            {/* Left Text Items */}
            <div className="flex space-x-8 font-semibold text-[22px]">
              <p>Athene Network</p>
              <p>Download App</p>
              <Link to="/Privacy" className="hover:underline cursor-pointer">Privacy Policy</Link>
              <Link to="/Terms" className="hover:underline cursor-pointer">Terms of Use</Link>
            </div>
            {/* Right Images */}
            <div className="flex space-x-8">
              <div className="bg-gray-900 p-2 rounded-full">
                <img src={i1} alt="icon1" className="w-[35px] h-auto" />
              </div>
              <div className="bg-gray-900 p-2 rounded-full">
                <img src={i2} alt="icon2" className="w-[35px] h-auto" />
              </div>
              <div className="bg-gray-900 p-2 rounded-full">
                <img src={i3} alt="icon3" className="w-[35px] h-auto" />
              </div>
            </div>

          </div>
        </div>

        

      </div>



    </>
  );
};

export default Home;
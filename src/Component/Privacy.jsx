
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo1.png';

import i1 from '../Images/icon1.svg'
import i2 from '../Images/icon2.svg'
import i3 from '../Images/icon3.svg'

import gi from '../Images/gift.svg'
import fl from '../Images/flag.svg'

function Privacy() {
  return (
    // <div className="bg-gradient-to-r from-purple-300 via-pink-200 to-yellow-200">
    <div className="bg-green-50">
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
            <Link to="/reg2">
              <button className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition">
                Register
              </button>
            </Link>
          </li>
        </div>
      </nav>

      {/* Privacy Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12 space-y-8 bg-white mt-8 md:mt-12 rounded-2xl shadow text-gray-900">

        <h1 className="text-2xl md:text-3xl font-bold text-center">Privacy Policy</h1>
        <p className="text-base md:text-lg leading-relaxed">
          This Privacy Policy describes how Piswap P2P Trading ("Piswap P2P," "we," "us," or "our") collects, uses,
          shares, and protects your personal information...
        </p>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold">1. Information We Collect</h2>
          <p>(a) Information You Provide: When you register for an account, use our platform, or communicate with us, we may collect personal information such as your name, email address, phone number, and any other information you choose to provide</p>
          <p>(b) Automatically Collected Information: We may automatically collect certain information about your device and usage of the Piswap P2P, including your IP address, browser type, operating system, and interactions with our platform.</p>
          <p>(c) Cookies and Similar Technologies: We may use cookies, web beacons, and other tracking technologies to collect information about your browsing activities and preferences. You can control the use of cookies through your browser settings, but disabling cookies may affect your ability to access certain features of the Piswap P2P.</p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold">2. Use of Information</h2>
          <p>(a) We may use the information we collect for various purposes, including:
            Providing and improving the Piswap P2P;
            Communicating with you about your account and our services;
            Personalizing your experience on the platform;
            Analyzing usage trends and preferences;
            Preventing fraud ensuring the security of our platform; and
            Complying with legal and regulatory requirements.</p>


          <p>(b)We may combine the information we collect from you with information we receive from third parties to help us personalize your experience and improve our services.</p>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold">3. Sharing of Information</h2>
          <p>(a)  We may share your personal information with third parties under the following circumstances:
            With your consent;
            With service providers who assist us in operating the Piswap P2P;
            In response to a legal request or when required by law;
            To protect the rights, property, or safety of Piswap P2P, our users, or others; or
            In connection with a merger, acquisition, or sale of assets.</p>

          <p>(b) We may share aggregated or anonymized information that does not directly identify you with third parties for analytical or marketing purposes.</p>
        </section>

        {/* Other Sections */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold">4. Data Retention</h2>
          <p>We will retain your personal information for as long as necessary to fulfill the purposes for which it was collected unless a longer retention period is required or permitted by law.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold">5. Your Rights and Choices</h2>
          <p>(a) You may access, update, or delete your account information at any time by logging into your account settings.</p>
          <p>(b)You may opt out of receiving promotional communications from us by following the instructions provided in such communications or by contacting us directly.</p>
          <p>(c) ou may control the use of cookies and similar technologies through your browser settings.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold">6. Security</h2>
          <p>We take reasonable measures to protect the security of your personal information and to prevent unauthorized access, use, or disclosure. However, no method of transmission over the Internet or method of electronic storage is 100% secure.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold">7. Children's Privacy</h2>
          <p>The Piswap P2P is not intended for use by children under the age of 18. We do not knowingly collect personal information from children under the age of 18 without parental consent. If you believe that we may have collected personal information from a child under the age of 18, please contact us immediately.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold">8. Changes to this Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time by posting a revised version on the Piswap P2P. The revised Privacy Policy will be effective as of the date indicated in the updated policy. Your continued use of the Athene P2P after the effective date of the revised Privacy Policy constitutes your acceptance of the changes.</p>
        </section>
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
                  className="w-6 h-6 sm:w-7 sm:h-7"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>



  );
}

export default Privacy;

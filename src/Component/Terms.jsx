import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo1.png';
import gi from '../Images/gift.svg';
import fl from '../Images/flag.svg';
import { Menu, X } from 'lucide-react';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {/* Marquee Section */}
      <div className="sticky top-0 z-50 overflow-hidden whitespace-nowrap bg-black text-white py-2">
        <div className="animate-marquee flex space-x-16">
          {/* Repeatable Transaction Info */}
          {Array(2).fill().map((_, i) => (
            <React.Fragment key={i}>
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
              <p>Total USDT Withdrawn: <span className="ml-1 text-yellow-400">22M</span></p>
              <p>Total USDT Deposited: <span className="ml-1 text-yellow-400">30M</span></p>
              <p>Total Users: <span className="ml-1 text-yellow-400">964K</span></p>
              <p>Total Transactions: <span className="ml-1 text-yellow-400">430K</span></p>
            </React.Fragment>
          ))}
        </div>
      </div>

      <>
        {/* Navbar */}
        <nav className="sticky top-10 z-40 w-full bg-white shadow-lg">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:py-1 lg:py-4 md:px-10">
                {/* Logo and Name */}
                <div className="flex items-center space-x-3">
                    {/* Replace with your logo if needed */}
                    <img src={logo} alt="Logo" className="w-[100px] md:w-[140px]" />
                    <span className="text-xl md:text-lg lg:text-2xl font-bold text-gray-800 tracking-wide">
                        Piswap Network
                    </span>
                </div>

                {/* Mobile Menu Icon Placeholder */}
                <div className="md:hidden">
                    <button aria-label="Open menu" className="text-gray-700 hover:text-gray-900">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-10 text-base font-medium text-gray-700">
                    <Link
                        to="/register"
                        className="text-green-600 hover:text-green-700 transition text-sm"
                    >
                        Register for Listing
                    </Link>
                    <Link to="#" className="hover:text-gray-900">
                        More
                    </Link>
                    <Link to="/login" className="hover:text-gray-900">
                        Login
                    </Link>
                    <Link to="/reg2">
                        <button className="bg-gray-900 text-white px-5 py-2 rounded-full hover:bg-gray-800 transition-all">
                            Register
                        </button>
                    </Link>

                    {/* Icons */}
                    <div className="flex items-center space-x-3 ml-4">
                        <div className="w-9 h-9 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-gray-300 transition-all">
                            <img src={gi} alt="Logo" />
                        </div>
                        <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-all">
                            <img src={fl} alt="Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        
    </>

      {/* Terms Section */}
      <div className='bg-gray-200'>
        <header className="text-center py-16">
          <h1 className="text-4xl font-extrabold text-green-800">Terms of Use</h1>
          <p className="mt-2 text-lg text-green-700 max-w-2xl mx-auto">
            These Terms govern your use of the Piswap P2P Trading platform. Please read them carefully.
          </p>
        </header>

        <div className="max-w-4xl mx-auto px-6 pb-12 space-y-8 text-gray-800 text-lg">
          {[
            "1. Acceptance of Terms: By accessing or using our platform, you agree to be bound by these Terms of Use.",
            "2. User Eligibility: You must be at least 18 years old and have the legal capacity to enter into a binding agreement to use our services.",
            "3. Account Registration: Users must provide accurate, current, and complete information during registration and keep their account information updated.",
            "4. Prohibited Activities: Users agree not to engage in any unlawful activities, including money laundering, fraud, or any actions that violate applicable laws.",
            "5. Platform Usage: Users are responsible for maintaining the confidentiality of their login credentials and for all activities that occur under their account.",
            "6. Transaction Terms: All transactions are subject to verification and approval by the platform. We reserve the right to refuse any transaction that appears suspicious.",
            "7. Intellectual Property: All content on the platform, including logos, designs, and text, is the property of Piswap and protected by copyright laws.",
            "8. Privacy: Your use of the platform is also governed by our Privacy Policy, which outlines how we collect and use your data.",
            "9. Dispute Resolution: Any disputes arising from the use of the platform will be resolved through binding arbitration in accordance with applicable laws.",
            "10. Limitation of Liability: Piswap will not be held liable for any indirect, incidental, or consequential damages arising out of your use of the platform.",
            "11. Modification of Terms: We reserve the right to modify these Terms at any time. Continued use of the platform constitutes acceptance of the new terms.",
            "12. Contact Us: For any questions or concerns regarding these Terms, please contact our support team through the Help section."
          ].map((term, index) => (
            <div key={index}><p>{term}</p></div>
          ))}

          <div className="text-center pt-8">
            <a href="#top" className="text-green-700 hover:underline font-medium">Back to Top</a>
          </div>
        </div>

        {/* Footer (Placeholder) */}
        <div className='mx-4 sm:mx-auto max-w-7xl mt-10 p-4 sm:p-6 bg-white rounded-lg shadow-md text-black border-2 border-gray-300'>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-3">
            <div className="grid grid-cols-2 sm:flex sm:flex-row items-center sm:justify-start gap-3 sm:gap-6 font-semibold text-sm sm:text-base text-center sm:text-left">
              <p>Piswap Network</p>
              <p>Download App</p>
              <Link to="/Privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

// Component/Terms.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo1.png';
import i1 from '../Images/icon1.svg';
import i2 from '../Images/icon2.svg';
import i3 from '../Images/icon3.svg';

function Terms() {
    return (
        <>
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


                {/* Navbar */}
                <nav className="sticky top-[40px] z-40 w-full bg-white shadow-md">
                    <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
                        <div className="flex items-center space-x-8 font-semibold text-lg">
                            <img src={logo} alt="logo" className="w-40 h-auto" />
                            <Link to="/" className="hover:text-green-700">Home</Link>
                            <Link to="/register" className="text-green-600 hover:text-green-800">Register</Link>
                            <Link to="/terms-of-use" className="hover:text-green-700">Terms of Use</Link>
                            <Link to="/privacy" className="hover:text-green-700">Privacy Policy</Link>
                        </div>
                        <div className="flex items-center">
                            <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition">
                                Login
                            </button>
                        </div>
                    </div>
                </nav>

                <div className='bg-gray-100'>

                    {/* Page Header */}
                    <header className="text-center py-16 ">
                        <h1 className="text-4xl font-extrabold text-green-800">Terms of Use</h1>
                        <p className="mt-2 text-lg text-green-700 max-w-2xl mx-auto">
                            These Terms govern your use of the Piswap P2P Trading platform. Please read them carefully.
                        </p>
                    </header>

                    {/* Terms Section */}
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
                            "10. Limitation of Liability: Athene will not be held liable for any indirect, incidental, or consequential damages arising out of your use of the platform.",
                            "11. Modification of Terms: We reserve the right to modify these Terms at any time. Continued use of the platform constitutes acceptance of the new terms.",
                            "12. Contact Us: For any questions or concerns regarding these Terms, please contact our support team through the Help section."
                        ].map((term, index) => (
                            <div key={index}>
                                <p>{term}</p>
                            </div>
                        ))}

                        {/* Back to Top */}
                        <div className="text-center pt-8">
                            <a href="#top" className="text-green-700 hover:underline font-medium">Back to Top</a>
                        </div>

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
            </div>
        </>
    );
}

export default Terms;

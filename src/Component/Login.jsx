import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo1.png';
import { Menu, X } from 'lucide-react'; // OR use heroicons if you prefer
import i1 from '../Images/icon1.svg';
import i2 from '../Images/icon2.svg';
import i3 from '../Images/icon3.svg';
import gi from '../Images/gift.svg';
import fl from '../Images/flag.svg';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);
    
    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Logging in with', email, password);
    };

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className="bg-green-50 min-h-screen flex flex-col">
            {/* Navbar */}
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
            {/* Login Form Section */}
            <div className="flex justify-center items-center flex-grow py-10">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
                    <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

                    {/* Login Form */}
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-semibold">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-semibold">Your Password</label>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        {/* Forgot Password & Register Link */}
                        <div className="flex justify-between items-center mb-6">
                            <Link to="/forgot-password" className="text-sm text-green-600 hover:text-green-800">Forgot Password?</Link>
                            <p className="text-sm">Don't have an account?
                                <Link to="/register" className="text-green-600 hover:text-green-800"> Register</Link>
                            </p>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 transition"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer Section */}
            <div className="w-full mt-10 p-4 sm:p-6 bg-white rounded-lg shadow-md text-black border-2 border-gray-300">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-3">

                    {/* Links Section */}
                    <div className="grid grid-cols-2 sm:flex sm:flex-row items-center sm:justify-start gap-3 sm:gap-6 font-semibold text-sm sm:text-base text-center sm:text-left ">
                        <p>Piswap Network</p>
                        <p>Download App</p>
                        <Link to="/Privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Use</Link>
                    </div>

                    {/* Icons Section */}
                    <div className="flex gap-4 mt-4 sm:mt-0">
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

export default Login;

import { useState } from "react";
import foodWeAppLogo from "../assets/Logos/foodweAppLogo.png";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router";

function Header({ filtration, setRestaurantRowData }) {
    const [mobileMenu, setMobileMenu] = useState(false);
    
    return (
        <div 
            style={{boxShadow: "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"}} 
            className="fixed w-full bg-white z-50"
        >       
            <div className="flex justify-between items-center md:px-6 px-2 py-1">
                <div className="group">
                    <Link to={"/"}>
                    <img 
                        className="md:w-20 w-15 cursor-pointer transition-transform duration-150 group-hover:scale-110 group-hover:rotate-3" 
                        src={foodWeAppLogo} 
                        alt="FoodWe App Logo" 
                    /></Link>
                </div>
                
          
                
                <nav className="md:block hidden">
                    <ul className="flex gap-5 list-none">
                        <li>
                            <Link to="/" className="nav-link relative text-xl font-semibold text-amber-400 px-4 py-1 rounded-lg transition-all duration-150 hover:text-amber-500 hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-amber-400/30 hover:bg-amber-50">
                                Home
                                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-150 transform -translate-x-1/2 hover:w-full"></span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="nav-link relative text-xl font-semibold text-amber-400 px-4 py-1 rounded-lg transition-all duration-150 hover:text-amber-500 hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-amber-400/30 hover:bg-amber-50">
                                About
                                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-150 transform -translate-x-1/2 hover:w-full"></span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="nav-link relative text-xl font-semibold text-amber-400 px-4 py-1 rounded-lg transition-all duration-150 hover:text-amber-500 hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-amber-400/30 hover:bg-amber-50">
                                Contact
                                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-150 transform -translate-x-1/2 hover:w-full"></span>
                            </Link>
                        </li>
                         <li>
                            <Link to="/cart" className="nav-link relative text-xl font-semibold text-amber-400 px-4 py-1 rounded-lg transition-all duration-150 hover:text-amber-500 hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-amber-400/30 hover:bg-amber-50">
                                Cart
                                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-150 transform -translate-x-1/2 hover:w-full"></span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                
                <button 
                    onClick={() => setMobileMenu((prev) => !prev)} 
                    className="md:hidden block"
                >
                    {mobileMenu ? <IoClose className="text-amber-400 text-xl"/> : <IoMenu className="text-amber-400 text-xl" />}
                </button>
            </div>
            
         
            
            <div className={`
                w-full md:hidden overflow-hidden bg-white shadow-lg
                transition-all duration-150 ease-in-out
                ${mobileMenu 
                    ? 'max-h-48 opacity-100 transform translate-y-0' 
                    : 'max-h-0 opacity-0 transform -translate-y-2'
                }
            `}>
                <nav className="w-full text-center">
                    <ul className="flex flex-col justify-center list-none">
                        <li className={`
                            border-b py-2 font-semibold text-amber-400 hover:bg-amber-50 border-t
                            transition-all duration-150 delay-75
                            ${mobileMenu ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'}
                        `}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={`
                            border-b py-2 font-semibold text-amber-400 hover:bg-amber-50
                            transition-all duration-150 delay-150
                            ${mobileMenu ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'}
                        `}>
                            <Link to="/about">About</Link>
                        </li>
                        <li className={`
                            border-b py-2 font-semibold text-amber-400 hover:bg-amber-50
                            transition-all duration-150 delay-225
                            ${mobileMenu ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'}
                        `}>
                            <Link to="/contact">Contact</Link>
                        </li>
                         <li className={`
                            border-b py-2 font-semibold text-amber-400 hover:bg-amber-50
                            transition-all duration-150 delay-225
                            ${mobileMenu ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'}
                        `}>
                            <Link to="/cart">Cart</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;
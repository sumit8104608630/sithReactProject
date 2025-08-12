import { useState } from "react";
import foodWeAppLogo from "../assets/Logos/foodweAppLogo.png";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router";
import { Activity } from "lucide-react";

function Header({ filtration, setRestaurantRowData }) {
    const [mobileMenu, setMobileMenu] = useState(false);
    
    const getNavLinkClass = ({ isActive }) => 
        `nav-link relative text-xl font-semibold px-4 py-1 rounded-lg transition-all duration-150 hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-amber-400/30 hover:bg-amber-50 ${
            isActive 
                ? 'text-amber-600 bg-amber-50 shadow-md' 
                : 'text-amber-400 hover:text-amber-500'
        }`;

  const getMobileNavLinkClass=({isActive})=>{
    `block w-full h-full transition-all duration-150 ${isActive?"text-amber-600 bg-amber-50 shadow-md":"text-amber-400 hover:text-amber-500"}`
  }
    
    return (
        <div 
            style={{boxShadow: "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"}} 
            className="fixed w-full bg-white z-50"
        >       
            <div className="flex justify-between w-full items-center md:px-6 px-2 py-1">
                <div className="group ">
                    <NavLink className="flex items-center" to={"/"}>
                        <img 
                            className="md:w-20 w-15  cursor-pointer transition-transform duration-150 group-hover:scale-110 group-hover:rotate-3" 
                            src={foodWeAppLogo} 
                            alt="FoodWe App Logo" 
                        />
                        <span className="text-2xl font-bold text-amber-500 font-mono">Food Hub</span>
                    </NavLink>
                </div>
                
                <nav className="md:block hidden">
                    <ul className="flex gap-5 list-none">
                        <li>
                            <NavLink 
                                to="/" 
                                className={getNavLinkClass}
                                end
                            >
                                Home
                                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-150 transform -translate-x-1/2 group-hover:w-full"></span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/about" 
                                className={getNavLinkClass}
                            >
                                About
                                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-150 transform -translate-x-1/2 group-hover:w-full"></span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/contact" 
                                className={getNavLinkClass}
                            >
                                Contact
                                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-150 transform -translate-x-1/2 group-hover:w-full"></span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/cart" 
                                className={getNavLinkClass}
                            >
                                Cart
                                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-150 transform -translate-x-1/2 group-hover:w-full"></span>
                            </NavLink>
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
                            border-b py-2 font-semibold hover:bg-amber-50 border-t
                            transition-all duration-150 delay-75
                            ${mobileMenu ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'}
                        `}>
                            <NavLink 
                                to="/" 
                                className={getMobileNavLinkClass}
                                end
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className={`
                            border-b py-2 font-semibold hover:bg-amber-50
                            transition-all duration-150 delay-150
                            ${mobileMenu ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'}
                        `}>
                            <NavLink 
                                to="/about" 
                                className={getMobileNavLinkClass}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className={`
                            border-b py-2 font-semibold hover:bg-amber-50
                            transition-all duration-150 delay-225
                            ${mobileMenu ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'}
                        `}>
                            <NavLink 
                                to="/contact" 
                                className={getMobileNavLinkClass}
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li className={`
                            border-b py-2 font-semibold hover:bg-amber-50
                            transition-all duration-150 delay-225
                            ${mobileMenu ? 'opacity-100 transform text-amber500 translate-y-0' : 'opacity-0 transform -translate-y-4'}
                        `}>
                            <NavLink 
                                to="/cart" 
                                className={getMobileNavLinkClass}
                            >
                                Cart
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;
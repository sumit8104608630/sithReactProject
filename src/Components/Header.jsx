import { useState, useEffect, useRef } from "react"
import foodWeAppLogo from "../assets/Logos/foodweAppLogo.png"
import { IoMenu, IoSearch, IoLocationOutline, IoStarSharp } from "react-icons/io5";
import {restaurantImagesConstUrl} from "../Util/constant.js"
import { IoClose } from "react-icons/io5";

function Header({filtration,setRestaurantRowData}) {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const searchRef = useRef(null);
    
    
    useEffect(() => {
        if (searchQuery.trim()) {
            const filtered = filtration.filter(restaurant => {
                let restaurantName = restaurant?.info.name.split("").filter(item => {
                    if(item !== " "){
                        return item
                    }
                }).join("")
                
                let name = searchQuery.split("").filter(item => {
                    if(item !== " "){
                        return item
                    }
                }).join("")

                if(restaurantName.toLowerCase().includes(name.toLowerCase())){
                    return restaurant
                }
            });
            setSearchResults(filtered.slice(0, 5)); 
            setShowDropdown(true);
        } else {
            setSearchResults([]);
            setShowDropdown(false);
        }
    }, [searchQuery, filtration]);
    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };
        
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    
    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            console.log("Searching for:", searchQuery);
            setShowDropdown(false);
        }
    };
    
    const handleResultClick = (restaurant) => {
        console.log("Selected restaurant:", restaurant);
        setSearchQuery(restaurant.info.name);
        setRestaurantRowData([restaurant])
        console.log("yes")
        setShowDropdown(false);
    };
    const handleSearchClick=(searchQuery)=>{
 const filtered = filtration.filter(restaurant => {
                let restaurantName = restaurant?.info.name.split("").filter(item => {
                    if(item !== " "){
                        return item
                    }
                }).join("")
                
                let name = searchQuery.split("").filter(item => {
                    if(item !== " "){
                        return item
                    }
                }).join("")

                if(restaurantName.toLowerCase().includes(name.toLowerCase())){
                    return restaurant
                }
            });
                    setRestaurantRowData(filtered)

    }
    
    return (
        <div 
            style={{boxShadow: "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"}} 
            className="fixed w-full bg-white z-50"
        >       
            <div className="flex justify-between items-center md:px-6 px-2 py-1">
                <div className="group">
                    <img 
                        className="md:w-20 w-15 transition-transform duration-150 group-hover:scale-110 group-hover:rotate-3" 
                        src={foodWeAppLogo} 
                        alt="FoodWe App Logo" 
                    />
                </div>
                
                {/* Desktop Search Bar */}
                <div className="flex-1 max-w-md mx-8 md:block hidden" ref={searchRef}>
                    <form onSubmit={handleSearch} className="relative">
                        <div className="w-full px-4 py-2 justify-center items-center text-gray-700 bg-gray-50 border border-gray-200 rounded-full flex focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200 hover:shadow-md">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onFocus={() => searchQuery.trim() && setShowDropdown(true)}
                                placeholder="Search restaurants..."
                                className="focus:outline-none w-full px-2 bg-transparent"
                            />
                            <button
                                type="submit"
                                onClick={()=>handleSearchClick(searchQuery)}
                                className="text-amber-400 cursor-pointer hover:text-amber-500 transition-colors duration-200"
                            >
                                <IoSearch className="text-xl" />
                            </button>
                        </div>
                        
                        {showDropdown && searchResults.length > 0 && (
                            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
                                {searchResults.map((restaurant) => (
                                    <div
                                        key={restaurant.info.id}
                                        onClick={() => handleResultClick(restaurant)}
                                        className="flex items-center p-3 hover:bg-amber-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors duration-150"
                                    >
                                        <div className="w-14 h-14 mr-3 rounded-lg overflow-hidden flex-shrink-0">
                                            <img 
                                                src={restaurantImagesConstUrl + restaurant.info.cloudinaryImageId}
                                                alt={restaurant.info.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-semibold text-gray-800">{restaurant.info.name}</div>
                                            <div className="text-sm text-gray-600 flex items-center">
                                                <span className="mr-2">{restaurant.info.cuisines?.join(", ") || "Various cuisines"}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center text-amber-500">
                                            <IoStarSharp className="mr-1" />
                                            <span className="font-medium">{restaurant.info.avgRating}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </form>
                </div>
                
                <nav className="md:block hidden">
                    <ul className="flex gap-5 list-none">
                        <li>
                            <a href="#" className="nav-link relative text-xl font-semibold text-amber-400 px-4 py-1 rounded-lg transition-all duration-150 hover:text-amber-500 hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-amber-400/30 hover:bg-amber-50">
                                Home
                                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-150 transform -translate-x-1/2 hover:w-full"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link relative text-xl font-semibold text-amber-400 px-4 py-1 rounded-lg transition-all duration-150 hover:text-amber-500 hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-amber-400/30 hover:bg-amber-50">
                                About
                                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-150 transform -translate-x-1/2 hover:w-full"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link relative text-xl font-semibold text-amber-400 px-4 py-1 rounded-lg transition-all duration-150 hover:text-amber-500 hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-amber-400/30 hover:bg-amber-50">
                                Contact
                                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-150 transform -translate-x-1/2 hover:w-full"></span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <button 
                    onClick={() => setMobileMenu((prev) => !prev)} 
                    className="md:hidden block"
                >
                    {mobileMenu?<IoClose className="text-amber-400 text-xl"/>:<IoMenu className="text-amber-400 text-xl" />}
                </button>
            </div>
            
            {/* Mobile Search Bar */}
            <div className="md:hidden px-2 pb-2">
                <form onSubmit={handleSearch} className="relative">
                    <div className="relative px-4 py-2 text-gray-700 bg-gray-50 border border-gray-200 rounded-full flex justify-between items-center focus-within:ring-2 focus-within:ring-amber-400 focus-within:border-transparent transition-all duration-200">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={() => searchQuery.trim() && setShowDropdown(true)}
                            placeholder="Search restaurants..."
                            className="w-full focus:outline-none bg-transparent text-sm"
                        />
                        <button
                            type="submit"
                            className="p-1 text-amber-400 hover:text-amber-500 transition-colors duration-200"
                        >
                            <IoSearch className="text-lg" />
                        </button>
                    </div>
                    
                    {showDropdown && searchResults.length > 0 && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
                            {searchResults.map((restaurant) => (
                                <div
                                    key={restaurant.info.id}
                                    onClick={() => handleResultClick(restaurant)}
                                    className="flex items-center p-3 hover:bg-amber-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors duration-150"
                                >
                                    <div className="w-12 h-12 mr-3 rounded-md overflow-hidden flex-shrink-0">
                                        <img 
                                            src={restaurantImagesConstUrl + restaurant.info.cloudinaryImageId}
                                            alt={restaurant.info.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-semibold text-gray-800 text-sm">{restaurant.info.name}</div>
                                        <div className="text-xs text-gray-600 flex items-center">
                                            <span className="mr-2">{restaurant.info.cuisines?.slice(0, 2).join(", ") || "Various cuisines"}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-amber-500 text-sm">
                                        <IoStarSharp className="mr-1" />
                                        <span className="font-medium">{restaurant.info.avgRating}</span>
                                    </div>
                                </div>
                            ))}
                            {searchQuery.trim() && (
                                <div 
                                    onClick={handleSearch}
                                    className="p-3 text-center text-amber-600 hover:bg-amber-50 cursor-pointer font-medium border-t border-gray-200 text-sm"
                                >
                                    View all results for "{searchQuery}"
                                </div>
                            )}
                        </div>
                    )}
                </form>
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
                            <a href="#">Home</a>
                        </li>
                        <li className={`
                            border-b py-2 font-semibold text-amber-400 hover:bg-amber-50
                            transition-all duration-150 delay-150
                            ${mobileMenu ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'}
                        `}>
                            <a href="#">About</a>
                        </li>
                        <li className={`
                            border-b py-2 font-semibold text-amber-400 hover:bg-amber-50
                            transition-all duration-150 delay-225
                            ${mobileMenu ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'}
                        `}>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header
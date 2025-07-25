import { useState, useEffect, useRef } from "react";
import { IoSearch, IoStarSharp } from "react-icons/io5";
import { restaurantImagesConstUrl } from "../Util/constant.js";

function SearchBar({ filtration, setRestaurantRowData, isMobile = false }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const searchRef = useRef(null);
    
    useEffect(() => {
        if (searchQuery.trim()) {
            const filtered = filtration.filter(restaurant => {
                let restaurantName = restaurant?.info.name.split("").filter(item => {
                    if (item !== " ") {
                        return item;
                    }
                }).join("");
                
                let name = searchQuery.split("").filter(item => {
                    if (item !== " ") {
                        return item;
                    }
                }).join("");

                if (restaurantName.toLowerCase().includes(name.toLowerCase())) {
                    return restaurant;
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
            handleSearchClick(searchQuery);
            setShowDropdown(false);
        }
    };
    
    const handleResultClick = (restaurant) => {
        console.log("Selected restaurant:", restaurant);
        setSearchQuery(restaurant.info.name);
        setRestaurantRowData([restaurant]);
        setShowDropdown(false);
    };
    
    const handleSearchClick = (searchQuery) => {
        const filtered = filtration.filter(restaurant => {
            let restaurantName = restaurant?.info.name.split("").filter(item => {
                if (item !== " ") {
                    return item;
                }
            }).join("");
            
            let name = searchQuery.split("").filter(item => {
                if (item !== " ") {
                    return item;
                }
            }).join("");

            if (restaurantName.toLowerCase().includes(name.toLowerCase())) {
                return restaurant;
            }
        });
        setRestaurantRowData(filtered);
    };
    
    const containerClass = isMobile 
        ? "px-2 pb-2" 
        : "flex w-full";
    
    const inputContainerClass = isMobile
        ? "relative px-4 py-2 text-gray-700 bg-gray-50 border border-gray-200 rounded-full flex justify-between items-center focus-within:ring-2 focus-within:ring-amber-400 focus-within:border-transparent transition-all duration-200"
        : "w-full px-4 py-2 justify-center items-center text-gray-700 bg-gray-50 border border-gray-200 rounded-full flex focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200 hover:shadow-md";
    
    const inputClass = isMobile
        ? "w-full focus:outline-none bg-transparent text-sm"
        : "focus:outline-none w-full px-2 bg-transparent";
    
    const buttonClass = isMobile
        ? "p-1 text-amber-400 hover:text-amber-500 transition-colors duration-200"
        : "text-amber-400 cursor-pointer hover:text-amber-500 transition-colors duration-200";
    
    const iconClass = isMobile ? "text-lg" : "text-xl";
    
    const dropdownClass = isMobile
        ? "absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto"
        : "absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto";
    
    const imageClass = isMobile ? "w-12 h-12 mr-3 rounded-md" : "w-14 h-14 mr-3 rounded-lg";
    const textClass = isMobile ? "text-sm" : "";
    const cuisineTextClass = isMobile ? "text-xs" : "text-sm";
    const ratingTextClass = isMobile ? "text-sm" : "";

    return (
        <div className={containerClass} ref={searchRef}>
            <form onSubmit={handleSearch} className="relative">
                <div className={inputContainerClass}>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => searchQuery.trim() && setShowDropdown(true)}
                        placeholder="Search restaurants..."
                        className={inputClass}
                    />
                    <button
                        type="submit"
                        onClick={() => handleSearchClick(searchQuery)}
                        className={buttonClass}
                    >
                        <IoSearch className={iconClass} />
                    </button>
                </div>
                
                {showDropdown && searchResults.length > 0 && (
                    <div className={dropdownClass}>
                        {searchResults.map((restaurant) => (
                            <div
                                key={restaurant.info.id}
                                onClick={() => handleResultClick(restaurant)}
                                className="flex items-center p-3 hover:bg-amber-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors duration-150"
                            >
                                <div className={`${imageClass} overflow-hidden flex-shrink-0`}>
                                    <img 
                                        src={restaurantImagesConstUrl + restaurant.info.cloudinaryImageId}
                                        alt={restaurant.info.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <div className={`font-semibold text-gray-800 ${textClass}`}>
                                        {restaurant.info.name}
                                    </div>
                                    <div className={`text-gray-600 flex items-center ${cuisineTextClass}`}>
                                        <span className="mr-2">
                                            {isMobile 
                                                ? restaurant.info.cuisines?.slice(0, 2).join(", ") || "Various cuisines"
                                                : restaurant.info.cuisines?.join(", ") || "Various cuisines"
                                            }
                                        </span>
                                    </div>
                                </div>
                                <div className={`flex items-center text-amber-500 ${ratingTextClass}`}>
                                    <IoStarSharp className="mr-1" />
                                    <span className="font-medium">{restaurant.info.avgRating}</span>
                                </div>
                            </div>
                        ))}
                        {isMobile && searchQuery.trim() && (
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
    );
}

export default SearchBar;
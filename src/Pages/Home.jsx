import React, { useEffect, useRef, useState } from 'react'
import RestaurantCard from '../Components/RestaurantCard'
import BgImage from "../assets/images/backgroundImage.jpg"
import RestaurantCardRow from '../Components/RestaurantCardRow'
import FirstRestaurantRow from '../Components/FirstRestaurantRow'
import SearchBar from '../Components/SearchBar'
import { IoFilter, IoStarSharp, IoTimeOutline, IoLocationOutline } from "react-icons/io5"

// Add these CSS styles to your global CSS or create a separate CSS file
const stickyStyles = `
  .sticky-header {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 100;
  }
  
  .shadow-dynamic {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  
  .shadow-enhanced {
    box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
  
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  
  .backdrop-blur-fallback {
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
`;

// Inject styles if not already present
if (typeof document !== 'undefined' && !document.getElementById('sticky-styles')) {
  const styleSheet = document.createElement('style');
  styleSheet.id = 'sticky-styles';
  styleSheet.textContent = stickyStyles;
  document.head.appendChild(styleSheet);
}

function Home({ firstRowData, restaurantRowData, errorMessage, filtration, isLoading, setRestaurantRowData }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [newHeader, setNewHeader] = useState(false);

  const filterButtons = [
    { id: 'all', label: 'All' },
    { id: 'rating', label: 'Top Rated' },
    { id: 'distance', label: 'Near Me' },
    { id: 'offers', label: 'Offers' },
    { id: 'pure-veg', label: 'Pure Veg' },
  ];

  // Filter functions - UI only
  const handleFilterClick = (filterType) => {
    setActiveFilter(filterType);
  };

  useEffect(() => {
    const handleShadowEffect = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const threshold = 200; // Reduced threshold for better UX
      setNewHeader(scrollTop > threshold);
    };
    
    // Initial check
    handleShadowEffect();
    
    window.addEventListener("scroll", handleShadowEffect, { passive: true });
    window.addEventListener("resize", handleShadowEffect, { passive: true });
    
    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleShadowEffect);
      window.removeEventListener("resize", handleShadowEffect);
    };
  }, []);

  function filterDataAccordingFilterButton(filterId) {
    let filterArray = [...filtration];
    console.log(restaurantRowData);
    
    switch(filterId) {
      case "all":
        filterArray = filtration;
        break;
      case "rating":
        filterArray = filtration.filter((restaurant) => {
          let rating = Number(restaurant.info.avgRating);
          return rating >= 4.5;
        });
        break;
      case "pure-veg":
        filterArray = filtration.filter((restaurant) => {
          let veg = Number(restaurant.info?.veg);
          return veg;
        });
        break;
      case "offers":
        filterArray = filtration.filter((restaurant) => {
          let rating = Number(restaurant.info?.sla.lastMileTravel);
          return rating < 1.5;
        });
        break;
      default:
        filterArray = filtration;
    }
    setRestaurantRowData(filterArray);
  }
  
  useEffect(() => {
    filterDataAccordingFilterButton(activeFilter);
  }, [activeFilter]); // Added filtration to dependencies would be better: [activeFilter, filtration]

  return (
    <div className="w-full min-h-screen relative">
      {/* Main Container with proper padding */}
      <div className="pt-16 sm:pt-20 md:pt-24 w-full">
        
        {/* Background Image - Hidden on mobile, visible on larger screens */}
        <div className="hidden md:flex justify-center mx-auto px-4 sm:px-6 lg:px-10 mb-6 lg:mb-8">
          <div className="w-full max-w-7xl">
            <img
              className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-xl lg:rounded-2xl border-2 lg:border-4 border-amber-300 bg-white shadow-lg"
              src={BgImage}
              alt="Background"
            />
          </div>
        </div>

        {/* Restaurant Sections */}
        <div className="flex flex-col gap-4 sm:gap-5 w-full">
          
          {/* First Restaurant Row */}
          <FirstRestaurantRow 
            errorMessage={errorMessage} 
            firstRowData={firstRowData} 
          />
          
          {/* Sticky Search Bar and Filters Section */}
     <div 
            className={`
              
          
            `}
            style={{
              position: 'sticky',
              top: '0px',
              zIndex: 100,
              backgroundColor: newHeader ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
          >
            <div className="max-w-7xl md:flex mx-auto hidden justify-between items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
              
              {/* Search Bar Container */}
              <div className="w-full mb-4">
                <SearchBar 
                  filtration={filtration}
                  setRestaurantRowData={setRestaurantRowData}
                  isMobile={false}
                />
              </div>
              
              {/* Filter Buttons Container */}
              <div className="w-full">
                {/* Desktop Filter Buttons */}
                <div className="  justify-center flex gap-5 items-center lg:gap-4 flex-wrap">
                  {filterButtons.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleFilterClick(item.id)}
                      className={`
                        px-3 md:px-4 lg:px-6 py-2 md:py-2.5
                        text-sm md:text-base font-semibold
                        rounded-lg border-2 transition-all duration-200 ease-in-out
                        transform hover:scale-105 active:scale-95
                        focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-1
                        whitespace-nowrap flex-shrink-0
                        ${activeFilter === item.id 
                          ? "bg-amber-400 border-amber-400 text-white shadow-md" 
                          : "bg-white border-amber-400 text-amber-600 hover:bg-amber-50 hover:shadow-sm"
                        }
                      `}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
                
                {/* Mobile Filter Buttons */}
               
              </div>
            </div>
          </div>
          
          {/* Restaurant Cards Row */}
          <div className="w-full">
            <RestaurantCardRow 
              errorMessage={errorMessage} 
              isLoading={isLoading} 
              restaurantRowData={restaurantRowData} 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
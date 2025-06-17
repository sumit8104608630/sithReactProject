import foodWeAppLogo from "../assets/Logos/foodweAppLogo.png"

function Header() {
  return (
    <div className="flex justify-between items-center shadow-xl bg-white px-6 py-1">
        <div className="group">
            <img 
                className="w-20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" 
                src={foodWeAppLogo} 
                alt="FoodWe App Logo" 
            />
        </div>
        
        <div className="flex-1 max-w-md mx-8">
        </div>
        
        <nav>
            <ul className="flex gap-5 list-none">
                <li>
                    <a href="#" className="nav-link relative text-xl font-semibold text-amber-400 px-4 py-1 rounded-lg transition-all duration-300 hover:text-amber-500 hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-amber-400/30 hover:bg-amber-50">
                        Home
                        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 transform -translate-x-1/2 hover:w-full"></span>
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link relative text-xl font-semibold text-amber-400 px-4 py-1 rounded-lg transition-all duration-300 hover:text-amber-500 hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-amber-400/30 hover:bg-amber-50">
                        About
                        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 transform -translate-x-1/2 hover:w-full"></span>
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link relative text-xl font-semibold text-amber-400 px-4 py-1 rounded-lg transition-all duration-300 hover:text-amber-500 hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-amber-400/30 hover:bg-amber-50">
                        Contact
                        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 transform -translate-x-1/2 hover:w-full"></span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header
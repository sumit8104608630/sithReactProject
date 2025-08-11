import Header from './Components/Header'
import RestaurantCard from './Components/RestaurantCard'
import BgImage from "./assets/images/backgroundImage.jpg"
import Home from './Pages/Home'
import Footer from './Components/Footer'
import ErrorMessage from './Components/ErrorMessage.jsx'
import useResturantData from "./customHooks/useResturantData.js"
function App() {
   const {filtration,firstRowData,isLoading,restaurantRowData,errorMessage,setErrorMessage,setFiltration,setFirstRowData,setRestaurantRowData}=useResturantData()

      if(errorMessage){
        return <ErrorMessage errorMessage={errorMessage} />
      }
  return (
    <>
    {<>
<Home 
isLoading={isLoading}
  firstRowData={firstRowData}
  restaurantRowData={restaurantRowData}
  errorMessage={errorMessage}
  filtration={filtration}          // Add this
  setRestaurantRowData={setRestaurantRowData}  // Add this
/>    <div className='hidden md:block'>
    </div>
    </>}
    </>
  )
}

export default App
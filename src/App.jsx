
import Home from './Pages/Home'
import ErrorMessage from './Components/ErrorMessage.jsx'
import useResturantData from "./customHooks/useResturantData.js"
function App() {
   const {filtration,firstRowData,isLoading,restaurantRowData,errorMessage,setRestaurantRowData}=useResturantData()

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
/>  
    </>}
    </>
  )
}

export default App
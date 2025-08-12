import { useEffect, useState } from "react"
import { extractId, Url } from "../Util/hepler"
import { useParams } from "react-router"

const useMenuData =()=>{
      const [nestedMenuItem,setNestedMenuItem]=useState([])
      const [isLoading,setIsLoading]=useState(true)
      const [menuInfo, setMenuInfo] = useState({})
      const [offers, setOffers] = useState([])
      const param = useParams();
      const [errorMessage,setErrorMessage]=useState("");
      
      const [menuItem,setMenuItems]=useState([]);
    const extractMenuData = async () => {
  try {
    let id = extractId(param.title);
    let url = Url(id);
    const response = await fetch(url);
    
    if (!response.ok) {
      switch (response.status) {
        case 400:
          throw new Error("400 Bad Request: The server could not understand the request.");
        case 401:
          throw new Error("401 Unauthorized: Access is denied due to invalid credentials.");
        case 403:
          throw new Error("403 Forbidden: You do not have permission to access this resource.");
        case 404:
          throw new Error("Restaurant not found.");
        case 405:
          throw new Error("405 Method Not Allowed: The HTTP method is not supported.");
        case 408:
          throw new Error("408 Request Timeout: The server timed out waiting for the request.");
        case 409:
          throw new Error("409 Conflict: The request could not be completed due to a conflict.");
        case 422:
          throw new Error("422 Unprocessable Entity: The request was well-formed but could not be followed due to semantic errors.");
        case 429:
          throw new Error("429 Too Many Requests: You have sent too many requests in a given time.");
        case 500:
          throw new Error("500 Internal Server Error: The server encountered an unexpected condition.");
        default:
          throw new Error(`${response.status} Error: An unknown error occurred.`);
      }
    }

    const jsonData = await response.json();
    const Cards = jsonData.data.cards;
    
    setMenuInfo(Cards[2]?.card?.card?.info);
    
    let menuCollection = Cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      item => item.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    
    let nestedMenuCollection = Cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      item => item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
    
    
    setNestedMenuItem(nestedMenuCollection);
    setMenuItems(menuCollection);
    setOffers(Cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers);
    setIsLoading(false)
    
  } catch (err) {
    setErrorMessage(err.message);
    setIsLoading(false)
    console.error("Error fetching menu data:", err);
  }
};


  useEffect(() => {
    extractMenuData();
  }, [])

  return {nestedMenuItem,isLoading,menuInfo,offers,errorMessage,menuItem}
}

export default useMenuData;
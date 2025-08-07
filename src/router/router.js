import {createBrowserRouter} from "react-router"
import Home from "../Pages/Home.jsx"
import Cart from "../Pages/Cart.jsx"
import About from "../Pages/About.jsx"
import Contact from "../Pages/Contact.jsx"
import App from "../App.jsx"
import LayOut from "../Pages/LayOut.jsx"
import MenuPage from "../Pages/MenuPage.jsx"
import ErrorMessage from "../Components/ErrorMessage.jsx"
const appRouter=createBrowserRouter([
 
    {
     path:"/",
     Component:LayOut,
     children:[
        {
            path:"",
            Component : App
        },
        {
            path:"/cart",
            Component : Cart
        },
           {path:"*",
        Component:ErrorMessage
        },
        {
            path:"/about",
            Component : About
        },
        {
            path:"/contact",
            Component : Contact 
        },
        {
            path:"/menu/:title",
            Component : MenuPage
        }

     ]
    }
]);

export {appRouter}
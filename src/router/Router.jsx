
import {createBrowserRouter} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../page/Home/Home";


export const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Root></Root>,
    children : [
        {
            path: '/',
            element: <Home></Home>
        }
    ]
  },

]);
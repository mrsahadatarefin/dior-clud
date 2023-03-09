import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddProduct from "../Pages/AddProduct/AddProduct";
import AllUsers from "../Pages/AllUsers/AllUsers";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyOrder from "../Pages/MyOrder/MyOrder";
import Payment from "../Pages/Payment/Payment";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoutes from "./AdminRoutes";

import PrivateRoute from "./PrivateRoute/PrivateRoute";



export const route = createBrowserRouter([
   { path:'/',
    element:<Main></Main>,
    children:[
        
        {path:'/',
        element:<Home></Home>
},
{
    path:'/login',
    element:<Login></Login>
},
{
    path:'/signUp',
    element:<SignUp></SignUp>
    
},
{
    path:'/myOrder',
    element:<PrivateRoute><MyOrder></MyOrder></PrivateRoute>
    
},
{
    path:'/addProduct',
    element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
    
},
{
    path:'/allUsers',
    element:<AdminRoutes><AllUsers></AllUsers></AdminRoutes>
    
},
{
    path:'/payment',
    element:<PrivateRoute><Payment></Payment></PrivateRoute>
    
},

]

    }

])
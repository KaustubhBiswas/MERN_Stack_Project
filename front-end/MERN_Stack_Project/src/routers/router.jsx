import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import Login from "../components/Login";
import Register from "../components/Register";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import SingleBook from "../pages/Book/SingleBook";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/orders",
                element: <div>Orders</div>
            },
            {
                path: "/about",
                element: <div>About</div> 
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/checkout",
                element: <PrivateRoute><Checkout /></PrivateRoute>
            },
            {
                path: "/books/:id",
                element: <SingleBook />
            }
        ]
    },
]);

export default router;
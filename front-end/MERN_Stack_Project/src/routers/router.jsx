import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import Login from "../components/Login";
import Register from "../components/Register";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import SingleBook from "../pages/Book/SingleBook";
import PrivateRoute from "./PrivateRoute";
import OrdersPage from "../pages/OrdersPage";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";

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
                element: <PrivateRoute><OrdersPage /></PrivateRoute>
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
            },
            {
                path: "/dashboard",
                element: <AdminRoute><div>Dashboard</div></AdminRoute>,
                children: [
                    {
                        path: "",
                        element: <AdminRoute><div>Dashboard Home</div></AdminRoute>
                    },
                    {
                        path: "add-new-book",
                        element: <AdminRoute><div>Add new book</div></AdminRoute>
                    },
                    {
                        path: "edit-book:/id",
                        element: <AdminRoute><div>Edit book</div></AdminRoute>
                    },
                    {
                        path: "manage-book",
                        element: <AdminRoute><div>Manage Book</div></AdminRoute>
                    }
                ]
            },
            {
                path: "/admin",
                element: <AdminLogin />
            }
        ]
    },
]);

export default router;
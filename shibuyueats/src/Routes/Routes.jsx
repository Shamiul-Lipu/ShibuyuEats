import {
    Navigate,
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import Chefs from "../Pages/Chefs";
import ChefDetails from "../Pages/ChefDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";
import Blog from "../Pages/Blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: '/chefs/:id',
                element: <PrivateRoute><ChefDetails /></PrivateRoute>,
            },
            {
                path: 'blog',
                element: <Blog />
            }

        ]
    }

])

export default router;
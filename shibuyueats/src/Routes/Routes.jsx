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

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
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
            // {
            //     path: '/',
            //     element: <Chefs />,
            //     children: [
            {
                path: '/chefs/:id',
                element: <ChefDetails />,
            }
            //     ]
            // }
        ]
    }

])

export default router;
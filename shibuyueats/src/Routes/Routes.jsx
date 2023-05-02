import {
    Navigate,
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import Chefs from "../Pages/Chefs";

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
            }
        ]
    },
    {
        path: 'chefs',
        element: <Chefs />,
    }
])

export default router;
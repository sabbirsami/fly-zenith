import { createBrowserRouter } from "react-router-dom";
import Root from "../components/root/Root";
import Home from "../components/home/Home";
import SignIn from "../components/auth/signIn/SignIn";
import Register from "../components/auth/register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/booking",
                element: "Booking page",
            },
            {
                path: "/sign-in",
                element: <SignIn />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
]);
export default router;

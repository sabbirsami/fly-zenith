import { createBrowserRouter } from "react-router-dom";
import Root from "../components/root/Root";
import Home from "../components/home/Home";
import SignIn from "../components/auth/signIn/SignIn";

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
        ],
    },
]);
export default router;

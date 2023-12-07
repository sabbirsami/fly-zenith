import { createBrowserRouter } from "react-router-dom";
import Root from "../components/root/Root";
import Home from "../components/root/home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/booking", element: "Booking page" },
        ],
    },
]);
export default router;

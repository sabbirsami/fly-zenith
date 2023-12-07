import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";

const Root = () => {
    const location = useLocation();
    console.log(location);
    return (
        <div>
            {location.pathname === "/sign-in" ||
            location.pathname === "/register" ? (
                ""
            ) : (
                <Navbar />
            )}
            <Outlet />
        </div>
    );
};

export default Root;

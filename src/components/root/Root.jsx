import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/footer/Footer";

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
            {location.pathname === "/sign-in" ||
            location.pathname === "/register" ? (
                ""
            ) : (
                <Footer />
            )}
        </div>
    );
};

export default Root;

import { NavLink } from "react-router-dom";
import navLogo from "../../../assets/navLogo.png";
import { MdOutlineFlight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
    const user = true;
    return (
        <header className="container mx-auto px-6 py-8">
            <nav className="flex justify-between items-center">
                <div className="flex items-center gap-10">
                    <img className="h-8" src={navLogo} alt="" />
                    <ul className="flex gap-10">
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/booking"}>Booking</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/about"}>About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/contact"}>Contact Us</NavLink>
                        </li>
                    </ul>
                </div>
                {user ? (
                    <div className="flex gap-6">
                        <div className="bg-[#CCD2DC] rounded-full inline-block relative">
                            <MdOutlineFlight className="inline mx-1.5 my-1 text-white text-xl" />
                            <span className="-top-1 left-6 absolute  w-3.5 h-3.5 bg-rose-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
                        </div>
                        <div className="flex gap-2 items-center ">
                            <img
                                className="rounded-full h-8 w-8 object-cover"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2YVAULJ6GI8fLupl7Mm5AqaHc6f8dvwwVGUMIzPnkksgAWNb8XfZM0P7VZUZTdXxQdtM&usqp=CAU"
                                alt=""
                            />
                            <div className="flex gap-1 items-center">
                                <h2 className="text-base font-semibold">
                                    Sami
                                </h2>
                                <button>
                                    <IoIosArrowDown className="mt-1" />
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <li>
                        <NavLink to={"/sign-in"}>Sign In</NavLink>
                    </li>
                )}
            </nav>
        </header>
    );
};

export default Navbar;

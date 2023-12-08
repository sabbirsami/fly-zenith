import { NavLink } from "react-router-dom";
import navLogo from "../../../assets/navLogo.png";
import { MdOutlineFlight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const user = false;
    return (
        <header className="container mx-auto md:px-6 px-2 lg:py-8 py-5 relative">
            <nav className="flex justify-between items-center">
                <div className="flex items-center gap-10 ">
                    <img className="h-8 " src={navLogo} alt="" />
                    <ul className=" gap-10 hidden lg:flex">
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/booking"}>Booking & Flights</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/about"}>About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/contact"}>Contact Us</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="hidden lg:flex items-center">
                    {user ? (
                        <div className="flex gap-2">
                            <div className="">
                                <div className="bg-[#CCD2DC] rounded-full inline-block relative">
                                    <MdOutlineFlight className="inline mx-1.5 my-1.5 text-white text-xl" />
                                    <span className="-top-1 left-6 absolute  w-3.5 h-3.5 bg-rose-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
                                </div>
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
                </div>
                <div
                    onClick={() => {
                        setIsActive(!isActive);
                    }}
                    className="button lg:hidden block"
                >
                    <div
                        className={`${"burger"} ${
                            isActive ? "burgerActive" : ""
                        }`}
                    ></div>
                </div>
            </nav>
            {isActive && (
                <div className="absolute h-screen w-80 bg-slate-900 top-0 right-0 menu text-white">
                    <div className="py-5 flex justify-end md:me-4 me-1">
                        <div
                            onClick={() => {
                                setIsActive(!isActive);
                            }}
                            className="button lg:hidden block bg-white"
                        >
                            <div
                                className={`${"burger"} ${
                                    isActive ? "burgerActive" : ""
                                }`}
                            ></div>
                        </div>
                    </div>
                    <div className="gap-10  p-10">
                        <ul className=" gap-10  space-y-4">
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
                    <div className="px-10 flex items-center">
                        {user ? (
                            <div className="flex gap-2">
                                <div className="">
                                    <div className="bg-[#CCD2DC] rounded-full inline-block relative">
                                        <MdOutlineFlight className="inline mx-1.5 my-1.5 text-white text-xl" />
                                        <span className="-top-1 left-6 absolute  w-3.5 h-3.5 bg-rose-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
                                    </div>
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
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;

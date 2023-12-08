import { Link } from "react-router-dom";
import { CgArrowLongLeft } from "react-icons/cg";
import signInImage from "../../../assets/hero/sign-in.jpg";
const SignIn = () => {
    return (
        <div className="">
            <div className="grid lg:grid-cols-6">
                <div
                    className="col-span-3 h-screen lg:block hidden"
                    style={{
                        backgroundImage: `url("${signInImage}")`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                >
                    <div className="flex justify-end mt-10">
                        <Link to={"/"} className="">
                            <p className="py-3 px-5 bg-white inline-block">
                                <CgArrowLongLeft className="inline mb-1 text-xl" />{" "}
                                Back to Home
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="col-span-3 flex justify-center items-center h-screen p-2">
                    <div className=" lg:me-28 md:p-14 p-6 bg-white rounded-md shadow-md">
                        <h2 className="text-4xl pb-8 font-bold text-center">
                            Sign In
                        </h2>
                        <form className="">
                            <div className="">
                                <label htmlFor="email" className="w-96">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full py-5 rounded-md border-0 mt-1 bg-[#f2f5fb] mb-4"
                                />
                            </div>
                            <div className="">
                                <label htmlFor="password" className="w-96 ">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="Your Password"
                                    className="w-full py-5 rounded-md border-0 mt-1 bg-[#f2f5fb]"
                                />
                            </div>
                            <button
                                className="w-full mt-6 bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-white font-semibold py-5 rounded-md"
                                type="submit"
                            >
                                Sign In
                            </button>
                        </form>
                        <div className="pt-6">
                            <p className="">
                                Don&#39;t have any account?{" "}
                                <Link
                                    to={"/register"}
                                    className="text-[#3a8cd4]"
                                >
                                    Register
                                </Link>
                            </p>
                        </div>
                        <div className="md:hidden flex justify-center border rounded-md mt-10">
                            <Link to={"/"} className="">
                                <p className="py-3 px-5 bg-white inline-block">
                                    <CgArrowLongLeft className="inline mb-1 text-xl" />{" "}
                                    Back to Home
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;

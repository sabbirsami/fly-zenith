import { CgArrowLongLeft } from "react-icons/cg";
import registerImage from "../../../assets/hero/register.jpg";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="">
            <div className="grid lg:grid-cols-6">
                <div
                    className="col-span-2 h-screen lg:block hidden"
                    style={{
                        backgroundImage: `url("${registerImage}")`,
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
                <div className="col-span-4 flex justify-center items-center h-screen p-2">
                    <div className=" md:p-14 p-6 bg-white rounded-md shadow-md">
                        <h2 className="text-4xl pb-8 font-bold text-center">
                            Register
                        </h2>
                        <form className="">
                            <div className="flex gap-6">
                                <div className="">
                                    <label
                                        htmlFor="email"
                                        className="w-96 text-black/50 font-semibold"
                                    >
                                        Title{" "}
                                        <span className="text-rose-500">*</span>
                                    </label>
                                    <select
                                        name="title"
                                        id="title"
                                        className="w-full py-5 rounded-md border-0 mt-1 bg-[#f2f5fb] mb-4"
                                    >
                                        <option value="mr">Mr</option>
                                        <option value="ms">Ms</option>
                                        <option value="mrs">Mrs</option>
                                    </select>
                                </div>
                                <div className="">
                                    <label
                                        htmlFor="email"
                                        className="w-96 text-black/50 font-semibold"
                                    >
                                        First Name{" "}
                                        <span className="text-rose-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full py-5 rounded-md border-0 mt-1 bg-[#f2f5fb] mb-4"
                                    />
                                </div>
                                <div className="">
                                    <label
                                        htmlFor="email"
                                        className="w-96  text-black/50 font-semibold"
                                    >
                                        Last Name{" "}
                                        <span className="text-rose-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full py-5 rounded-md border-0 mt-1 bg-[#f2f5fb] mb-4"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="grow">
                                    <label
                                        htmlFor="email"
                                        className="w-96  text-black/50 font-semibold"
                                    >
                                        Email{" "}
                                        <span className="text-rose-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full grow py-5 rounded-md border-0 mt-1 bg-[#f2f5fb] mb-4"
                                    />
                                </div>
                                <div className="">
                                    <label
                                        htmlFor="email"
                                        className="w-96 text-black/50 font-semibold"
                                    >
                                        Phone Number{" "}
                                        <span className="text-rose-500">*</span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Phone Number"
                                        className="w-full py-5 rounded-md border-0 mt-1 bg-[#f2f5fb] mb-4"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="grow">
                                    <label
                                        htmlFor="password"
                                        className="w-96 text-black/50 font-semibold "
                                    >
                                        Photo Url{" "}
                                        <span className="text-rose-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Photo Url"
                                        className="w-full py-5 rounded-md border-0 mt-1 bg-[#f2f5fb] mb-4"
                                    />
                                </div>
                                <div className="">
                                    <label
                                        htmlFor="departureCity "
                                        className="text-xs px-3 uppercase  font-bold text-black/50"
                                    >
                                        Country{" "}
                                        <span className="text-rose-500">*</span>
                                    </label>
                                    <select
                                        className="border-0 w-full bg-[#f2f5fb] py-5 rounded-md "
                                        name="Country"
                                        id="Country"
                                    >
                                        <option value="unitedStates">
                                            United States
                                        </option>
                                        <option value="japan">Japan</option>
                                        <option value="bangladesh">
                                            Bangladesh
                                        </option>
                                        <option value="turkey">Turkey</option>
                                        <option value="saudi">
                                            Saudi Arabia
                                        </option>
                                        <option value="china">China</option>
                                    </select>
                                </div>
                            </div>
                            <div className="">
                                <label
                                    htmlFor="password"
                                    className="w-96 text-black/50 font-semibold "
                                >
                                    Password{" "}
                                    <span className="text-rose-500">*</span>
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
                                Register
                            </button>
                        </form>
                        <div className="pt-6">
                            <p className="">
                                Already have an account?{" "}
                                <Link
                                    to={"/sign-in"}
                                    className="text-[#3a8cd4]"
                                >
                                    Sign In
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

export default Register;

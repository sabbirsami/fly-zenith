import { BsArrowRight } from "react-icons/bs";
import japanImage from "../../../assets/hero/japan.jpg";
import parisImage from "../../../assets/hero/paris2.jpg";

const Hero = () => {
    return (
        <div className="grid grid-cols-9">
            <div
                className="col-span-6 h-[90vh] "
                style={{
                    backgroundImage: `url("${japanImage}")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="bg-[#f2f5fb]  pt-16">
                    <div className="max-w-[66rem] ms-auto ">
                        <div className="grid grid-cols-5 ">
                            <div className="col-span-3"></div>
                            <div className="col-span-2">
                                <div className="bg-white border-b border-black/5">
                                    <div className="uppercase flex">
                                        <button className=" py-5 w-full  uppercase text-sm font-semibold text-black/60 shadow-md">
                                            Flight
                                        </button>
                                        <button className=" py-5 w-full uppercase text-sm font-semibold text-black/60 border-x bg-black/5">
                                            Rent Car
                                        </button>
                                        <button className=" py-5 w-full uppercase text-sm font-semibold text-black/60 bg-black/5">
                                            Hotel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-[66rem] ms-auto ">
                    <div className="grid grid-cols-5 ">
                        <div className="col-span-3"></div>
                        <div className="col-span-2 bg-white">
                            <form className="">
                                <div className=" py-6 px-8 border-b">
                                    <label
                                        htmlFor="departureCity "
                                        className="text-xs px-3 uppercase  font-bold text-black/50"
                                    >
                                        Departure City{" "}
                                        <span className="text-rose-500">*</span>
                                    </label>
                                    <select
                                        className="border-0 py-3 w-full"
                                        name="departureCity"
                                        id="departureCity"
                                    >
                                        <option
                                            disabled
                                            className="disabled:opacity-25 text-black/25"
                                        >
                                            Select Departure City
                                        </option>
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
                                <div className=" py-6 px-8">
                                    <label
                                        htmlFor="departureCity "
                                        className="text-xs px-3 uppercase  font-bold text-black/50"
                                    >
                                        Arrival City{" "}
                                        <span className="text-rose-500">*</span>
                                    </label>
                                    <select
                                        className="border-0 py-3 w-full"
                                        name="departureCity"
                                        id="departureCity"
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
                                <div className="">
                                    <button className="w-full py-6 bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-white font-semibold">
                                        Show Flights{" "}
                                        <BsArrowRight className="inline ms-2 text-2xl" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="col-span-3 h-[90vh] object-cover "
                style={{
                    backgroundImage: `url("${parisImage}")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            ></div>
        </div>
    );
};

export default Hero;
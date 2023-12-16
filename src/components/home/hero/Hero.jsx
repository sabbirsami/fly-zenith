import { BsArrowRight } from "react-icons/bs";
import airportImage from "../../../assets/hero/airport.jpg";
import flightImage from "../../../assets/hero/flight.png";
import Marquee from "react-fast-marquee";
import { TbArrowsExchange } from "react-icons/tb";

const Hero = () => {
    return (
        <section className="relative overflow-x-hidden">
            <div className="grid xl:grid-cols-9">
                <div
                    className="col-span-6 h-[90vh] flex flex-col justify-between"
                    style={{
                        backgroundImage: `url("${airportImage}")`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <div className="">
                        <div className="bg-[#f2f5fb]  pt-16">
                            <div className="lg:max-w-[66rem] ms-auto ">
                                <div className="grid md:grid-cols-5 md:px-0 ps-6 ">
                                    <div className="lg:col-span-3 col-span-2"></div>
                                    <div className="lg:col-span-2 col-span-3">
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
                            <div className="grid md:grid-cols-5 md:px-0 ps-6">
                                <div className="lg:col-span-3 col-span-2"></div>
                                <div className="lg:col-span-2 col-span-3 bg-white">
                                    <form className="relative">
                                        <div className=" py-6 px-8 border-b">
                                            <label
                                                htmlFor="departureCity "
                                                className="text-xs px-3 uppercase  font-bold text-black/50"
                                            >
                                                Departure City{" "}
                                                <span className="text-rose-500">
                                                    *
                                                </span>
                                            </label>
                                            <select
                                                className="border-0 py-3 w-full"
                                                name="departureCity"
                                                id="departureCity"
                                            >
                                                <option value="chittagong">
                                                    <div className="">
                                                        <h4 className="">
                                                            Chittagong,{" "}
                                                        </h4>
                                                        <p className="text-xs opacity-5">
                                                            Shah Amanat
                                                            International
                                                            Airport
                                                        </p>
                                                    </div>
                                                </option>
                                                <option value="cox's-bazar">
                                                    <div className="">
                                                        <h4 className="">
                                                            Cox&#39;s Bazar,{" "}
                                                        </h4>
                                                        <p className="text-xs opacity-5">
                                                            Cox&#39;s Bazar
                                                            International
                                                            Airport
                                                        </p>
                                                    </div>
                                                </option>
                                                <option value="dhaka">
                                                    <div className="">
                                                        <h4 className="">
                                                            Dhaka,{" "}
                                                        </h4>
                                                        <p className="text-xs opacity-5">
                                                            Hazrat Shahjalal
                                                            International
                                                            Airport
                                                        </p>
                                                    </div>
                                                </option>
                                                <option value="sylhet">
                                                    <div className="">
                                                        <h4 className="">
                                                            Sylhet,{" "}
                                                        </h4>
                                                        <p className="text-xs opacity-5">
                                                            Osmani International
                                                            Airport
                                                        </p>
                                                    </div>
                                                </option>
                                                <option value="saidpur">
                                                    <div className="">
                                                        <h4 className="">
                                                            Saidpur,{" "}
                                                        </h4>
                                                        <p className="text-xs opacity-5">
                                                            Saipur Airport
                                                        </p>
                                                    </div>
                                                </option>
                                                <option value="rajshahi">
                                                    <div className="">
                                                        <h4 className="">
                                                            Rajshahi,{" "}
                                                        </h4>
                                                        <p className="text-xs opacity-5">
                                                            Shah Makhdum Airport
                                                        </p>
                                                    </div>
                                                </option>
                                                <option value="barisal">
                                                    <div className="">
                                                        <h4 className="">
                                                            Barisal ,{" "}
                                                        </h4>
                                                        <p className="text-xs opacity-5">
                                                            Barishal Airport
                                                        </p>
                                                    </div>
                                                </option>
                                                <option value="jessore">
                                                    <div className="">
                                                        <h4 className="">
                                                            Jessore ,{" "}
                                                        </h4>
                                                        <p className="text-xs opacity-5">
                                                            Jashore Airport
                                                        </p>
                                                    </div>
                                                </option>
                                            </select>
                                        </div>
                                        <div className="text-center absolute top-1/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                            <span className=" py-2 px-1.5 bg-[#f2f5fb] rounded-full">
                                                <TbArrowsExchange className="inline text-2xl" />
                                            </span>
                                        </div>
                                        <div className=" py-6 px-8">
                                            <label
                                                htmlFor="departureCity "
                                                className="text-xs px-3 uppercase  font-bold text-black/50"
                                            >
                                                Arrival City{" "}
                                                <span className="text-rose-500">
                                                    *
                                                </span>
                                            </label>
                                            <select
                                                className="border-0 py-3 w-full"
                                                name="departureCity"
                                                id="departureCity"
                                            >
                                                <option value="dhaka">
                                                    <div className="">
                                                        <h4 className="">
                                                            Dhaka,{" "}
                                                        </h4>
                                                        <p className="text-xs opacity-5">
                                                            Hazrat Shahjalal
                                                            International
                                                            Airport
                                                        </p>
                                                    </div>
                                                </option>
                                                <option value="chittagong">
                                                    <div className="">
                                                        <h4 className="">
                                                            Chittagong,{" "}
                                                        </h4>
                                                        <p className="text-xs opacity-5">
                                                            Shah Amanat
                                                            International
                                                            Airport
                                                        </p>
                                                    </div>
                                                </option>
                                                <option value="cox's-bazar">
                                                    <div className="">
                                                        <h4 className="">
                                                            Cox&#39;s Bazar,{" "}
                                                        </h4>
                                                        <p className="text-xs opacity-5">
                                                            Cox&#39;s Bazar
                                                            International
                                                            Airport
                                                        </p>
                                                    </div>
                                                </option>
                                                <option value="sylhet">
                                                    <div className="">
                                                        <h4 className="">
                                                            Sylhet,{" "}
                                                        </h4>
                                                        <p className="text-xs opacity-5">
                                                            Osmani International
                                                            Airport
                                                        </p>
                                                    </div>
                                                </option>
                                                <option value="saidpur">
                                                    <div className="">
                                                        <h4 className="">
                                                            Saidpur,{" "}
                                                        </h4>
                                                        <p className="text-xs opacity-5">
                                                            Saipur Airport
                                                        </p>
                                                    </div>
                                                </option>
                                                <option value="rajshahi">
                                                    <div className="">
                                                        <h4 className="">
                                                            Rajshahi,{" "}
                                                        </h4>
                                                        <p className="text-xs opacity-5">
                                                            Shah Makhdum Airport
                                                        </p>
                                                    </div>
                                                </option>
                                                <option value="barisal">
                                                    <div className="">
                                                        <h4 className="">
                                                            Barisal ,{" "}
                                                        </h4>
                                                        <p className="text-xs opacity-5">
                                                            Barishal Airport
                                                        </p>
                                                    </div>
                                                </option>
                                                <option value="jessore">
                                                    <div className="">
                                                        <h4 className="">
                                                            Jessore ,{" "}
                                                        </h4>
                                                        <p className="text-xs opacity-5">
                                                            Jashore Airport
                                                        </p>
                                                    </div>
                                                </option>
                                            </select>
                                        </div>
                                        <div className="">
                                            <button className="w-full py-6 bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-white font-semibold">
                                                See Flights{" "}
                                                <BsArrowRight className="inline ms-2 text-2xl" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" pb-24 max-w-[66rem] ms-auto">
                        {/* <h2 className="text-6xl text-white ">
                        Discover Your Next Adventure with Easy Flight Booking.
                    </h2> */}
                    </div>
                </div>
                <div
                    className="col-span-3 h-[90vh] object-cover xl:block hidden"
                    style={{
                        backgroundImage: `url("${flightImage}")`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "left",
                    }}
                ></div>
            </div>
            <div className="absolute   bottom-0 text-white font-extrabold text-[10rem] uppercase mb-0">
                <Marquee speed={150}>
                    <div className="w-full mb-0">
                        <p className="pe-2 mb-0">
                            Discover Your Next Adventure with Easy Flight
                            Booking.
                        </p>
                    </div>
                    <div className="w-full mb-0">
                        <p className="pe-2 mb-0 bg-clip-text text-transparent bg-gradient-to-r from-[#4facfe] to-[#00f2fe] stroke-current">
                            FlyZenith.
                        </p>
                    </div>
                    <div className="w-full mb-0">
                        <p className="pe-2 mb-0">
                            Discover Your Next Adventure with Easy Flight
                            Booking.
                        </p>
                    </div>
                    <div className="w-full mb-0">
                        <p className="pe-2 mb-0">Local air service.</p>
                    </div>
                </Marquee>
            </div>
        </section>
    );
};

export default Hero;

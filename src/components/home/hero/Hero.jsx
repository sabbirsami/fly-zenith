import { BsArrowRight } from "react-icons/bs";
import airportImage from "../../../assets/hero/airport.jpg";
import flightImage from "../../../assets/hero/flight.png";
import Marquee from "react-fast-marquee";

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
                                    <form className="">
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
                                                <option
                                                    disabled
                                                    className="disabled:opacity-25 text-black/25"
                                                >
                                                    Select Departure City
                                                </option>
                                                <option value="unitedStates">
                                                    United States
                                                </option>
                                                <option value="japan">
                                                    Japan
                                                </option>
                                                <option value="bangladesh">
                                                    Bangladesh
                                                </option>
                                                <option value="turkey">
                                                    Turkey
                                                </option>
                                                <option value="saudi">
                                                    Saudi Arabia
                                                </option>
                                                <option value="china">
                                                    China
                                                </option>
                                            </select>
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
                                                <option value="unitedStates">
                                                    United States
                                                </option>
                                                <option value="japan">
                                                    Japan
                                                </option>
                                                <option value="bangladesh">
                                                    Bangladesh
                                                </option>
                                                <option value="turkey">
                                                    Turkey
                                                </option>
                                                <option value="saudi">
                                                    Saudi Arabia
                                                </option>
                                                <option value="china">
                                                    China
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
                            FlyZenith
                        </p>
                    </div>
                    <div className="w-full mb-0">
                        <p className="pe-2 mb-0">
                            Discover Your Next Adventure with Easy Flight
                            Booking.
                        </p>
                    </div>
                    <div className="w-full mb-0">
                        <p className="pe-2 mb-0">Local air service</p>
                    </div>
                </Marquee>
            </div>
        </section>
    );
};

export default Hero;

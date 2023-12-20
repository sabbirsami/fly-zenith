import { BsArrowRight } from "react-icons/bs";

const Bookings = () => {
    return (
        <section className="container mx-auto px-6">
            {/* <h2 className="text-2xl font-bold">Search flight</h2> */}
            <div className="mb-6">
                <form className="flex justify-between items-end">
                    <div className="flex">
                        <div className=" py-6 ">
                            <label
                                htmlFor="departureCity "
                                className="text-xs px-3 uppercase  font-bold text-black/50"
                            >
                                Departure City{" "}
                                <span className="text-rose-500">*</span>
                            </label>
                            <select
                                className="border-0 py-4 w-full"
                                name="departureCity"
                                id="departureCity"
                            >
                                <option value="chittagong">
                                    <div className="">
                                        <h4 className="">Chittagong, </h4>
                                        <p className="text-xs opacity-5">
                                            Shah Amanat International Airport
                                        </p>
                                    </div>
                                </option>
                                <option value="cox's-bazar">
                                    <div className="">
                                        <h4 className="">Cox&#39;s Bazar, </h4>
                                        <p className="text-xs opacity-5">
                                            Cox&#39;s Bazar International
                                            Airport
                                        </p>
                                    </div>
                                </option>
                                <option value="dhaka">
                                    <div className="">
                                        <h4 className="">Dhaka, </h4>
                                        <p className="text-xs opacity-5">
                                            Hazrat Shahjalal International
                                            Airport
                                        </p>
                                    </div>
                                </option>
                                <option value="sylhet">
                                    <div className="">
                                        <h4 className="">Sylhet, </h4>
                                        <p className="text-xs opacity-5">
                                            Osmani International Airport
                                        </p>
                                    </div>
                                </option>
                                <option value="saidpur">
                                    <div className="">
                                        <h4 className="">Saidpur, </h4>
                                        <p className="text-xs opacity-5">
                                            Saipur Airport
                                        </p>
                                    </div>
                                </option>
                                <option value="rajshahi">
                                    <div className="">
                                        <h4 className="">Rajshahi, </h4>
                                        <p className="text-xs opacity-5">
                                            Shah Makhdum Airport
                                        </p>
                                    </div>
                                </option>
                                <option value="barisal">
                                    <div className="">
                                        <h4 className="">Barisal , </h4>
                                        <p className="text-xs opacity-5">
                                            Barishal Airport
                                        </p>
                                    </div>
                                </option>
                                <option value="jessore">
                                    <div className="">
                                        <h4 className="">Jessore , </h4>
                                        <p className="text-xs opacity-5">
                                            Jashore Airport
                                        </p>
                                    </div>
                                </option>
                            </select>
                        </div>

                        <div className=" py-6 ps-8">
                            <label
                                htmlFor="departureCity "
                                className="text-xs px-3 uppercase  font-bold text-black/50"
                            >
                                Arrival City{" "}
                                <span className="text-rose-500">*</span>
                            </label>
                            <select
                                className="border-0 py-4 w-full"
                                name="departureCity"
                                id="departureCity"
                            >
                                <option value="dhaka">
                                    <div className="">
                                        <h4 className="">Dhaka, </h4>
                                        <p className="text-xs opacity-5">
                                            Hazrat Shahjalal International
                                            Airport
                                        </p>
                                    </div>
                                </option>
                                <option value="chittagong">
                                    <div className="">
                                        <h4 className="">Chittagong, </h4>
                                        <p className="text-xs opacity-5">
                                            Shah Amanat International Airport
                                        </p>
                                    </div>
                                </option>
                                <option value="cox's-bazar">
                                    <div className="">
                                        <h4 className="">Cox&#39;s Bazar, </h4>
                                        <p className="text-xs opacity-5">
                                            Cox&#39;s Bazar International
                                            Airport
                                        </p>
                                    </div>
                                </option>
                                <option value="sylhet">
                                    <div className="">
                                        <h4 className="">Sylhet, </h4>
                                        <p className="text-xs opacity-5">
                                            Osmani International Airport
                                        </p>
                                    </div>
                                </option>
                                <option value="saidpur">
                                    <div className="">
                                        <h4 className="">Saidpur, </h4>
                                        <p className="text-xs opacity-5">
                                            Saipur Airport
                                        </p>
                                    </div>
                                </option>
                                <option value="rajshahi">
                                    <div className="">
                                        <h4 className="">Rajshahi, </h4>
                                        <p className="text-xs opacity-5">
                                            Shah Makhdum Airport
                                        </p>
                                    </div>
                                </option>
                                <option value="barisal">
                                    <div className="">
                                        <h4 className="">Barisal , </h4>
                                        <p className="text-xs opacity-5">
                                            Barishal Airport
                                        </p>
                                    </div>
                                </option>
                                <option value="jessore">
                                    <div className="">
                                        <h4 className="">Jessore , </h4>
                                        <p className="text-xs opacity-5">
                                            Jashore Airport
                                        </p>
                                    </div>
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-6">
                        <button className="w-full py-4 px-8 bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-white font-semibold">
                            See Flights{" "}
                            <BsArrowRight className="inline ms-2 text-2xl" />
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Bookings;

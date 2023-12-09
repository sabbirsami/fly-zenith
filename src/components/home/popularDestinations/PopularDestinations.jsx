import khulnaImage from "../../../assets/city-image/khulna.jpg";
import rajshahiImage from "../../../assets/city-image/rajshahi.jpg";
import coxBazarImage from "../../../assets/city-image/coxs-bazar.jpg";
import chittagongImage from "../../../assets/city-image/chittagong.jpg";
import { BsArrowRight } from "react-icons/bs";

const PopularDestinations = () => {
    return (
        <section className="container mx-auto px-6 pb-32">
            <div className="">
                <h2 className="text-6xl text- font-semibold">
                    Popular Destinations
                </h2>
                <div className="flex justify-between items-center">
                    <p className="text-black/60 max-w-2xl pt-6">
                        Explore our curated selection of Popular Destinations,
                        showcasing sought-after travel spots that capture the
                        essence of adventure and relaxation. From vibrant urban
                        landscapes to serene beach retreats, discover the top
                        destinations favored by fellow travelers.
                    </p>
                    <button className="text-2xl">
                        Book Now{" "}
                        <BsArrowRight className="inline ms-2 text-2xl" />
                    </button>
                </div>
            </div>
            <div className="">
                <div className="grid grid-cols-4 gap-6 mt-20">
                    <div className=" relative">
                        <img
                            className="h-[26rem] w-full object-cover rounded-md"
                            src={khulnaImage}
                            alt=""
                        />

                        <div className=" p-10 w-full absolute bottom-0 text-white bg-gradient-to-b to-black from-transparent">
                            <h4 className="text-3xl font-semibold">Khulna</h4>
                        </div>
                    </div>
                    <div className=" relative">
                        <img
                            className="h-[26rem] w-full object-cover rounded-md"
                            src={rajshahiImage}
                            alt=""
                        />

                        <div className=" p-10 w-full absolute bottom-0 text-white bg-gradient-to-b to-black from-transparent">
                            <h4 className="text-3xl font-semibold">Rajshahi</h4>
                        </div>
                    </div>
                    <div className=" relative">
                        <img
                            className="h-[26rem] w-full object-cover rounded-md"
                            src={coxBazarImage}
                            alt=""
                        />

                        <div className=" px-10 pb-10 pt-16 w-full absolute bottom-0 text-white bg-gradient-to-b to-black from-transparent">
                            <h4 className="text-3xl font-semibold">
                                Cox&#39;s Bazar
                            </h4>
                        </div>
                    </div>
                    <div className=" relative">
                        <img
                            className="h-[26rem] w-full object-cover rounded-md"
                            src={chittagongImage}
                            alt=""
                        />

                        <div className=" px-10 pb-10 pt-16 w-full absolute bottom-0 text-white bg-gradient-to-b to-black from-transparent">
                            <h4 className="text-3xl font-semibold">
                                Chittagong
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularDestinations;

import { BsArrowRight } from "react-icons/bs";
import offerImage from "../../../assets/offer.png";
import offerBgImage from "../../../assets/offerBg.png";

const Offer = () => {
    return (
        <section className="container mx-auto px-6 pb-32">
            <div
                className="grid grid-cols-5  border justify-between items-center rounded-md"
                style={{
                    backgroundImage: `url("${offerBgImage}")`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >
                <div className="col-span-3 p-20">
                    <h2 className=" text-3xl text-white font-semibold">
                        Get Our Special <p className="text-7xl">50% Off</p>{" "}
                        Offer on Winter Vacation!
                    </h2>
                    <button className="text- px-6 py-3 mt-10 bg-[#4574A2] text-white font-semibold rounded-full">
                        Book Now{" "}
                        <BsArrowRight className="inline ms-2 text-2xl" />
                    </button>
                </div>
                <div className="col-span-2  w-full flex justify-end">
                    <img
                        className="h-full me-0 text-end "
                        src={offerImage}
                        alt=""
                    />
                </div>
            </div>
        </section>
    );
};

export default Offer;

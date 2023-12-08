// import logo from "../../../assets/hero/logo.png";

const Features = () => {
    const flightBookingFeatures = [
        {
            id: 1,
            name: "User Authentication",
            description:
                "Experience hassle-free account creation and secure login functionalities. Our platform prioritizes the protection of your personal information.",
        },
        {
            id: 2,
            name: "Search and Booking",
            description:
                "Provide a user-friendly search interface for flights. Include filters for destinations, dates, airlines, and preferences.",
        },
        {
            id: 3,
            name: "Seat Selection",
            description:
                "Integrate an interactive seat map for users to select their preferred seats. Provide information on seat classes, amenities, and pricing.",
        },
        {
            id: 4,
            name: "Booking Management",
            description:
                "Enable users to view and manage their bookings. Allow modification or cancellation of bookings. Provide a booking history for users.",
        },
        {
            id: 5,
            name: "Payment Integration",
            description:
                "Integrate secure payment gateways for booking transactions. Display transparent pricing, including taxes and fees.",
        },
        {
            id: 6,
            name: "Real-time Updates",
            description:
                "Provide real-time updates on flight status, delays, and cancellations. Send notifications to users regarding their booked flights.",
        },
    ];

    // Example usage
    console.log(flightBookingFeatures);

    return (
        <section className="container mx-auto px-6 py-32 space-y-5">
            <h2 className="text-6xl max-w-5xl font-medium mx-auto text-center">
                Discover the Power of Our Flight{" "}
                <span className="font-bold text-7xl">Booking Platform</span>
            </h2>
            <p className="max-w-6xl mx-auto text-center">
                Explore a range of cutting-edge features designed to enhance
                your travel experience. From seamless booking processes to
                personalized user profiles, our platform is tailored to meet
                your every need. Here are the key features that make our flight
                booking service stand out:
            </p>
            <div className="">
                <div className="grid grid-cols-3 gap-8 mt-16">
                    {flightBookingFeatures.map((feature) => (
                        <div
                            key={feature.id}
                            className="p-14 backdrop:blur-2xl shadow-sm bg-white/30"
                            // style={{
                            //     backgroundImage: `url("${logo}")`,
                            //     backgroundRepeat: "no-repeat",
                            //     backgroundSize: "800px",
                            //     backgroundPosition: "bottom right",
                            // }}
                        >
                            <h1 className="text-3xl font-semibold pb-3">
                                {feature.name}
                            </h1>
                            <p className="text-black/70">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

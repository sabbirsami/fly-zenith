import Features from "./Featured/Features";
import Hero from "./hero/Hero";
import Offer from "./offer/Offer";
import PopularDestinations from "./popularDestinations/PopularDestinations";

const Home = () => {
    return (
        <section className="">
            <Hero />
            <Features />
            <PopularDestinations />
            <Offer />
        </section>
    );
};

export default Home;

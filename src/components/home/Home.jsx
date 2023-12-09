import Features from "./Featured/Features";
import Hero from "./hero/Hero";
import PopularDestinations from "./popularDestinations/PopularDestinations";

const Home = () => {
    return (
        <section className="">
            <Hero />
            <Features />
            <PopularDestinations />
        </section>
    );
};

export default Home;

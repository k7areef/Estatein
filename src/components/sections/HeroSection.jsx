import Statistics from "@components/common/Statistics";
import Button from "@components/UI/Button";
import hero from "@assets/images/home-hero.png";
import abstract from "@assets/images/home-hero-abstract.png";

function HeroSection() {
    return (
        <section className="hero-section max-lg:py-5">
            <div className="container grid lg:grid-cols-2 gap-5 md:gap-10 items-center">
                <div className="content-wrapper max-lg:order-1">
                    <div className="text-wrapper">
                        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl 2xl:text-4xl mb-2">Discover Your Dream Property with Estatein</h1>
                        <p>Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
                    </div>
                    <div className="actions-wrapper flex sm:items-center gap-3 mt-4 max-sm:flex-col">
                        <Button
                            variant="secondary"
                        >Learn More</Button>
                        <Button
                            to={'/properties'}
                            variant="primary"
                            className="text-center"
                        >Browse Properties</Button>
                    </div>
                    <Statistics className="mt-5" />
                </div>
                <div className="hero-wrapper bg-grey-10 relative max-lg:rounded-lg max-lg:overflow-hidden">
                    <div className="spot-light-overlay absolute right-0 top-0 w-full h-full z-2 bg-linear-to-bl from-[#2A213F] from-6% via-[#191919]/0 via-49% to-transparent"></div>
                    <img
                        src={abstract}
                        alt="Abstract"
                    />
                    <img
                        src={hero}
                        alt="Hero"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-1"
                    />
                </div>
            </div>
        </section>
    )
}

export default HeroSection;
import Statistics from "@components/common/Statistics";
import SectionHeader from "./common/SectionHeader";
import hero from "@assets/images/about-hero.png";
import abstract from "@assets/images/about-abstract.png";


function OurJourney() {
    return (
        <section className="our-journey-section py-5 md:py-10" id="ourJourney">
            <div className="container">
                <div className="content-grid grid lg:grid-cols-2 gap-5 items-center">
                    <div className="content-wrapper max-lg:order-1">
                        <SectionHeader
                            className="mb-5"
                            title="Our Journey"
                            description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients."
                        />
                        <Statistics />
                    </div>
                    <div className="hero-wrapper bg-grey-08 border border-grey-15 rounded-md overflow-hidden relative">
                        <img
                            src={abstract}
                            alt="Abstract"
                            className="w-full h-full object-cover opacity-50"
                        />
                        <img
                            src={hero}
                            alt="Hero"
                            className="absolute z-1 right-0 bottom-0"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurJourney;
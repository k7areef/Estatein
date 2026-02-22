import Faqs from "@components/sections/Faqs";
import Features from "@components/sections/Features";
import HeroSection from "@components/sections/HeroSection";
import Properties from "@components/sections/Properties";
import Testimonials from "@components/sections/Testimonials";
import useChangeTitle from "@hooks/useChangeTitle";

function HomePage() {
    useChangeTitle("Home");
    return (
        <div className="home-page">
            <main>
                <HeroSection />
                <Features />
                <Properties type="featured" />
                <Testimonials />
                <Faqs />
            </main>
        </div>
    )
}

export default HomePage;
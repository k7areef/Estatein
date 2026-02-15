import Faqs from "@components/sections/Faqs";
import HeroSection from "@components/sections/HeroSection";
import Properties from "@components/sections/Properties";
import Testimonials from "@components/sections/Testimonials";

function HomePage() {
    return (
        <div className="home-page">
            <main>
                <HeroSection />
                <Properties type="featured" />
                <Testimonials />
                <Faqs />
            </main>
        </div>
    )
}

export default HomePage;
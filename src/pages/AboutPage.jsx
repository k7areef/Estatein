import HowItWorks from "@components/sections/HowItWorks";
import OurAchievements from "@components/sections/OurAchievements";
import OurClients from "@components/sections/OurClients";
import OurJourney from "@components/sections/OurJourney";
import OurTeam from "@components/sections/OurTeam";
import OurValues from "@components/sections/OurValues";

function AboutPage() {
    return (
        <div className="about-page">
            <main>
                <OurJourney />
                <OurValues />
                <OurAchievements />
                <HowItWorks />
                <OurTeam />
                <OurClients />
            </main>
        </div>
    )
}

export default AboutPage;
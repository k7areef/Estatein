import SectionHeader from "./common/SectionHeader";
import data from "@data/ourAchievements.json";

function OurAchievements() {

    const { title, description } = data;

    return (
        <section className="our-achievments py-5 md:py-10" id="ourAchievments">
            <div className="container">
                <SectionHeader
                    title={title}
                    description={description}
                />
            </div>
        </section>
    )
}

export default OurAchievements;
import SectionHeader from "./common/SectionHeader";
import data from "@data/ourAchievements.json";

function OurAchievements() {

    const { title, description, achievements } = data;

    return (
        <section className="our-achievments py-5 md:py-10" id="ourAchievments">
            <div className="container">
                <SectionHeader
                    title={title}
                    description={description}
                />
                <div className="cards-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {
                        achievements.map((achievement, index) => (<div className="achievement-card p-3 md:p-5 rounded-lg bg-grey-08 border border-grey-15 outline-8 outline-[#191919]" key={achievement.id || index}>
                            <h3 className="font-semibold text-lg md:text-xl lg:text-2xl mb-2">{achievement.title}</h3>
                            <p>{achievement.description}</p>
                        </div>))
                    }
                </div>
            </div>
        </section>
    )
}

export default OurAchievements;
import SectionHeader from "./common/SectionHeader";
import data from "@data/ourTeam.json";

function OurTeam() {

    const { title, description } = data;

    return (
        <section className="our-team py-5 md:py-10" id="ourTeam">
            <div className="container">
                <SectionHeader
                    title={title}
                    description={description}
                />
            </div>
        </section>
    )
}

export default OurTeam;
import SectionHeader from "./common/SectionHeader";
import data from "@data/howItWorks.json";

function HowItWorks() {

    const { title, description } = data;

    return (
        <section className="how-it-works py-5 md:py-10" id="howItWorks">
            <div className="container">
                <SectionHeader
                    title={title}
                    description={description}
                />
            </div>
        </section>
    )
}

export default HowItWorks;
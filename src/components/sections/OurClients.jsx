import SectionHeader from "./common/SectionHeader";
import data from "@data/ourClients.json";

function OurClients() {

    const { title, description } = data;

    return (
        <section className="our-clients py-5 md:py-10" id="ourClients">
            <div className="container">
                <SectionHeader
                    title={title}
                    description={description}
                />
            </div>
        </section>
    )
}

export default OurClients;
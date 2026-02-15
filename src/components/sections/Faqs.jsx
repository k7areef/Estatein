import Button from "@components/UI/Button";
import SectionHeader from "./common/SectionHeader";
import data from "@data/faqs.json";

function Faqs() {

    const { title, description } = data;

    return (
        <section className="faqs-section py-5 md:py-10">
            <div className="container">
                <SectionHeader
                    title={title}
                    description={description}
                >
                    <Button
                        to={'/properties'}
                        variant="secondary"
                    >View All FAQ’s</Button>
                </SectionHeader>
            </div>
        </section>
    )
}

export default Faqs;
import Button from "@components/UI/Button";
import SectionHeader from "./common/SectionHeader";
import data from "@data/testimonials.json";

function Testimonials() {

    const { title, description } = data;

    return (
        <section className="testimonials-section py-5 md:py-10">
            <div className="container">
                <SectionHeader
                    title={title}
                    description={description}
                >
                    <Button
                        to={'/properties'}
                        variant="secondary"
                    >View All Testimonials</Button>
                </SectionHeader>
            </div>
        </section>
    )
}

export default Testimonials;
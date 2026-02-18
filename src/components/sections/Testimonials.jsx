import Button from "@components/UI/Button";
import SectionHeader from "./common/SectionHeader";
import data from "@data/testimonials.json";
import SliderCards from "@components/common/SliderCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import avatar from "@assets/images/avatars/avatar-1.png";

function Testimonials() {

    const { title, description, testimonials } = data;

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
                <SliderCards
                    list={testimonials}
                    name="testimonials"
                    CardComponent={(testimonial) => {
                        return (
                            <div className="testimonial-card p-3 md:p-5 h-full flex flex-col gap-5 bg-grey-08 border border-grey-15 rounded-md">
                                <div className="rate-stars flex items-center gap-1.5">
                                    {
                                        Array.from({ length: 5 }).map((_, index) => (<div className="star-container w-10 h-10 rounded-full flex items-center justify-center bg-grey-10 border border-grey-15 text-yellow" key={index}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>))
                                    }
                                </div>
                                <div className="text-wrapper">
                                    <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2">{testimonial.title}</h3>
                                    <p className="text-white!">{testimonial.comment}</p>
                                </div>
                                <div className="author-info mt-auto flex items-center gap-3">
                                    <div className="avatar-container w-12.5 h-12.5 rounded-full overflow-hidden shrink-0">
                                        <img
                                            src={avatar}
                                            alt={"Avatar"}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div className="autho-subinfo w-full">
                                        <h4 className="text">{testimonial.name}</h4>
                                        <p className="text-grey-60">{testimonial.location}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }}
                />
            </div>
        </section>
    )
}

export default Testimonials;
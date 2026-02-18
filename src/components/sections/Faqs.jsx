import React from "react";
import Button from "@components/UI/Button";
import SectionHeader from "./common/SectionHeader";
import data from "@data/faqs.json";
import SliderCards from "@components/common/SliderCards";

function Faqs() {
    const { title, description, faqs } = data;
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
                <SliderCards
                    list={faqs}
                    name="faqs"
                    CardComponent={(faq) => {
                        return (
                            <div className="faq-card p-3 md:p-5 h-full flex flex-col gap-3 bg-grey-08 border border-grey-15 rounded-md">
                                <h3 className="font-semibold text-lg sm:text-xl md:text-2xl">{faq.question}</h3>
                                <p className="line-clamp-3">{faq.answer}</p>
                                <Button
                                    variant="secondary"
                                    className="w-fit mt-auto"
                                >
                                    Read More
                                </Button>
                            </div>
                        )
                    }}
                />
            </div>
        </section>
    )
}

export default Faqs;
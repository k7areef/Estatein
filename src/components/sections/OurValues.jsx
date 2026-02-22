import SectionHeader from "./common/SectionHeader";
import data from "@data/ourValues.json";
import IconContainer from "@components/UI/IconContainer";
import icon1 from "@assets/images/icons/our-values/1.png";
import icon2 from "@assets/images/icons/our-values/2.png";
import icon3 from "@assets/images/icons/our-values/3.png";
import icon4 from "@assets/images/icons/our-values/4.png";

const iconsMaper = {
    1: icon1,
    2: icon2,
    3: icon3,
    4: icon4
}

function OurValues() {
    const { title, description, values } = data;
    return (
        <section className="our-values py-5 md:py-10" id="ourValues">
            <div className="container">
                <div className="container">
                    <div className="content-grid grid lg:grid-cols-3 gap-5 lg:gap-10">
                        <div className="main-content-wrapper">
                            <SectionHeader
                                title={title}
                                description={description}
                            />
                        </div>
                        <div className="cards-wrapper p-3 rounded-lg bg-grey-10 grid md:grid-cols-2 gap-3 lg:col-span-2">
                            {
                                values.map((value, index) => (<div className="value-card p-5 rounded-md border border-grey-15 bg-grey-08" key={value.id || index}>
                                    <div className="header flex items-center gap-2 mb-3">
                                        <IconContainer
                                            src={iconsMaper[value.id]}
                                            alt={value.title}
                                        />
                                        <h3 className="font-semibold text-lg sm:text-xl">{value.title}</h3>
                                    </div>
                                    <p>{value.description}</p>
                                </div>))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurValues;
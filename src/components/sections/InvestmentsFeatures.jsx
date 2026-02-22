import SectionHeader from "./common/SectionHeader";
import data from "@data/investmentsFeatures.json";
import IconContainer from "@components/UI/IconContainer";
import abstractImage from "@assets/images/footer-card/abstract-2.png";
import icon1 from "@assets/images/icons/management-features/1.png";
import icon2 from "@assets/images/icons/management-features/2.png";
import icon3 from "@assets/images/icons/management-features/3.png";
import icon4 from "@assets/images/icons/management-features/4.png";

const iconsMaper = {
    1: icon1,
    2: icon2,
    3: icon3,
    4: icon4
}

function InvestmentsFeatures() {
    const { title, description, features, footerCard } = data;
    return (
        <section className="investments-features py-5 md:py-10" id="investmentsFeatures">
            <div className="container">
                <div className="content-grid grid lg:grid-cols-3 gap-5 lg:gap-10">
                    <div className="main-content-wrapper">
                        <SectionHeader
                            title={title}
                            description={description}
                        />
                        <div className="footer-card bg-grey-10 border border-grey-15 rounded-md overflow-hidden relative">
                            <img
                                src={abstractImage}
                                alt="Background"
                                className="absolute left-0 top-0 w-full h-full z-0 object-cover"
                            />
                            <div className="content-warpper relative z-1 p-10">
                                <h2 className="font-semibold text-xl md:text-2xl mb-2">{footerCard.title}</h2>
                                <p>{footerCard.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="cards-wrapper p-3 rounded-lg bg-grey-10 grid md:grid-cols-2 gap-3 lg:col-span-2">
                        {
                            features.map((feature, index) => (<div className="feature-card p-5 rounded-md border border-grey-15 bg-grey-08" key={feature.id || index}>
                                <div className="header flex items-center gap-2 mb-3">
                                    <IconContainer
                                        src={iconsMaper[feature.id]}
                                        alt={feature.title}
                                    />
                                    <h3 className="font-semibold text-lg sm:text-xl">{feature.title}</h3>
                                </div>
                                <p>{feature.description}</p>
                            </div>))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InvestmentsFeatures;
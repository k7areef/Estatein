import data from "@data/managementFeatures.json";
import SectionHeader from "./common/SectionHeader";
import IconContainer from "@components/UI/IconContainer";
import abstractImage from "@assets/images/footer-card/abstract-1.png";
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


function ManagementFeatures() {
    const { title, description, features, footerCard } = data;
    return (
        <section className="management-features py-5 md:py-10" id="managementFeatures">
            <div className="container">
                <SectionHeader
                    title={title}
                    description={description}
                />
                <div className="cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        features.map((feature, index) => (<div className="feature-card p-5 rounded-md border border-grey-15" key={feature.id || index}>
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
                    <div className="footer-card bg-grey-10 border border-grey-15 rounded-md overflow-hidden relative md:col-span-2">
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
            </div>
        </section>
    )
}

export default ManagementFeatures;
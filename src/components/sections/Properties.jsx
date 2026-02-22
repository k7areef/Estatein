import Button from "@components/UI/Button";
import SectionHeader from "./common/SectionHeader";
import data from "@data/properties.json";
import SliderCards from "@components/common/SliderCards";
import property1 from "@assets/images/properties/property-1.png";
import property2 from "@assets/images/properties/property-2.png";
import property3 from "@assets/images/properties/property-3.png";
import bedIcon from "@assets/images/icons/property/bed.png";
import bathIcon from "@assets/images/icons/property/bath.png";
import buildIcon from "@assets/images/icons/property/build.png";
import { Link } from "react-router-dom";

/**
 *  @typedef {Object} PropertiesProps
 * @property {'featured' | 'discover'} [type]
*/
/**
 * @param {PropertiesProps>} props
 */

const propertyImagesMaper = {
    1: property1,
    2: property2,
    3: property3
}

function Properties({ type = "featured" }) {

    const { properties } = data;
    const { title, description } = data[type];

    return (
        <section className="properties-section py-5 md:py-10">
            <div className="container">
                <SectionHeader
                    title={title}
                    description={description}
                >
                    {
                        type === "featured" &&
                        <Button
                            to={'/properties'}
                            variant="secondary"
                        >View All Properties</Button>
                    }
                </SectionHeader>
                <SliderCards
                    list={properties}
                    name="properties"
                    CardComponent={(property) => {
                        return (
                            <div className="testimonial-card p-3 md:p-5 h-full flex flex-col gap-5 bg-grey-08 border border-grey-15 rounded-md">
                                <Link to={`/properties/${property.id}`} className="property-image-container block aspect-video rounded-md overflow-hidden group">
                                    <img
                                        src={propertyImagesMaper[property.id]}
                                        alt="Property Image"
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-110"
                                    />
                                </Link>
                                <div className="text-wrapper">
                                    <h3 className="font-semibold text-lg md:text-xl mb-2">{property.title}</h3>
                                    <p>{property.description}</p>
                                </div>
                                <div className="info flex items-center flex-wrap gap-3">
                                    <div className="bedroom flex items-center gap-2 py-2 px-4 rounded-full bg-grey-10 border border-grey-15 w-full sm:w-fit sm:flex-1">
                                        <img
                                            src={bedIcon}
                                            alt="Bed Icon"
                                        />
                                        <span>{property.bedroom}-Bedroom</span>
                                    </div>
                                    <div className="bathroom flex items-center gap-2 py-2 px-4 rounded-full bg-grey-10 border border-grey-15 w-full sm:w-fit sm:flex-1">
                                        <img
                                            src={bathIcon}
                                            alt="Bath Icon"
                                        />
                                        <span>{property.bathroom}-Bathroom</span>
                                    </div>
                                    <div className="type flex items-center gap-2 py-2 px-4 rounded-full bg-grey-10 border border-grey-15 w-full">
                                        <img
                                            src={buildIcon}
                                            alt="Build Icon"
                                        />
                                        <span>{property.type}</span>
                                    </div>
                                </div>
                                <div className="price">
                                    <span className="text-grey-60">Price:</span>
                                    <div className="font-semibold text-lg md:text-xl lg:text-3xl mt-1">{property.price}</div>
                                </div>
                                <Button
                                    to={`/properties/${property.id}`}
                                    variant="primary"
                                    className="w-full text-center"
                                >
                                    View Property Details
                                </Button>
                            </div>
                        )
                    }}
                />
            </div>
        </section>
    )
}

export default Properties;
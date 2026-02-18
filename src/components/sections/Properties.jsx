import Button from "@components/UI/Button";
import SectionHeader from "./common/SectionHeader";
import data from "@data/properties.json";
import SliderCards from "@components/common/SliderCards";
import image from "@assets/images/properties/property-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBath, faBed, faBuilding } from "@fortawesome/free-solid-svg-icons";

/**
 *  @typedef {Object} PropertiesProps
 * @property {'featured' | 'discover'} [type]
*/
/**
 * @param {PropertiesProps>} props
 */

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
                                <div className="property-image-container aspect-video rounded-md overflow-hidden">
                                    <img
                                        src={image}
                                        alt="Property Image"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="text-wrapper">
                                    <h3 className="font-semibold text-lg md:text-xl mb-2">{property.title}</h3>
                                    <p>{property.description}</p>
                                </div>
                                <div className="info flex items-center flex-wrap gap-3">
                                    <div className="bedroom flex items-center gap-2 py-2 px-4 rounded-full bg-grey-10 border border-grey-15 w-full sm:w-fit sm:flex-1">
                                        <FontAwesomeIcon icon={faBed} />
                                        <span>{property.bedroom}-Bedroom</span>
                                    </div>
                                    <div className="bathroom flex items-center gap-2 py-2 px-4 rounded-full bg-grey-10 border border-grey-15 w-full sm:w-fit sm:flex-1">
                                        <FontAwesomeIcon icon={faBath} />
                                        <span>{property.bathroom}-Bathroom</span>
                                    </div>
                                    <div className="type flex items-center gap-2 py-2 px-4 rounded-full bg-grey-10 border border-grey-15 w-full">
                                        <FontAwesomeIcon icon={faBuilding} />
                                        <span>{property.type}</span>
                                    </div>
                                </div>
                                <div className="price">
                                    <span className="text-grey-60">Price:</span>
                                    <div className="font-semibold text-lg md:text-xl lg:text-3xl mt-1">{property.price}</div>
                                </div>
                                <Button
                                    variant="primary"
                                    className="w-full"
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
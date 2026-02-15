import Button from "@components/UI/Button";
import SectionHeader from "./common/SectionHeader";
import data from "@data/properties.json";

/**
 *  @typedef {Object} PropertiesProps
 * @property {'featured' | 'discover'} [type]
*/
/**
 * @param {PropertiesProps>} props
 */

function Properties({ type = "featured" }) {

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
            </div>
        </section>
    )
}

export default Properties;
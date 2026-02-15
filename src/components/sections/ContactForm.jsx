import SectionHeader from "./common/SectionHeader";
import data from "@data/contactForms.json";


/**
 *  @typedef {Object} PropertiesProps
 * @property {'properties' | 'property' | 'contact'} [type]
*/
/**
 * @param {PropertiesProps>} props
 */

function ContactForm({ type = "properties" }) {

    const { title, description } = data[type];

    return (
        <section className="contact-form py-5 md:py-10">
            <div className="container">
                <SectionHeader
                    title={title}
                    description={description}
                />
            </div>
        </section>
    )
}

export default ContactForm;
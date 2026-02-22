import data from "@data/headerSections.json";

/**
 * @typedef {Object} HeaderSectionProps
 * @prop {'services' | 'properties' | 'contact'} page
 */

/**
 * @param {HeaderSectionProps} props
 */

function HeaderSection({ page }) {

    const { title, description } = data[page];

    return (
        <section className="header-section py-7 md:py-10 lg:py-15 bg-linear-to-r from-grey-15 via-grey-15/0 via-53% to-transparent" id="headerSection">
            <div className="container">
                <h1 className="font-bold text-xl md:text-2xl lg:text-3xl mb-3">{title}</h1>
                <p className="md:max-w-3/4">{description}</p>
            </div>
        </section>
    )
}

export default HeaderSection;
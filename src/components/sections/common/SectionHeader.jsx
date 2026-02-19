import stars from "@assets/images/stars.png";

/**
 * @typedef {Object} SectionHeaderProps
 * @property {string} [className]
 * @property {string} [title]
 * @property {string} [description]
 */

/**
 * @param {SectionHeaderProps & React.HTMLAttributes<HTMLElement>} props
 */

function SectionHeader({ title = "", description = "", children, ...props }) {
    return (
        <div className={`section-header mb-5 md:mb-10 ${props.className}`} {...props}>
            <img
                src={stars}
                alt="Stars"
                className="mb-3 -ml-3.25"
            />
            <div className="content-wrapper flex md:items-center justify-between gap-5 max-md:flex-col">
                <div className="text-wrapper w-full">
                    <h2 className="font-semibold text-xl md:text-2xl xl:text-3xl">{title}</h2>
                    {description && <p className="mt-3">{description}</p>}
                </div>
                <div className="children-wrapper shrink-0">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default SectionHeader;
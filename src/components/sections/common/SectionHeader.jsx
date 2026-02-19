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
        <div className={`section-header mb-5 md:mb-10 flex md:items-center justify-between gap-5 max-md:flex-col ${props.className}`} {...props}>
            <div className="text-wrapper w-full">
                <h2 className="font-semibold text-xl md:text-2xl xl:text-3xl">{title}</h2>
                {description && <p className="mt-3">{description}</p>}
            </div>
            <div className="children-wrapper shrink-0">
                {children}
            </div>
        </div>
    )
}

export default SectionHeader;
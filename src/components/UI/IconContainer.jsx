import bgIcon from "@assets/images/icons/icon-container-bg.png";

/**
 * @typedef {Object} IconContainerProps
 * @prop {string} className
 * @prop {string} src
 * @prop {string} alt
 */

/**
 * @param {IconContainerProps} props
 */

function IconContainer({ className, src, alt }) {
    return (
        <div className={`icon-container mx-auto w-14 h-14 text-lg relative ${className}`}>
            <img
                src={bgIcon}
                alt="Background"
                className="w-full h-full object-cover"
            />
            <img
                src={src}
                alt={alt}
                width={25}
                className="absolute left-1/2 top-1/2 -translate-1/2 z-1"
            />
        </div>
    )
}

export default IconContainer;
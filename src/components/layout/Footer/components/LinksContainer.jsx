import { Link } from "react-router-dom";

/**
 * @typedef {Object} LinksContainerProps
 * @prop {string} title
 * @prop {Array} links
 */

/**
 * @param {LinksContainerProps} props
 */

function LinksContainer({ title, links }) {
    return (
        <div className="links-container font-medium">
            <h3 className="text-grey-60 text-lg mb-3">{title}</h3>
            <ul>
                {
                    links.map((link, index) => (<li key={index}>
                        <Link to={link.to} className="block w-fit py-1 transition duration-300 ease-in-out hover:text-purple-60">{link.label}</Link>
                    </li>))
                }
            </ul>
        </div>
    )
}

export default LinksContainer;
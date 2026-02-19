import { NavLink } from "react-router-dom";

/**
 * @typedef {Object} ContactLinkProps
 * @prop {string} className
 * @prop {function} onclick
 */

/**
 * @param {ContactLinkProps} props
 */

function ContactLink({ className, onclick }) {
    return (
        <NavLink
            to={'/contact'}
            onClick={onclick}
            className={({ isActive }) => `contact-link font-medium sm:text-lg block py-2 px-4 rounded-md border transition duration-300 ease-in-out ${isActive ? "sm:bg-purple-60 sm:border-purple-60 max-sm:bg-grey-08 max-sm:border-grey-15" : "sm:bg-grey-08 sm:border-grey-15 max-sm:border-transparent"} ${className}`}
        >
            Contact Us
        </NavLink>
    )
}

export default ContactLink;
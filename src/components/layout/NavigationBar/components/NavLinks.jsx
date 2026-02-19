import React from 'react'
import { NavLink } from 'react-router-dom'
import ContactLink from './ContactLink';

const links = [
    { to: '/', label: "Home" },
    { to: '/about', label: "About Us" },
    { to: '/properties', label: "Properties" },
    { to: '/services', label: "Services" },
];

/**
 * @typedef NavLinksProps
 * @prop {boolean} isExpand
 * @prop {function} setIsExpand
 */

/**
 * @param {NavLinksProps} props
 */

function NavLinks({ isExpand, setIsExpand }) {
    return (
        <div className="nav-links max-lg:w-full max-lg:order-1">
            <div className={`links-wrapper grid transition-all ${isExpand ? "max-lg:grid-rows-[1fr] max-lg:opacity-100 mt-3" : "max-lg:grid-rows-[0fr] max-lg:opacity-0"}`}>
                <ul className="flex lg:items-center gap-2 max-lg:flex-col overflow-hidden">
                    {
                        links.map((link, index) => (<li key={link.to || index}>
                            <NavLink
                                to={link.to}
                                onClick={() => setIsExpand(false)}
                                className={({ isActive }) => `font-medium sm:text-lg block py-2 px-4 rounded-md border transition duration-300 ease-in-out ${isActive ? "bg-grey-08 border-grey-15" : "border-transparent bg-transparent"}`}
                            >
                                {link.label}
                            </NavLink>
                        </li>))
                    }
                    <li className='sm:hidden'>
                        <ContactLink
                            onclick={() => setIsExpand(false)}
                        />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavLinks
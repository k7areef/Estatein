import { Link } from "react-router-dom";
import data from "@data/socialLinks.json";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iconsmap = {
    facebook: faFacebook,
    twitter: faTwitter,
    instagram: faInstagram,
    linkedin: faLinkedin
}

function Copyright() {
    return (
        <div className="copyright bg-grey-10 py-4">
            <div className="container flex items-center justify-between">
                <div className="copyright-text font-medium flex items-center gap-2">
                    <p className="text-white!">@{new Date().getFullYear()} Estatein, All Rights Reserved.</p>
                    <Link to={'/'} className="transition ease-in-out duration-300 sm:hover:text-purple-60">Terms & Conditions</Link>
                </div>
                <div className="social-links flex items-center justify-center gap-2">
                    {
                        data.map((link, index) => (<a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full flex items-center justify-center bg-grey-08 transition ease-in-out duration-300 sm:hover:bg-purple-60 text-lg"
                        >
                            <FontAwesomeIcon icon={iconsmap[link.icon]} />
                        </a>))
                    }
                </div>
            </div>
        </div>
    )
}

export default Copyright;
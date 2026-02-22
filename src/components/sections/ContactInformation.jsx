import data from "@data/contactInfo.json";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailIcon from "@assets/images/icons/email.png";
import phoneIcon from "@assets/images/icons/phone.png";
import locationIcon from "@assets/images/icons/location.png";
import logoIcon from "@assets/images/icons/logo.png";
import IconContainer from "@components/UI/IconContainer";

const iconsMaper = {
    email: emailIcon,
    phone: phoneIcon,
    location: locationIcon,
    logo: logoIcon
}

function ContactInformation() {
    return (
        <section className="contact-information bg-grey-08 p-5 border-y border-y-grey-15 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5" id="contactInformation">
            {
                data.map((card, index) => (<div className="info-card w-full bg-grey-10 px-5 py-10 rounded-lg border border-grey-15 relative group" key={`card-${card.id || index}`}>
                    <FontAwesomeIcon icon={faArrowUp} className="text-grey-30 rotate-45 absolute top-3 right-3 z-1 transition duration-300 ease-in-out group-has-[a:hover]:text-purple-60" />
                    <IconContainer src={iconsMaper[card.icon]} alt={card.name} className="mb-3 mx-auto" />
                    <ul className="card-links flex items-center justify-center gap-2">
                        {
                            card.links.map((link, index) => (<li key={link.id || index}>
                                <a
                                    href={link.value}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline font-medium transition ease-in-out duration-300 hover:text-purple-60"
                                >{link.label}</a>
                            </li>))
                        }
                    </ul>
                </div>))
            }
        </section>
    )
}

export default ContactInformation;
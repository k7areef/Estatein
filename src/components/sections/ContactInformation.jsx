import data from "@data/contactInfo.json";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconContainer from "@components/UI/IconContainer";
import icon1 from "@assets/images/icons/contact-information/1.png";
import icon2 from "@assets/images/icons/contact-information/2.png";
import icon3 from "@assets/images/icons/contact-information/3.png";
import icon4 from "@assets/images/icons/contact-information/4.png";

const iconsMaper = {
    1: icon1,
    2: icon2,
    3: icon3,
    4: icon4
}

function ContactInformation() {
    return (
        <section className="contact-information bg-grey-08 p-5 border-y border-y-grey-15 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5" id="contactInformation">
            {
                data.map((card, index) => (<div className="info-card w-full bg-grey-10 px-5 py-10 rounded-lg border border-grey-15 relative group" key={`card-${card.id || index}`}>
                    <FontAwesomeIcon icon={faArrowUp} className="text-grey-30 rotate-45 absolute top-3 right-3 z-1 transition duration-300 ease-in-out group-has-[a:hover]:text-purple-60" />
                    <IconContainer src={iconsMaper[card.id]} alt={card.name} className="mb-3 mx-auto" />
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
import data from "@data/features.json";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import homeIcon from "@assets/images/icons/home.png";
import monyIcon from "@assets/images/icons/mony.png";
import buildIcon from "@assets/images/icons/build.png";
import logoIcon from "@assets/images/icons/logo.png";
import IconContainer from "@components/UI/IconContainer";

const iconsMaper = {
    home: homeIcon,
    mony: monyIcon,
    build: buildIcon,
    logo: logoIcon
}

function Features() {
    return (
        <section className="Features-section bg-grey-08 p-5 border-y border-y-grey-15 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5" id="Features">
            {
                data.map((card, index) => (<div className="feature-card text-center w-full bg-grey-10 px-5 py-10 rounded-lg border border-grey-15 relative group" key={`card-${card.id || index}`}>
                    <FontAwesomeIcon icon={faArrowUp} className="text-grey-30 rotate-45 absolute top-3 right-3 z-1 transition duration-300 ease-in-out group-has-[a:hover]:text-purple-60" />
                    <IconContainer src={iconsMaper[card.icon]} alt={card.name} className="mb-3" />
                    <h3>{card.name}</h3>
                </div>))
            }
        </section>
    )
}

export default Features;
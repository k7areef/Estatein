import data from "@data/features.json";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconContainer from "@components/UI/IconContainer";
import icon1 from "@assets/images/icons/features/1.png";
import icon2 from "@assets/images/icons/features/2.png";
import icon3 from "@assets/images/icons/features/3.png";
import icon4 from "@assets/images/icons/features/4.png";

const iconsMaper = {
    1: icon1,
    2: icon2,
    3: icon3,
    4: icon4
}

function Features() {
    return (
        <section className="Features-section bg-grey-08 p-5 border-y border-y-grey-15 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 outline-8 outline-[#191919] mt-2" id="Features">
            {
                data.map((card, index) => (<div className="feature-card text-center w-full bg-grey-10 px-5 py-10 rounded-lg border border-grey-15 relative group" key={`card-${card.id || index}`}>
                    <FontAwesomeIcon icon={faArrowUp} className="text-grey-30 rotate-45 absolute top-3 right-3 z-1 transition duration-300 ease-in-out group-has-[a:hover]:text-purple-60" />
                    <IconContainer src={iconsMaper[card.id]} alt={card.name} className="mb-3 mx-auto" />
                    <h3>{card.name}</h3>
                </div>))
            }
        </section>
    )
}

export default Features;
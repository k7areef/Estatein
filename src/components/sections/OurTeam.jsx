import SectionHeader from "./common/SectionHeader";
import data from "@data/ourTeam.json";
import teamImage from "@assets/images/team/team-1.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Button from "@components/UI/Button";

function OurTeam() {

    const { title, description, team } = data;

    return (
        <section className="our-team py-5 md:py-10" id="ourTeam">
            <div className="container">
                <SectionHeader
                    title={title}
                    description={description}
                />
                <div className="cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
                    {
                        Array.from(team).map((teamMemeber, index) => (<div className="team-member-card md:p-5 rounded-lg border border-grey-15 bg-grey-08" key={teamMemeber.id || index}>
                            <div className="team-image-container aspect-[1/0.8] relative">
                                <img
                                    src={teamImage}
                                    alt="Team Member"
                                    className="w-full h-full object-cover rounded-md"
                                />
                                <Link to={'/about'} className="flex items-center justify-center w-12 h-12 bg-purple-60 mx-auto -mt-6 relative z-1 rounded-full text-xl transition duration-300 ease-in-out sm:hover:bg-purple-70">
                                    <FontAwesomeIcon icon={faTwitter} />
                                    <span className="sr-only">Twitter</span>
                                </Link>
                            </div>
                            <div className="text-info text-center my-3">
                                <h3 className="font-semibold text-lg md:text-xl mb-1">{teamMemeber.name}</h3>
                                <p className="text-[15px]!">{teamMemeber.position}</p>
                            </div>
                            <form className="relative mt-auto" onSubmit={e => e.preventDefault()}>
                                <input
                                    type="text"
                                    name="teamMember"
                                    defaultValue="Say Hello 👋"
                                    placeholder="Say Hello 👋"
                                    className="w-full rounded-full py-3 px-5 border border-grey-15 bg-grey-10"
                                />
                                <Button
                                    type="submit"
                                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full! p-0! w-10 h-10 flex items-center justify-center"
                                >
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                    <span className="sr-only">Send Message</span>
                                </Button>
                            </form>
                        </div>))
                    }
                </div>
            </div>
        </section>
    )
}

export default OurTeam;
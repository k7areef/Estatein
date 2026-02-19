import React from "react";
import SectionHeader from "./common/SectionHeader";
import data from "@data/ourOffices.json";
import Button from "@components/UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const iconsmap = {
    email: faEnvelope,
    location: faLocationDot,
    phone: faPhone
}

function OurOffices() {
    const { title, description, tabs, offices } = data;
    const [activeTab, setActiveTab] = React.useState("All");
    return (
        <section className="our-offices py-5 md:py-10" id="ourOffices">
            <div className="container">
                <SectionHeader
                    title={title}
                    description={description}
                />
                {/* Tabs */}
                <div className="tabs md:w-fit flex items-center gap-3 bg-grey-10 rounded-md p-2 mb-5 md:mb-10">
                    {
                        tabs.map((tab, index) => (
                            <Button
                                key={index}
                                variant={activeTab === tab ? "dark" : "secondary"}
                                onClick={() => setActiveTab(tab)}
                                className="w-full md:min-w-31.25"
                            >{tab}</Button>
                        ))
                    }
                </div>
                {/* Offices */}
                <div className="cards-grid grid lg:grid-cols-2 gap-5">
                    {
                        offices.map((office, index) => (
                            <div className="office-card flex flex-col gap-3 p-3 md:p-5 rounded-lg bg-grey-08 border border-grey-15" key={`office-${office.id || index}`}>
                                <div className="office-type">{office.type}</div>
                                <h3 className="font-semibold text-lg md:text-xl lg:text-2xl">{office.title}</h3>
                                <p>{office.description}</p>
                                <div className="contact-info flex sm:items-center gap-2 mt-auto max-sm:flex-col">
                                    {
                                        office.contactInfo.map((contact, index) => (<Link to={'/contact'} className="contact-info-item py-2 px-4 rounded-full bg-grey-10 border border-grey-15 flex items-center justify-center gap-2 sm:hover:bg-grey-15 transition duration-300 ease-in-out" key={`contact-${contact.id || index}`}>
                                            <FontAwesomeIcon icon={iconsmap[contact.type]} />
                                            <span>{contact.value}</span>
                                        </Link>))
                                    }
                                </div>
                                <Button
                                    to={'/contact'}
                                    variant="primary"
                                    className="w-full text-center"
                                >Get Direction</Button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default OurOffices;
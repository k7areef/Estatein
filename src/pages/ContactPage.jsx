import ContactForm from "@components/sections/ContactForm";
import ContactInformation from "@components/sections/ContactInformation";
import Gallery from "@components/sections/Gallery";
import HeaderSection from "@components/sections/HeaderSection";
import OurOffices from "@components/sections/OurOffices";

function ContactPage() {
    return (
        <div className="contact-page">
            <main>
                <HeaderSection page="contact" />
                <ContactInformation />
                <ContactForm page="contact" />
                <OurOffices />
                <Gallery />
            </main>
        </div>
    )
}

export default ContactPage;
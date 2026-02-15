import ContactForm from "@components/sections/ContactForm";
import HeaderSection from "@components/sections/HeaderSection";
import Properties from "@components/sections/Properties";
import SearchAndFilter from "@components/sections/SearchAndFilter";

function PropertiesPage() {
    return (
        <div className="properties-page">
            <main>
                <HeaderSection />
                <SearchAndFilter />
                <Properties type="discover" />
                <ContactForm type="properties" />
            </main>
        </div>
    )
}

export default PropertiesPage;
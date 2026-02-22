import ContactForm from "@components/sections/ContactForm";
import HeaderSection from "@components/sections/HeaderSection";
import Properties from "@components/sections/Properties";
import SearchAndFilter from "@components/sections/SearchAndFilter";
import useChangeTitle from "@hooks/useChangeTitle";

function PropertiesPage() {
    useChangeTitle("Properties");
    return (
        <div className="properties-page">
            <main>
                <HeaderSection page="properties" />
                <SearchAndFilter />
                <Properties type="discover" />
                <ContactForm page="properties" />
            </main>
        </div>
    )
}

export default PropertiesPage;
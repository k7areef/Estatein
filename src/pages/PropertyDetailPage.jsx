import ContactForm from "@components/sections/ContactForm";
import Faqs from "@components/sections/Faqs";
import Images from "@components/sections/Images";
import PricingDetails from "@components/sections/PricingDetails";
import PropertyDetails from "@components/sections/PropertyDetails";
import useChangeTitle from "@hooks/useChangeTitle";

function PropertyDetailPage() {
    useChangeTitle("Property Details");
    return (
        <div className="property-detail-page">
            <main>
                <Images />
                <PropertyDetails />
                <ContactForm page="property" initialPropertyName={"Seaside Serenity Villa"} />
                <PricingDetails />
                <Faqs />
            </main>
        </div>
    )
}

export default PropertyDetailPage;
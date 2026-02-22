import Features from "@components/sections/Features";
import HeaderSection from "@components/sections/HeaderSection";
import InvestmentsFeatures from "@components/sections/InvestmentsFeatures";
import ManagementFeatures from "@components/sections/ManagementFeatures";
import Values from "@components/sections/Values";
import useChangeTitle from "@hooks/useChangeTitle";

function ServicesPage() {
    useChangeTitle("Services");
    return (
        <div className="services-page">
            <main>
                <HeaderSection page="properties" />
                <Features />
                <Values />
                <ManagementFeatures />
                <InvestmentsFeatures />
            </main>
        </div>
    )
}

export default ServicesPage;
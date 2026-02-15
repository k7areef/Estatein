import HeaderSection from "@components/sections/HeaderSection";
import InvestmentsFeatures from "@components/sections/InvestmentsFeatures";
import ManagementFeatures from "@components/sections/ManagementFeatures";
import Values from "@components/sections/Values";

function ServicesPage() {
    return (
        <div className="services-page">
            <main>
                <HeaderSection />
                <Values />
                <ManagementFeatures />
                <InvestmentsFeatures />
            </main>
        </div>
    )
}

export default ServicesPage;
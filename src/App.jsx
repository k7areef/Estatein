import { Route, Routes } from "react-router-dom";

// Pages:
import AboutPage from "@pages/AboutPage";
import ContactPage from "@pages/ContactPage";
import HomePage from "@pages/HomePage";
import PropertiesPage from "@pages/PropertiesPage";
import PropertyDetailPage from "@pages/PropertyDetailPage";
import ServicesPage from "@pages/ServicesPage";
// Common Components:
import TopBar from "@components/layout/TopBar";
import Navigation from "@components/layout/NavigationBar";
import Footer from "@components/layout/Footer";
import CTA from "@components/common/CTA";

function App() {
  return (
    <div className="App min-h-screen bg-grey-08 text-white">
      {/* Top Bar */}
      <TopBar />
      {/* Navigation Bar */}
      <Navigation />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="properties" element={<PropertiesPage />} />
        <Route path="properties/:id" element={<PropertyDetailPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
      {/* CTA */}
      <CTA />
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App;
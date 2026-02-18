import AppLogo from "@components/common/AppLogo";
import ContactLink from "./components/ContactLink";
import NavLinks from "./components/NavLinks";
import MenuToggler from "./components/MenuToggler";
import React from "react";

function Navigation() {

    const [isExpand, setIsExpand] = React.useState(false);

    return (
        <nav className="py-4 border-b border-b-grey-15">
            <div className="container flex items-center justify-between flex-wrap">
                <AppLogo />
                <NavLinks isExpand={isExpand} />
                <div className="nav-actions flex items-center gap-3">
                    <ContactLink className="max-sm:hidden" />
                    <MenuToggler isExpand={isExpand} setIsExpand={setIsExpand} />
                </div>
            </div>
        </nav>
    )
}

export default Navigation;
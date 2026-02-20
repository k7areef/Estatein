import Copyright from "./components/Copyright";
import FooterAbout from "./components/FooterAbout";
import LinksContainer from "./components/LinksContainer";
import linksData from "@data/footerLinks.json";

function Footer() {
    return (
        <footer>
            <div className="content-wrapper py-5 md:py-10">
                <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-5">
                    <FooterAbout />
                    {
                        linksData.map((links, index) => (<LinksContainer key={index} title={links.title} links={links.links} />))
                    }
                </div>
            </div>
            <Copyright />
        </footer>
    )
}

export default Footer;
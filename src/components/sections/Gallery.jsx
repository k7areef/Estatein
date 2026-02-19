import bgImage from "@assets/images/gallery/gallery-bg.png";
import gallery1 from "@assets/images/gallery/gallery-1.png";
import gallery2 from "@assets/images/gallery/gallery-2.png";
import gallery3 from "@assets/images/gallery/gallery-3.png";
import gallery4 from "@assets/images/gallery/gallery-4.png";
import gallery5 from "@assets/images/gallery/gallery-5.png";
import gallery6 from "@assets/images/gallery/gallery-6.png";
import SectionHeader from "./common/SectionHeader";

function Gallery() {
    return (
        <section className="gallery py-5 md:py-10">
            <div className="container">
                <div className="content-wrapper rounded-xl border border-grey-15 bg-grey-10 relative overflow-hidden">
                    <img
                        src={bgImage}
                        alt="Gallery Background"
                        className="object-cover w-full h-full absolute left-0 top-0 z-0"
                    />
                    <div className="content-overlay p-5 md:p-10 lg:p-15 grid grid-cols-1 xl:grid-cols-2 gap-5 relative z-1">
                        <div className="gallery-container md:h-40">
                            <img
                                src={gallery1}
                                alt="Gallery Image"
                                className="object-cover rounded-lg w-full h-full"
                            />
                        </div>
                        <div className="gallery-container md:h-40">
                            <img
                                src={gallery2}
                                alt="Gallery Image"
                                className="object-cover rounded-lg w-full h-full"
                            />
                        </div>
                        <div className="gallery-container md:h-40">
                            <img
                                src={gallery3}
                                alt="Gallery Image"
                                className="object-cover rounded-lg w-full h-full"
                            />
                        </div>
                        <div className="gallery-container md:h-40 flex md:items-center gap-5 max-md:flex-col">
                            <img
                                src={gallery4}
                                alt="Gallery Image"
                                className="object-cover rounded-lg flex-1 h-full"
                            />
                            <img
                                src={gallery5}
                                alt="Gallery Image"
                                className="object-cover rounded-lg flex-1 h-full"
                            />
                        </div>
                        <div className="gallery-container md:min-h-40">
                            <SectionHeader
                                className="mb-0"
                                title="Explore Estatein's World"
                                description="Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better."
                            />
                        </div>
                        <div className="gallery-container md:h-40">
                            <img
                                src={gallery6}
                                alt="Gallery Image"
                                className="object-cover rounded-lg w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery;
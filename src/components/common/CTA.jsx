import Button from "@components/UI/Button";
import abstractLeft from "@assets/images/cta/abstract-left.png";
import abstractRight from "@assets/images/cta/abstract-right.png";

function CTA() {
    return (
        <section className="cta border-y border-y-grey-15 py-5 md:py-10 relative">
            <img
                src={abstractLeft}
                alt="Abstract Left"
                className="absolute left-0 bottom-0 z-0 max-w-80"
            />
            <div className="container flex md:items-center justify-between gap-5 md:gap-10 relative z-1 max-md:flex-col">
                <div className="text-wrapper w-full">
                    <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-2">Start Your Real Estate Journey Today</h2>
                    <p>Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
                </div>
                <Button
                    to={'/properties'}
                    variant="primary"
                    className="shrink-0 text-center"
                >
                    Explore Properties
                </Button>
            </div>
            <img
                src={abstractRight}
                alt="Abstract Right"
                className="absolute right-0 bottom-0 z-0 max-w-80"
            />
        </section>
    )
}

export default CTA;
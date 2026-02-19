import SectionHeader from "./common/SectionHeader";
import data from "@data/howItWorks.json";

function HowItWorks() {

    const { title, description, steps } = data;

    return (
        <section className="how-it-works py-5 md:py-10" id="howItWorks">
            <div className="container">
                <SectionHeader
                    title={title}
                    description={description}
                />
                <div className="cards-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {
                        steps.map((step, index) => (<div className="step-card flex flex-col" key={step.id || index}>
                            <div className="header p-3 md:p-5 border-s border-s-purple-60/70">
                                Step {String(step.id).padStart(2, '0')}
                            </div>

                            <div className="content-wrapper flex-1 relative p-px rounded-lg rounded-tl-none overflow-hidden bg-transparent">
                                {/* Gradient */}
                                <div
                                    className="absolute inset-0 rounded-lg rounded-tl-none"
                                    style={{
                                        padding: '1px',
                                        background: 'linear-gradient(135deg, rgb(112, 59, 247, 0.7) 0%, rgb(38, 38, 38) 50%)',
                                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                        WebkitMaskComposite: 'destination-out',
                                        maskComposite: 'exclude',
                                    }}
                                ></div>
                                <div className="bg-grey-08 p-3 md:p-5 rounded-lg rounded-tl-none h-full relative z-10">
                                    <h3 className="font-semibold text-lg md:text-xl lg:text-2xl mb-2">{step.title}</h3>
                                    <p className="text-grey-60">{step.description}</p>
                                    {/* Light */}
                                    <div className="absolute -top-10 -left-10 w-24 h-24 bg-purple-60 opacity-40 blur-3xl pointer-events-none"></div>
                                </div>
                            </div>
                        </div>))
                    }
                </div>
            </div>
        </section>
    )
}

export default HowItWorks;
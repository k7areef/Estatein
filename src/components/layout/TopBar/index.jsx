import { Link } from "react-router-dom";
import topbarBg from "@assets/images/topbar-bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function TopBar() {

    const [close, setClose] = React.useState(() => JSON.parse(localStorage.getItem('topbar')) || false);

    React.useEffect(() => {
        if (close) localStorage.setItem('topbar', true);
    }, [close]);

    return (
        <div className={`topbar border-b border-b-grey-15 bg-grey-10 relative max-sm:hidden ${close ? "hidden" : "visible"}`}>
            <img
                src={topbarBg}
                alt="Topbar Background"
                className="object-cover w-full h-13.75"
            />
            <div className="content-overlay absolute w-full left-0 top-1/2 -translate-y-1/2 z-1">
                <div className="container flex items-center justify-center gap-3 font-medium">
                    <p className="text-white!">✨Discover Your Dream Property with Estatein</p>
                    <Link to={'/'} className="underline sm:hover:text-purple-60 transition text-nowrap">Learn More</Link>
                    <button
                        type="button"
                        title="Close"
                        aria-label="Close"
                        onClick={() => setClose(true)}
                        className="close-btn shrink-0 sm:absolute sm:right-5 sm:top-1/2 sm:-translate-y-1/2 z-2 w-10 h-10 rounded-full bg-white/10 transition sm:hover:bg-white/20"
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TopBar;
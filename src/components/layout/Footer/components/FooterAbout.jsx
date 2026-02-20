import AppLogo from "@components/common/AppLogo";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FooterAbout() {
    return (
        <div className="footer-about md:pe-10 col-span-2">
            <AppLogo />
            <form onSubmit={e => e.preventDefault()} className="relative mt-3">
                <label
                    htmlFor="subscribeEmail"
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-grey-60"
                >
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span className="sr-only">Email</span>
                </label>
                <input
                    name="email"
                    type="email"
                    autoComplete="on"
                    id="subscribeEmail"
                    placeholder="Enter Your Email"
                    className="w-full p-3 ps-10 border border-grey-15 rounded-md placeholder:text-grey-60! transition duration-300 ease-in-out focus:border-purple-60"
                />
                <button
                    type="submit"
                    title="Submit"
                    aria-label="Submit"
                    className="absolute top-1/2 -translate-y-1/2 right-3"
                >
                    <FontAwesomeIcon icon={faPaperPlane} />
                    <span className="sr-only">Submit Button</span>
                </button>
            </form>
        </div>
    )
}

export default FooterAbout;
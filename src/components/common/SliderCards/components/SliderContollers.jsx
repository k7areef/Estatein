import Button from "@components/UI/Button";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * @typedef {Object} SliderContollersProps
 * @prop {number} activeIndex
 * @prop {number} listCount
 * @prop {string} name
 */

/**
 * @param {SliderContollersProps} props
 */

function SliderContollers({ activeIndex, listCount, name }) {
    return (
        <div className="slider-contollers mt-5 md:mt-10 flex items-center justify-between pt-3 border-t border-t-grey-15">
            <div className="slider-counter font-medium">
                <span>{String(activeIndex + 1).padStart(2, '0')}</span>
                {" "}{/* For Spliting Between Words */}
                <span className="text-grey-60">of {listCount}</span>
            </div>
            <div className="slider-navigation flex items-center gap-2">
                <Button
                    variant="secondary"
                    className={`${name}-swiper-button-prev disabled:opacity-50 disabled:cursor-not-allowed! transition duration-300 ease-in-out rounded-full! p-0! w-12 h-12`}
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span className="sr-only">Previous Slide</span>
                </Button>
                <Button
                    variant="secondary"
                    className={`${name}-swiper-button-next disabled:opacity-50 disabled:cursor-not-allowed! transition duration-300 ease-in-out rounded-full! p-0! w-12 h-12`}
                >
                    <FontAwesomeIcon icon={faArrowRight} />
                    <span className="sr-only">Next Slide</span>
                </Button>
            </div>
        </div>
    )
}

export default SliderContollers;
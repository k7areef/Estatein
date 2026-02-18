import Button from "@components/UI/Button";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * @typedef NavLinksProps
 * @prop {boolean} isExpand
 * @prop {function} setIsExpand
 */

/**
 * @param {NavLinksProps} props
 */

function MenuToggler({ isExpand, setIsExpand }) {
    return (
        <Button
            variant="secondary"
            onClick={() => setIsExpand(prev => !prev)}
            className="py-2! px-4!"
        >
            <FontAwesomeIcon icon={isExpand ? faXmark : faBars} />
            <span className="sr-only">Menu Toggler</span>
        </Button>
    )
}

export default MenuToggler;
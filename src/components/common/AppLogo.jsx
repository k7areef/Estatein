import { Link } from 'react-router-dom';
import logoDesktop from "@assets/images/logo/desktop.png";
import logoLaptop from "@assets/images/logo/laptop.png";
import logoMobile from "@assets/images/logo/mobile.png";

function AppLogo() {
    return (
        <Link
            to={'/'}
            className="app-logo"
        >
            <picture className="app-logo">
                <source media="(min-width: 1024px)" srcSet={logoDesktop} />
                <source media="(min-width: 768px)" srcSet={logoLaptop} />
                <img src={logoMobile} alt="App Logo" />
            </picture>
        </Link>
    )
}

export default AppLogo;
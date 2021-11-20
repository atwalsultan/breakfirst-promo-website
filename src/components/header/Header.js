import Logo from '../../static/logo.svg';

const Header = () => {
    return (
        <header className="site-header">
            <div>
                <img src={Logo} alt="Fuelture Logo" />
            </div>

            <ul>
                <li>Features</li>
                <li>Team</li>
                <li>Contact</li>
            </ul>
        </header>
    )
}

export default Header

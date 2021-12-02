import Logo from '../../static/logo.svg';

const Header = ({ featuresRef, teamRef, contactRef }) => {
    return (
        <header className="site-header">
            <div>
                <img src={Logo} alt="Fuelture Logo" />
            </div>

            <ul>
                <li onClick={ () => featuresRef.current.scrollIntoView({ behavior: 'smooth' }) }>Features</li>
                <li onClick={ () => teamRef.current.scrollIntoView({ behavior: 'smooth' }) }>Team</li>
                <li onClick={ () => contactRef.current.scrollIntoView({ behavior: 'smooth' }) }>Contact</li>
            </ul>
        </header>
    )
}

export default Header

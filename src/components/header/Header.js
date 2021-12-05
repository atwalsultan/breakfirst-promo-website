import Logo from '../../static/logo.svg';

const Header = ({ featuresRef, teamRef, contactRef, bannerRef }) => {
    return (
        <header className="site-header">
            <div onClick={ () => bannerRef.current.scrollIntoView({ behavior: 'smooth', block: "end" }) }>
                <img src={Logo} alt="Fuelture Logo" />
            </div>

            <ul>
                <li onClick={ () => featuresRef.current.scrollIntoView({ behavior: 'smooth', block: "center" }) }>Features</li>
                <li onClick={ () => teamRef.current.scrollIntoView({ behavior: 'smooth' }) }>Team</li>
                <li onClick={ () => contactRef.current.scrollIntoView({ behavior: 'smooth' }) }>Contact</li>
            </ul>
        </header>
    )
}

export default Header

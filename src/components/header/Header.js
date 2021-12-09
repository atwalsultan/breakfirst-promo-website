import Logo from '../../static/logo.svg';
import {useState} from 'react';

import HamburgerIcon from '../../static/hamburger-icon.svg';
import CloseIcon from '../../static/close-icon.svg';

const Header = ({ featuresRef, teamRef, contactRef, bannerRef }) => {
    const [menu, setMenu] = useState(false);

    return (
        <>
            <div className={`site-header-small-screen${menu ? '' : ' hidden'}`}>
                <nav>
                    <ul>
                        <li onClick={ 
                            () => {
                                // setMenu(false);
                                featuresRef.current.scrollIntoView({ behavior: 'smooth', block: "center" });
                            }
                        }>Features</li>
                        <li onClick={ 
                            () => {
                                // setMenu(false);
                                teamRef.current.scrollIntoView({ behavior: 'smooth' });
                            }
                        }>Team</li>
                        <li onClick={ 
                            () => {
                                // setMenu(false);
                                contactRef.current.scrollIntoView({ behavior: 'smooth' });
                            }
                        }>Contact</li>
                    </ul>
                </nav>
            </div>

            <header className="site-header">
                <div onClick={ () => bannerRef.current.scrollIntoView({ behavior: 'smooth', block: "end" }) }>
                    <img src={Logo} alt="Fuelture Logo" />
                </div>

                {menu ? <img src={CloseIcon} alt="Close Icon" className="close-icon" onClick={() => setMenu(false)} /> : <img src={HamburgerIcon} alt="Menu Icon" className="hamburger-icon" onClick={() => setMenu(true)} />}

                <ul>
                    <li onClick={ () => featuresRef.current.scrollIntoView({ behavior: 'smooth', block: "center" }) }>Features</li>
                    <li onClick={ () => teamRef.current.scrollIntoView({ behavior: 'smooth' }) }>Team</li>
                    <li onClick={ () => contactRef.current.scrollIntoView({ behavior: 'smooth' }) }>Contact</li>
                </ul>
            </header>
        </>

    )
}

export default Header

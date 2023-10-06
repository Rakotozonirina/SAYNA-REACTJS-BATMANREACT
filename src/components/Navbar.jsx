import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from '../photos/logohome.png'
import { useLocation } from 'react-router-dom'
import '../styles/Navbar.css'
import { FaBarsStaggered } from 'react-icons/fa6'

const linkStyle = {
    listStyle: "none",
    color: "white",
    textDecoration: "none",
    fontFamily: "system ui, sans-serif",
    marginInline: "0.5em",
    fontWeight: "bold"
}


function Navbar() {
    const [scrolling, setScrolling] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[]);

    const handleScroll = () => {
        // Check the scroll position
        if (window.scrollY > 100) {
          // Set scrolling to true when scrolling down
            setScrolling(true);
        } else {
          // Set scrolling to false when at the top of the page
            setScrolling(false);
        }
    };

    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
return (
    <nav className={`navStyle ${scrolling ? 'scrolled' : ''}`}>
        <div className='divStyle'>
            <Link to="/">
                <img src={Logo} alt="logo" />
            </Link>
            <ul className={`ulStyle ${showMenu ? 'open' : 'closed'}`}>
                <li className={splitLocation[1] === "" ? "active" : ""}>
                    <Link to="/" style={linkStyle}>home</Link>
                </li>
                <li className={splitLocation[1] === "game" ? "active" : ""}>
                    <Link to="/game" style={linkStyle}>game</Link>
                </li>
                <li className={splitLocation[1] === "eshop" ? "active" : ""}>
                    <Link to="/eshop" style={linkStyle}>e-shop</Link>
                </li>
                <li className={splitLocation[1] === "compte" ? "active" : ""}>
                    <Link to="/compte" style={linkStyle}>mon compte</Link>
                </li>
            </ul>
            <div className='content-burger-btn' onClick={() => setShowMenu(!showMenu)}>
                <FaBarsStaggered className='burger-btn' />
            </div>
        </div>
    </nav>
)
}

export default Navbar

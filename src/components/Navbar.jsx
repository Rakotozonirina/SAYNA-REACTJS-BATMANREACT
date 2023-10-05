import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from '../photos/logohome.png'
import { useLocation } from 'react-router-dom'
import '../styles/Navbar.css'

const navStyle = {
    width: "100%",
    position: "fixed",
    top:"0%",
    left:"0%",
    padding: "0 5rem",
    zIndex: '10'
}

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
    <nav style={navStyle} className={`navStyle ${scrolling ? 'scrolled' : ''}`}>
        <div className='divStyle'>
            <Link to="/">
                <img src={Logo} alt="logo" />
            </Link>
            <ul className='ulStyle'>
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
        </div>
        
    </nav>
)
}

export default Navbar

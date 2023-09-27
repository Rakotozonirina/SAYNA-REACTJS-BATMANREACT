import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../photos/logohome.png'

const navStyle = {
    width: "100dvw",
    height: "10dvh",
    background: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "fixed",
    top:"0%",
    left:"0%",
    padding: "0 5rem"
}

const sectionStyle = {
    textTransform: "uppercase"
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
return (
    <nav style={navStyle}>
        <Link to="/">
            <img src={Logo} alt="logo" />
        </Link>
        <section style={sectionStyle}>
            <Link to="/" style={linkStyle}>home</Link>
            <Link to="/game" style={linkStyle}>game</Link>
            <Link to="/eshop" style={linkStyle}>eshop</Link>
            <Link to="/compte" style={linkStyle}>mon compte</Link>
        </section>
    </nav>
)
}

export default Navbar

import React from 'react'
import Navbar from '../components/Navbar'

const colorText = {
    color: "white",
    fontFamily: "system ui, sans-serif",
    width: "100dvw",
    height: "100dvh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

function Compte() {
return (
    <>
        <Navbar/>
        <div style={colorText}>
            Compte
        </div>
    </>
    
)
}

export default Compte

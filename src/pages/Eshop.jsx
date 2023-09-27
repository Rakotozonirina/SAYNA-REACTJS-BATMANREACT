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

function Eshop() {
return (
    <>
        <Navbar/>
        <div style={colorText}>
            Eshop
        </div>
    </>
)
}

export default Eshop

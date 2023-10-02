import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Eshop.css'

const colorText = {
    color: "white",
    fontFamily: "system ui, sans-serif",
    width: "100%",
    height: "100dvh",
    borderLeft: "1px solid rgba(238, 238, 238, 0.5)",
    borderRight: "1px solid rgba(238, 238, 238, 0.5)",
}

function Eshop() {
return (
    <main className="mainStyle">
        <Navbar/>
        <div style={colorText}>

        </div>
    </main>
)
}

export default Eshop

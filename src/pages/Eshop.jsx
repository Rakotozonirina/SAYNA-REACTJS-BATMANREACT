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
    padding: "0 5rem",
    display: "flex",
    alignItems: "center"
}
const articleStyle = {
    textTransform: "uppercase",
    fontSize: "2rem"
}

function Eshop() {
return (
    <main className="mainStyle">
        <Navbar/>
        <div style={colorText}>
            <article style={articleStyle}>
                <h1>récuperez le flow de <br /> batman avec notre e-shop!</h1>
            </article>
            <section>

            </section>
        </div>
    </main>
)
}

export default Eshop

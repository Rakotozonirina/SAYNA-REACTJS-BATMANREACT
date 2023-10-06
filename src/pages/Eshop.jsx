import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Eshop.css'
import { FaAngleDown } from 'react-icons/fa6'
import Icons from '../components/Icons'
import {Link as ScrollLink, Element } from 'react-scroll'
import Fleche from '../photos/logos/flèche_down_header.png'
import Cart from '../photos/icons/icone_1.png'
import CustomSelect from '../components/CustomSelect'
import AnotherSelect from '../components/AnotherSelect'
import Card from '../components/Card'

const colorText = {
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
        <Element name='top'>
            <div style={colorText} className='colorText'>
                <article style={articleStyle}>
                    <h1>récuperez le flow de <br /> batman avec notre e-shop!</h1>
                </article>
                <section>
                    <Icons/>
                </section>
            </div>
        </Element>
        <Element name='showResult'>
            <section className='showResult'>
                <div className='cartDiv'>
                    <section className='sectionFirst'>
                        <ScrollLink to="showResult" spy={true} smooth={true} duration={500}>
                            <img src={Fleche} alt="flèche down" />
                        </ScrollLink>
                    </section>
                    <div className='DivTwo'>
                        <article>
                            <h2>Filtres</h2>
                        </article>
                        <section>
                            <img src={Cart} alt="cart" />
                        </section>
                    </div>
                </div>
                <section className='dropdownResult'>
                    <section className='contentDropdown'>
                        <article className='heading'>
                            <h2>Prix</h2>
                        </article>
                        <section className='contentRange'>
                            <input type="range" name="prix" id="prix" list="prix" />
                            <datalist id="prix">
                                <option value="0" label="0€"></option>
                                <option value="100" label="100"></option>
                                <option value="200" label="200€"></option>
                            </datalist>
                        </section>
                        <section>
                            <CustomSelect />
                        </section>
                        <section className='color'>
                            <div className='contentColor'>
                                Couleur
                                <span> <FaAngleDown/> </span>
                            </div>
                        </section>
                        <section className='anotherSelect'>
                            <AnotherSelect/>
                        </section>
                    </section>
                    <section className='contentCard'>
                        <section className='contentTrier'>
                            <h2 className='result-one'>Résultat: 122</h2>
                            <p className='result-two'> Trier par <span> <FaAngleDown className='icon'/> </span></p>
                        </section>
                        <section className='content-cards'>
                            <Card/>
                        </section>
                    </section>
                </section>
            </section>
        </Element>
    </main>
)
}

export default Eshop

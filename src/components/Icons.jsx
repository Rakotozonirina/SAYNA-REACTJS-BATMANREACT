import React from 'react'
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import Arrowup from '../photos/logos/logo_bat_flèche.png'
import Facebook from '../photos/logos/icon_facebook.png'
import Instagram from '../photos/logos/icon_ig.png'
import Twitter from '../photos/logos/icon_tw.png'
import Arrowdown from '../photos/logos/logo_bat_flèche_2.png'
import '../styles/Icons.css'

function Icons() {
return (
    <div className='bg_icons'>
        <section>
            <ScrollLink to="top" spy={true} smooth={true} duration={500}>
                <img src={Arrowup} alt="arrowup" />
            </ScrollLink>
        </section>
        <section>
            <Link>
                <img src={Facebook} alt="Facebook" />
            </Link>
        </section>
        <section>
            <Link>
                <img src={Instagram} alt="Instagram" />
            </Link>
        </section>
        <section>
            <Link>
                <img src={Twitter} alt="Twitter" />
            </Link>
        </section>
        <section>
            <ScrollLink to="showResult" spy={true} smooth={true} duration={500}>
                <img src={Arrowdown} alt="Arrowdown" />
            </ScrollLink>
        </section>
    </div>
)
}

export default Icons

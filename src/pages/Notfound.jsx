import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Notfound.css'
import Image from '../photos/notfound.jpg'
import Button from '../components/Button'

function Notfound() {
return (
    <>
        <Navbar/>
        <div className='bg_div_not_found'>
            <div className='bg_child_one'>
                <img src={Image} alt='not found'/>
            </div>
            <div className='bg_child_two'>
                <article>
                    <h1>404 ERROR</h1>
                    <p></p>
                    <div>
                        <Button name="Allez sur notre page d'acceuil" link="/" />
                        <Button name="Voir notre produits" link="/eshop" />
                    </div>
                </article>
            </div>
            <div>
                <form action="">
                    
                </form>
            </div>

        </div>
    </>

)
}

export default Notfound

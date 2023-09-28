import React from 'react'
import '../styles/Signup.css'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Signup() {
return (
    <>
        <Navbar/>
        <div className='bg-signup'></div>
        <article className='bg_article'>
            <h2>Inscription</h2>
            <p>
                Vous déja un compte? <Link to='/login'>Connectez vous ici!</Link>
            </p>
        </article>
    </>
)
}

export default Signup

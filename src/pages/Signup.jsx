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
            <div className='bg_div'>
                <h2>Inscription</h2>
                <p>
                    Vous déja un compte? <Link to='/login'>Connectez vous ici!</Link>
                </p>
                Form
            </div>
        </article>
    </>
)
}

export default Signup

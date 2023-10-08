import React from 'react'
import { useNavigate } from 'react-router-dom'
import Cart from '../photos/icons/icone_1.png'
import '../styles/CartComponent.css'


function CartComponent({ productsCount }) {
    const navigate = useNavigate()
    const navigateToCart = () => {
        navigate('/cart')
    }
return (
    <button onClick={navigateToCart}>
        <span>{productsCount}</span>
        <img src={Cart} alt="cart" />
    </button>
)
}

export default CartComponent

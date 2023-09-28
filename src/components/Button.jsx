import React from 'react'
import { Link } from 'react-router-dom'

const styleButton = {
    padding: '1.5em',
    borderRaduis: '16px',
    backgroundImage: 'linear-gradient(to right top, #0f0f10, #2d1c36, #621849, #9a0040, #c4001b)',
    color: 'white',
    border: 'none',
    outline: 'none',
    fontFamily: 'system-ui sans-serif',
    marginInline: '1em',
    cursor: 'pointer'
}

function Button({name, link}) {
return (
    <>
        <Link to={link}>
            <button style={styleButton}>
                {name}
            </button>
        </Link>
    </>
)
}

export default Button

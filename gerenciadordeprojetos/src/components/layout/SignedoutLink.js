import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedoutLink = () => {
    return (
        <ul className="right">
            <li><NavLink to='/signup'>Criar Conta</NavLink></li>
            <li><NavLink to='/signin'>Entrar</NavLink></li>
        </ul>
    )
}

export default SignedoutLink
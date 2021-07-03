import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'

import { title } from '../../utils'

import logoImg from '../../assets/logo.svg'
import './Header.css'

interface HeaderProps {
    title: string // obrigatório
    description?: string // pode ter ou não
}

const Header: React.FC<HeaderProps> = (props) => {

    useEffect(() => title(document, 'Header'), [])

  	return (
        <header>
            <div className="header-logo">
                <Link to="/">
                    <FiChevronLeft size={ 20 } color="#fff" />
                </Link>

                <img src={ logoImg } alt="Proffy"/>
            </div>

            <div className="header-title">
                <h1>{ props.title }</h1>

                { props.description &&
                    <p>{ props.description }</p>
                }

            </div>

        </header>
  	)
}

export default Header

import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiBookOpen, FiMonitor } from 'react-icons/fi'

import { title } from '../../utils'

import logoImg from '../../assets/logo.svg'
import teachersImg from '../../assets/teachers.svg'
import './Home.css'

function Home() {

    useEffect(() => title(document, 'Home'), [])

  	return (
        <div id="page-home">
            <main>
                <div>
                    <img src={ logoImg } alt="Proffy"/>

                    <p>Sua plataforma de estudos online</p>
                </div>

                <img src={ teachersImg } alt="Proffy Teachers"/>
            </main>

            <footer>
                <div className="buttons-container">
                    <Link to="/list-class" className="btn btn-purple">
                        <FiBookOpen size={ 20 } />
                        &nbsp;&nbsp;Estudar
                    </Link>

                    <Link to="/create-class" className="btn btn-green">
                        <FiMonitor size={ 20 } />
                        &nbsp;&nbsp; Dar aulas
                    </Link>
                </div>

                <span>Total de 90 conexões realizadas 💜</span>
            </footer>

        </div>
  	)
}

export default Home

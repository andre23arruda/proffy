import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { FaWhatsapp } from 'react-icons/fa'

import { getApi } from '../../services/api'
import { isValidTime, title } from '../../utils'

import './ListClass.css'
import Header from '../../components/Header/Header'


interface ScheduleProps {
	id: number,
    subject_name: string,
    teacher_name: string,
    teacher_email: string,
    teacher_whatsapp: string,
    teacher_bio: string,
    teacher_avatar: string,
    cost: number,
}

interface SubjectProps {
	id: number
    name: string
}


function ListClass() {

    useEffect(() => title(document, 'Cadastro'), [])
    const history = useHistory()

    const [timeStart, setTimeStart] = useState<string>('08:00')
    const [subject, setSubject] = useState<string>('1')
    const [weekDay, setWeekDay] = useState<string>('1')

    const [subjectList, setSubjectList] = useState<SubjectProps[]>([])
    const [schedule_info, setScheduleInfo] = useState<ScheduleProps[]>([])

    async function handleTimeStart(name: string) {
        setTimeStart(name)
    }
    function handleSetSubject(value: string){
        setSubject(value)
    }
    function handleSetWeekDay(value: string){
        setWeekDay(value)
    }

    async function loadClasses() {
        if (isValidTime(timeStart)) {
            const response = await getApi(`classes/?filter_classes&subject=${ subject }&week_day=${ weekDay }&time=${ timeStart }`)
            // const response = await getApi(`classes/`)
            if (response) {
                setScheduleInfo(response)
            }
        }
    }

    async function loadSubjectList() {
        const response = await getApi('subjects/')
        setSubjectList(response)
    }

    useEffect(() => {
        loadSubjectList()
    }, [])

    useEffect(() => {
        loadClasses()
    }, [timeStart, subject, weekDay])


  	return (

        <div id="list-class-page">
            <Header
                title={ 'Esses são os proffys disponíveis' }
            />

            <div className="content">
                <form>
                    <div className="field-group">
                        <div className="field no-margin">
                            <label className="purple-text" htmlFor="subject">Matéria</label>
                            <select name="subject" id="week_day" onChange={ event => handleSetSubject(event.target.value) }>
                                { subjectList.map((subject) =>
                                    <option key={ subject.id } value={ subject.id }>{ subject.name }</option>
                                )}
                            </select>
                        </div>

                        <div className="field no-margin">
                            <label className="purple-text" htmlFor="week_day">Dia da semana</label>
                            <select name="week_day" id="week_day" onChange={ event => handleSetWeekDay(event.target.value) }>
                                <option value="1">Segunda</option>
                                <option value="2">Terça</option>
                                <option value="3">Quarta</option>
                                <option value="4">Quinta</option>
                                <option value="5">Sexta</option>
                            </select>
                        </div>

                        <div className="field no-margin">
                            <label className="purple-text" htmlFor="time_start">Horário</label>
                            <input type="text" name="time_start" id="time_start" placeholder="08:00" onChange={ event => handleTimeStart(event.target.value) }/>
                        </div>
                    </div>
                </form>

                <div className="cards-group">
                    { schedule_info.length > 0 ?
                        schedule_info.map((schedule) => (
                            <div className="card" key={ schedule.id }>
                                <header>
                                    <img src={ schedule.teacher_avatar } alt="Teacher" />

                                    <div>
                                        <h2>{ schedule.teacher_name }</h2>
                                        <span>{ schedule.subject_name }</span>
                                    </div>
                                </header>

                                <main>
                                    <p>{ schedule.teacher_bio }</p>
                                </main>

                                <footer>
                                    <div>
                                        <span>Preço/hora</span>
                                        <strong className="purple-text-strong">R$ { schedule.cost }</strong>
                                    </div>

                                    <button className="btn btn-green">
                                        <FaWhatsapp size={ 20 } />
                                        &nbsp; Entrar em contato
                                    </button>
                                </footer>

                            </div>
                        ))
                     :
                        <div className="cards-group">
                            <div className="card">
                                <header>
                                    <h2>Oops!</h2>
                                </header>

                                <main>
                                    <p>Não há aulas cadastradas</p>
                                </main>
                            </div>
                        </div>
                    }

                </div>


            </div>

        </div>
  	)
}

export default ListClass

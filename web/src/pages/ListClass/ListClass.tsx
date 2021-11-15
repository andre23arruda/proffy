import { useEffect, useState } from 'react'

import { Dropdown } from 'react-dropdown-now'
import 'react-dropdown-now/style.css'

import { getApi, postJSONApi } from '../../services/api'
import { isValidTime, weekDays } from '../../utils'

import './ListClass.css'
import Header from '../../components/Header/Header'
import { FiMail } from 'react-icons/fi'

// custom hooks
import useTitlePage from '../../hooks/useTitlePage'

interface ScheduleProps {
	id: number,
    teacher: number,
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
    useTitlePage('Lista de Proffys')

    const [timeStart, setTimeStart] = useState<string>('08:00')
    const [subject, setSubject] = useState<string>('1')
    const [weekDay, setWeekDay] = useState<string>('1')

    const [subjectList, setSubjectList] = useState<SubjectProps[]>([])
    const [schedule_info, setScheduleInfo] = useState<ScheduleProps[]>([])

    async function handleTimeStart(name: string) {
        setTimeStart(name)
    }
    function handleSetSubject(selectedOption: any){
        setSubject(selectedOption.value)
    }
    function handleSetWeekDay(selectedOption: any){
        setWeekDay(selectedOption.value)
    }
    function emailBody(schedule: ScheduleProps) {
        const newLine = '%0D%0A'
        const subject = 'Marcar aula com Proffy'
        const body = `${ schedule.teacher_name }, desejo marcar uma aula.
            ${ newLine }${ weekDays[Number(weekDay) - 1].label } a partir de ${ timeStart }.
            ${ newLine }
            ${ newLine }Aguardo seu retorno.
        `
        return `mailto:${ schedule.teacher_email }?subject=${ subject }&body=${ body }`
    }
    async function handleContact(schedule: ScheduleProps) {
        await postJSONApi('connections/', { teacher: schedule.teacher })
        return
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
                title={ 'Esses são os Proffys disponíveis' }
            />

            <div className="content">
                <form>
                    <div className="field-group">
                        <div className="field no-margin">
                            <label className="purple-text" htmlFor="subject">Matéria</label>´
                            <Dropdown
                                placeholder="Select an option"
                                options={ subjectList.map(subject => ({ label: subject.name, value: subject.id } ))}
                                value={ subjectList.length > 0 ? subjectList[0].id : '' }
                                onSelect={(value) => handleSetSubject(value)} // always fires once a selection happens even if there is no change
                            />
                        </div>

                        <div className="field no-margin">
                            <label className="purple-text" htmlFor="week_day">Dia da semana</label>
                            <Dropdown
                                placeholder="Select an option"
                                options={ weekDays }
                                value="1"
                                onSelect={(value) => handleSetWeekDay(value)}
                            />
                        </div>

                        <div className="field no-margin">
                            <label className="purple-text" htmlFor="time_start">Horário</label>
                            <input
                                type="time"
                                name="time_start"
                                id="time_start"
                                style={{ width: '100%', textAlign: 'center' }}
                                value={ timeStart }
                                onChange={ event => handleTimeStart(event.target.value) }
                            />
                        </div>
                    </div>
                </form>

                <div className="cards-group">
                    { schedule_info.length > 0 ?
                        schedule_info.map((schedule) => (
                            <div className="card" key={ schedule.id }>
                                <header>
                                    <img src={ schedule.teacher_avatar } alt={ schedule.teacher_name } />

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

                                    <a
                                        onClick={ () => handleContact(schedule) }
                                        className="email-link"
                                        href={ emailBody(schedule) }
                                    >
                                        <button className="btn btn-green">
                                            <FiMail size={ 20 } />
                                            &nbsp; Entrar em contato
                                        </button>
                                    </a>
                                </footer>

                            </div>
                        )) : (
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
                        )
                    }
                </div>
            </div>

        </div>
    )
}

export default ListClass

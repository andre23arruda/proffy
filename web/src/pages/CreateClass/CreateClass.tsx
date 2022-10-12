import { ChangeEvent, useEffect, useMemo, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import { Dropdown } from 'react-dropdown-now'
import 'react-dropdown-now/style.css'

import { FiAlertCircle, FiCamera, FiCheckCircle } from 'react-icons/fi'

import { getApi, postFormDataApi } from '../../services/api'

import './CreateClass.css'
import Header from '../../components/Header/Header'
import AvailableTime from '../../components/AvailableTime/AvailableTime'
import useTitlePage from '../../hooks/useTitlePage'

interface ScheduleProps {
	week_day: number
    time_start: string
    time_end: string
}

interface SubjectProps {
	id: number
    name: string
}


function CreateClass() {

    const history = useHistory()

    useTitlePage('Cadastro')

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [whatsapp, setWhatsapp] = useState<string>('')
    const [bio, setBio] = useState<string>('')
    const [subject, setSubject] = useState<string>('1')
    const [subjectList, setSubjectList] = useState<SubjectProps[]>([])
    const [cost, setCost] = useState<string>('')
    const [scheduleInfo, setScheduleInfo] = useState<ScheduleProps[]>([{
        week_day: 1,
        time_start: '08:00',
        time_end: '12:00',
    }])
    const [avatar, setAvatar] = useState<any>(null)

    const [popupTrigger, setPopupTrigger] = useState<boolean>(false)

    function handleSetName(value: string){
        setName(value)
    }
    function handleSetEmail(value: string){
        setEmail(value)
    }
    function handleSetWhatsapp(value: string){
        setWhatsapp(value)
    }
    function handleSetAvatar(event: ChangeEvent<HTMLInputElement> ) {
		if (!event.target.files) return
		setAvatar(event.target.files[0])
	}
    function handleSetBio(value: string){
        setBio(value)
    }
    function handleSetSubject(selectedOption: any){
        setSubject(selectedOption.value)
    }
    function handleSetCost(value: string){
        setCost(value)
    }
    function addScheduleInfo(event: any) {
        event.preventDefault()
        setScheduleInfo([
            ...scheduleInfo, {
            week_day: 0,
            time_start: '08:00',
            time_end: '12:00',
        }])
    }

    const preview = useMemo( () => {
        return avatar ? URL.createObjectURL(avatar) : null
    }, [avatar])

    async function handleSubmit(event: any){
        event.preventDefault()
        const data = {
            name,
            email,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            scheduleInfo: JSON.stringify(scheduleInfo),
        }

        const response = await postFormDataApi('classes/', data)
        if (response.message) {
            setPopupTrigger(true)
            setTimeout(() => {
                history.push('/')
            }, 2000)
        }
    }

    async function loadSubjectList() {
        const response = await getApi('subjects/')
        setSubjectList(response)
    }

    useEffect(() => {
        loadSubjectList()
    }, [])

    return (

        <div id="create-class-page">
            <Header
                title={ 'Que incrível que você quer dar aulas.' }
                description={ 'O primeiro passo é preencher esse formulário de inscrição' }
            />

            <div className="content">

                <form onSubmit={ event => handleSubmit(event) }>

                    <fieldset>
                        <legend>
                            <h2>Seus dados</h2>
                        </legend>

                        <div className="field">
                            <label htmlFor="name">Nome completo</label>
                            <input type="text" name="name" id="name" onChange={ event => handleSetName(event.target.value) }/>
                        </div>

                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" onChange={ event => handleSetEmail(event.target.value) }/>
                        </div>

                        <div className="field">
                            <label htmlFor="whatsapp">Whatsapp <span>(Somente números)</span></label>
                            <input type="tel" name="whatsapp" id="whatsapp" onChange={ event => handleSetWhatsapp(event.target.value) }/>
                        </div>

                        <div className="field-group">
                            <div className="field avatar">
                                <label>Avatar</label>
                                <label id="avatar" className={ preview ? 'has-preview' : '' } style={{ backgroundImage: `url(${ preview })`}}>
                                    <input type="file" onChange={ e => handleSetAvatar(e)}/>
                                    { preview ? '' : <FiCamera color={ "#C3C3C3" } fontSize={ 25 }/> }
                                </label>
                            </div>

                            <div className="field no-margin">
                                <label htmlFor="bio">Biografia</label>
                                <textarea name="bio" id="bio" onChange={ event => handleSetBio(event.target.value) }></textarea>
                            </div>

                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>
                            <h2>Sobre a aula</h2>
                        </legend>

                        <div className="field">
                            <label htmlFor="subject">Matéria</label>
                            <Dropdown
                                placeholder="Select an option"
                                options={ subjectList.map(subject => ({ label: subject.name, value: subject.id } ))}
                                value={ subjectList.length > 0 ? subjectList[0].id : '' }
                                onSelect={(value) => handleSetSubject(value)}
                            />
                        </div>

                        <div className="field">
                            <label htmlFor="cost">Custo da sua hora por aula <span>(em R$)</span>
                            </label>
                            <input type="number" name="cost" id="cost" onChange={ event => handleSetCost(event.target.value) }/>
                        </div>

                    </fieldset>

                    <fieldset>
                        <legend>
                            <h2>
                                Horários disponíveis
                                <button onClick={(event) => addScheduleInfo(event) }>
                                    + Novo horário
                                </button>
                            </h2>
                        </legend>

                        { scheduleInfo.map((schedule, index) =>
                            <AvailableTime
                                index={ index }
                                scheduleInfo={ scheduleInfo }
                                setScheduleInfo={ setScheduleInfo }
                                key={ index }
                            />
                        )}

                    </fieldset>

                    <footer>
                        <span>
                            <FiAlertCircle size={ 20 } color="blueviolet" />
                            <p>
                                Importante!
                                <br />
                                Preencha todos os dados!
                            </p>
                        </span>

                        <button className="btn btn-green">Salvar cadastro</button>
                    </footer>

                </form>

            </div>


            {/* Mensagem de cadastro */}
            <CSSTransition
                in={ popupTrigger }
                timeout={ 400 }
                classNames="alert"
                unmountOnExit
                onEnter={() => {}}
                onExited={() => {}}
            >
                <div className="popup">
                    <div className="popup-inner">
                        <FiCheckCircle fontSize={ 38 } color="#34CB79"/>

                        <h1>Cadastro realizado com sucesso</h1>
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
}

export default CreateClass

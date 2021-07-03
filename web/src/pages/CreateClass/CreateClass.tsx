import React, { ChangeEvent, useEffect, useMemo, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import { FiAlertCircle, FiCamera, FiCheckCircle } from 'react-icons/fi'

import { getApi, postFormDataApi } from '../../services/api'
import { title } from '../../utils'


import './CreateClass.css'
import Header from '../../components/Header/Header'
import AvailableTime from '../../components/AvailableTime/AvailableTime'

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

    useEffect(() => title(document, 'Cadastro'), [])

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [whatsapp, setWhatsapp] = useState<string>('')
    const [bio, setBio] = useState<string>('')
    const [subject, setSubject] = useState<string>('')
    const [subjectList, setSubjectList] = useState<SubjectProps[]>([])
    const [cost, setCost] = useState<string>('')
    const [schedule_info, setScheduleInfo] = useState<ScheduleProps[]>([{
        week_day: 0,
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
    function handleSetWhatsapp(whatsapp: string){
        setWhatsapp(email)
    }
    function handleSetAvatar(event: ChangeEvent<HTMLInputElement> ) {
		if (!event.target.files) return
		setAvatar(event.target.files[0])
	}
    function handleSetBio(value: string){
        setBio(value)
    }
    function handleSetSubject(value: string){
        setSubject(value)
    }
    function handleSetCost(value: string){
        setCost(value)
    }
    function addScheduleInfo(event: any) {
        event.preventDefault()
        setScheduleInfo([
            ...schedule_info, {
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
            schedule_info: JSON.stringify(schedule_info),
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
                            <input type="email" name="whatsapp" id="whatsapp" onChange={ event => handleSetWhatsapp(event.target.value) }/>
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
                            <select placeholder="Selecione qual você quer ensinar" onChange={ event => handleSetSubject(event.target.value) }>
                                { subjectList.map((subject) =>
                                    <option key={ subject.id } value={ subject.id }>{ subject.name }</option>
                                )}
                            </select>
                        </div>

                        <div className="field">
                            <label htmlFor="cost">Custo da sua hora por aula <span>(em R$)</span>
                            </label>
                            <input type="text" name="cost" id="cost" onChange={ event => handleSetCost(event.target.value) }/>
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

                        { schedule_info.map((schedule, index) =>
                            <AvailableTime
                                index={ index }
                                schedule_info={schedule_info}
                                setScheduleInfo={setScheduleInfo}
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

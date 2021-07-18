import React, { Dispatch, SetStateAction } from 'react'

import { Dropdown } from 'react-dropdown-now'


interface ScheduleProps {
	week_day: number
    time_start: string
    time_end: string
}

interface AvailableTimeProps {
    index: number,
    schedule_info: ScheduleProps[],
    setScheduleInfo: Dispatch<SetStateAction<ScheduleProps[]>>
}


const AvailableTime: React.FC<AvailableTimeProps> = (props) => {
    function handleSetWeekDay(selectedOption: any){
        props.schedule_info[props.index].week_day = parseInt(selectedOption.value)
        props.setScheduleInfo(props.schedule_info)
    }
    function handleSetTimeStart(value: string){
        props.schedule_info[props.index].time_start = value
        props.setScheduleInfo(props.schedule_info)
    }
    function handleSetTimeEnd(value: string){
        props.schedule_info[props.index].time_end = value
        props.setScheduleInfo(props.schedule_info)
    }

    return (
        <>
        { props.index > 0 && <hr />}
        <div className="field-group">
            <div className="field no-margin">
                <label htmlFor="week_day">Dia da semana</label>
                <Dropdown
                    placeholder="Select an option"
                    options={[
                        { label: 'Segunda', value: '1' },
                        { label: 'Terça',   value: '2' },
                        { label: 'Quarta',  value: '3' },
                        { label: 'Quinta',  value: '4' },
                        { label: 'Sexta',   value: '5' },
                    ]}
                    value="1"
                    onSelect={(value) => handleSetWeekDay(value)}
                />
            </div>

            <div className="field no-margin">
                <label htmlFor="time_start">Das</label>
                <input type="text" placeholder="08:00" onChange={ event => handleSetTimeStart(event.target.value) }/>
            </div>

            <div className="field no-margin">
                <label htmlFor="time_end">Até</label>
                <input type="text"  placeholder="12:00" onChange={ event => handleSetTimeEnd(event.target.value) }/>
            </div>
        </div>
        </>
    )
}

export default AvailableTime

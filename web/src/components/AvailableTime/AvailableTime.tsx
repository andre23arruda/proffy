import React, { Dispatch, SetStateAction } from 'react'

import { Dropdown } from 'react-dropdown-now'

// utils
import { weekDays } from '../../utils'


interface ScheduleProps {
	week_day: number
    time_start: string
    time_end: string
}

interface AvailableTimeProps {
    index: number,
    scheduleInfo: ScheduleProps[],
    setScheduleInfo: Dispatch<SetStateAction<ScheduleProps[]>>
}


const AvailableTime: React.FC<AvailableTimeProps> = (props) => {
    function handleSetWeekDay(selectedOption: any){
        props.scheduleInfo[props.index].week_day = parseInt(selectedOption.value)
        props.setScheduleInfo(props.scheduleInfo)
    }
    function handleSetTimeStart(value: string){
        props.scheduleInfo[props.index].time_start = value
        props.setScheduleInfo(props.scheduleInfo)
    }
    function handleSetTimeEnd(value: string){
        props.scheduleInfo[props.index].time_end = value
        props.setScheduleInfo(props.scheduleInfo)
    }

    return (
        <>
        { props.index > 0 && <hr />}

        <div className="field-group">
            <div className="field no-margin">
                <label htmlFor="week_day">Dia da semana</label>
                <Dropdown
                    placeholder="Select an option"
                    options={ weekDays }
                    value="1"
                    onSelect={(value) => handleSetWeekDay(value)}
                />
            </div>

            <div className="field no-margin">
                <label>Das</label>
                <input
                    style={{ textAlign: 'center' }}
                    type="time"
                    placeholder="08:00"
                    onChange={ event => handleSetTimeStart(event.target.value) }
                />
            </div>

            <div className="field no-margin">
                <label>Até</label>
                <input
                    style={{ textAlign: 'center' }}
                    type="time"
                    placeholder="12:00"
                    onChange={ event => handleSetTimeEnd(event.target.value) }
                />
            </div>
        </div>
        </>
    )
}

export default AvailableTime

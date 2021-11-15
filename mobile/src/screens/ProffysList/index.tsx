import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'

// images and styles
import styles from './styles'

// custom components
import Header from '../../components/Header'
import ProffyCard from '../../components/ProffyCard'
import { getApi } from '../../services/api'
import Filter from '../../components/Filter'
import Loading from '../../components/Loading'


type ScheduleProps = {
	id: number,
    subject_name: string,
    teacher: number,
    teacher_name: string,
    teacher_email: string,
    teacher_whatsapp: string,
    teacher_bio: string,
    teacher_avatar: string,
    cost: number,
}

type SubjectProps = {
	id: number,
    name: string
}


function ProffysList({ favorites, setFavorites }: any) {
    const [expandFilter, setExpandFilter] = useState(false)
    const [expandAux, setExpandAux] = useState(false)
    const [loading, setLoading] = useState(true)

    const [subject, setSubject] = useState<number>(1)
    const [selectedWeekday, setWeekday] = useState<string>('1')
    const [selectedTime, setSelectedTime] = useState<string>('08:00')

    const [schedule_info, setScheduleInfo] = useState<ScheduleProps[]>([])
    const [subjectList, setSubjectList] = useState<SubjectProps[]>([])

    function handleSetExpandFilter() {
        setExpandAux(!expandFilter)
        if (expandFilter) {
            setTimeout(() => { setExpandFilter(false) }, 160)
            return
        }
        setExpandFilter(!expandFilter)
        return
    }

    function hideFilter() {
        setExpandAux(false)
        if (expandFilter) {
            setTimeout(() => { setExpandFilter(false) }, 160)
        }
        return
    }

    async function loadClasses() {
        setLoading(true)
        const response = await getApi(`classes/?filter_classes&subject=${ subject }&week_day=${ selectedWeekday }&time=${ selectedTime }`)
        if (response) {
            setScheduleInfo(response)
        }
        setTimeout(() => { setLoading(false) }, 1000)
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
    }, [subject, selectedWeekday, selectedTime])

    return (
        <>
            <Header title={ `Proffys\nDisponíveis` }>
                <Filter
                    expandAux={ expandAux }
                    expandFilter={ expandFilter }
                    handleSetExpandFilter={ handleSetExpandFilter }
                    selectedSubject={ subject }
                    setSubject={ setSubject }
                    selectedWeekday={ selectedWeekday }
                    setWeekday={ setWeekday }
                    selectedTime={ selectedTime }
                    setSelectedTime={ setSelectedTime }
                    subjectList={ subjectList }
                />
            </Header>

            <View style={ styles.grayBackground }/>

            { loading && <Loading /> }

            { (schedule_info.length > 0 && !(loading) ) && (
                <ScrollView
                    style={ styles.container }
                    showsVerticalScrollIndicator={ false }
                    onScroll={ hideFilter }
                >
                    { schedule_info.map((teacher, index) => (
                        <ProffyCard
                            key={ index }
                            teacher={ teacher }
                            setFavorites={ setFavorites }
                        />
                    ))}
                </ScrollView>
            )}

            { !schedule_info.length && !(loading) && (
                <Text style={ styles.noProffys }>
                    { `Não há Proffys\ncadastrados 😔` }
                </Text>
            )}
        </>
    )
}

export default ProffysList

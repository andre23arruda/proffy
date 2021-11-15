import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

// images and styles
import styles from './styles'

// custom components
import Header from '../../components/Header'
import ProffyCard from '../../components/ProffyCard'
import Loading from '../../components/Loading'

// utils
import { getApi } from '../../services/api'

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


function Favorites({ favorites, setFavorites }: any) {
    const [schedule_info, setScheduleInfo] = useState<ScheduleProps[]>([])
    const [onlyFavorites, setOnlyFavorites] = useState<ScheduleProps[]>([])
    const [loading, setLoading] = useState(true)

    function filterFavorites(data: any) {
        const dataFiltered = data.filter((el: ScheduleProps) => favorites.includes(el.id))
        setOnlyFavorites([...dataFiltered])
    }

    async function loadClasses() {
        setLoading(true)
        const response = await getApi(`classes/`)
        if (response) {
            setScheduleInfo(response)
            filterFavorites(response)
        }
        setTimeout(() => { setLoading(false) }, 1000)
    }

    useEffect(() => {
        loadClasses()
    }, [])

    useEffect(() => {
        filterFavorites(schedule_info)
    }, [favorites])

    return (
        <>
            <Header title={ `Meus Proffys\nFavoritos` }/>

            <View style={ styles.grayBackground }/>

            { loading && <Loading /> }

            { (favorites.length > 0 && !(loading) ) && (
                <ScrollView
                    style={ styles.container }
                    showsVerticalScrollIndicator={ false }
                >
                    { onlyFavorites.map((teacher, index) => (
                        <ProffyCard
                            key={ index }
                            favorite={ true }
                            teacher={ teacher }
                            setFavorites={ setFavorites }
                        />
                    ))}
                </ScrollView>
            )}

            { !favorites.length && !(loading) && (
                <Text style={ styles.noProffys }>
                    {`Não há favoritos\n😔`}
                </Text>
            )}
        </>
    )
}

export default Favorites

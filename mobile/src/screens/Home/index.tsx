import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
	View, Text,
    TouchableOpacity
} from 'react-native'

import { Feather } from '@expo/vector-icons'

// images and styles
import styles from './styles'
import { colors } from '../../stylesGlobal'
import LogoImg from '../../assets/logo.svg'
import TeachersImg from '../../assets/teachers.svg'

// utils
import { goToPage } from '../../utils/navigation'
import { getApi } from '../../services/api'

// custom hooks
import usePreventBack from '../../hooks/usePreventBack'


function Home({ navigation }: any) {
    usePreventBack(navigation)
    const [connections, setConnections] = useState(0)

    async function loadConnections() {
        const response = await getApi('connections/')
        setConnections(response.total)
    }

    useEffect(() => {
        loadConnections()
    })


    return (
        <View style={ styles.container }>
            <StatusBar style='auto' />

            <View style={ styles.images }>
                <LogoImg  width={ 150 } height={ 80 } />
                <TeachersImg  width={ 350 } height={ 220 } />
            </View>

            <View style={ styles.main }>
                <Text style={ styles.text }>
                    Seja bem-vindo.
                </Text>

                <Text style={ styles.textBolder }>
                    O quê deseja fazer?
                </Text>
            </View>

            <View style={ styles.buttonsContainer }>
                <TouchableOpacity
                    style={ [styles.button, styles.buttonGreen] }
                    onPress={ () => goToPage(navigation, 'ProffysTab') }
                    // onPress={ () => navigation.navigate('ProffysTab', { screen: 'Proffys' }) }
                >
                    <View style={ styles.buttonIcon }>
                        <Feather name="book-open" size={ 22 } color={ colors.white }/>
                    </View>

                    <Text style={ styles.buttonText }>Estudar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={ [styles.button, styles.buttonPurple] }
                    onPress={ () => goToPage(navigation, 'BeATeacher') }
                >
                    <View style={ styles.buttonIcon }>
                        <Feather name="monitor" size={ 22 } color={ colors.white }/>
                    </View>

                    <Text style={ styles.buttonText }>Dar aulas</Text>
                </TouchableOpacity>
            </View>

            <Text style={ styles.textFooter }>
                Total de { connections } conexões já realizadas
            </Text>


        </View>
    )
}

export default Home

import React, { useEffect } from 'react'
import {
	View, Text,
    TouchableOpacity
} from 'react-native'
import { useNavigation } from '@react-navigation/core'

import { Feather } from '@expo/vector-icons'

import styles from './styles'

import LogoImg from '../../assets/logo.svg'
import TeachersImg from '../../assets/teachers.svg'


function Home() {

    const navigation = useNavigation()

    // function navigateToCollectPlaces() {
    //     navigation.navigate(
    //         'CollectPlaces',
    //         {
    //             uf: currentUf,
    //             city: currentCity,
    //         }
    //     )
    // }


  	return (
        <View style={ styles.container }>
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

            <View style={ styles.footer }>

                <TouchableOpacity
                    style={ styles.buttonGreen }
                    onPress={ () => {} }
                >
                    <View style={ styles.buttonIcon }>
                        <Feather name="book-open" size={ 22 } color="#FFF"/>
                    </View>

                    <Text style={ styles.buttonText }>Estudar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={ styles.buttonPurple }
                    onPress={ () => {} }
                >
                    <View style={ styles.buttonIcon }>
                        <Feather name="monitor" size={ 22 } color="#FFF"/>
                    </View>

                    <Text style={ styles.buttonText }>Dar aulas</Text>
                </TouchableOpacity>
            </View>


        </View>
  	)
}

export default Home

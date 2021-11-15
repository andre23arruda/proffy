import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {
    Dimensions,
	View, Text,
    TouchableOpacity,
} from 'react-native'

import { Feather } from '@expo/vector-icons'

// images and styles
import styles from './styles'
import Background from '../../assets/background-purple-onboarding.svg'

// utils
import { goToPage } from '../../utils/navigation'
import { colors } from '../../stylesGlobal'

const height = Dimensions.get('screen').height

function OnBoarding1({ navigation }: any) {
    return (
        <View style={ styles.container }>
            <StatusBar style='auto' />

            <View style={ styles.imageContainer }>
                <Background height={ height * 0.4 }/>
                <Feather
                    name="book-open"
                    size={ 100 }
                    color={ colors.white }
                    style={ styles.icon }
                />
            </View>

            <View style={ styles.descriptionContainer }>

                <Text style={ styles.numberPage }>
                    01.
                </Text>

                <Text style={ styles.description }>
                    { `Encontre vários \nprofessores para \nensinar você` }
                </Text>

                <View style={ styles.footer }>
                    <View style={ styles.indicatorsContainer }>
                        <Text style={ [styles.indicator, { color: colors.purple }] }>.</Text>
                        <Text style={ [styles.indicator, { color: colors.lightPurple }] }>.</Text>
                    </View>

                    <TouchableOpacity
                        style={ styles.button }
                        onPress={ () => goToPage(navigation, 'onBoarding2') }
                    >
                        <Feather name="chevron-right" size={ 35 } color={ colors.purple }/>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default OnBoarding1

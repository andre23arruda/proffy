import React, { useEffect } from 'react'
import {
    Dimensions,
	View, Text,
    TouchableOpacity,
    Linking,
} from 'react-native'

import { Feather } from '@expo/vector-icons'

// images and styles
import styles from './styles'
import Background from '../../assets/background.svg'

// utils
import { goToPage } from '../../utils/navigation'
import { colors } from '../../stylesGlobal'

const width = Dimensions.get('screen').width - 50
const height = Dimensions.get('screen').height - 50

function BeATeacher({ navigation }: any) {
    const url = 'https://google.com'

    function openBrowser() {
        Linking.canOpenURL(url)
        .then(supported => {
            if (supported) {
                Linking.openURL(url)
            } else {
            console.log("Don't know how to open URI: " + url);
            }
        })
    }

    return (
        <View style={ styles.container }>
            <View style={ styles.backContainer }>
                <TouchableOpacity
                    style={ styles.buttonBack }
                    onPress={ () => goToPage(navigation, 'Home') }
                >
                    <Feather name="chevron-left" size={ 35 } color={ colors.white }/>
                </TouchableOpacity>
            </View>

            <View style={ styles.main }>
                <Background
                    style={ styles.background }
                    width={ width }
                    height={ height }
                />

                <Text style={ styles.textBolder }>
                    Quer ser um Proffy?
                </Text>

                <Text style={ styles.text }>
                    { `Para começar, você precisa\nse cadastrar como professor \nna nossa plataforma web.` }
                </Text>

                <View style={ styles.buttonContainer }>
                    <TouchableOpacity
                        style={ [styles.button, styles.buttonGreen] }
                        onPress={ openBrowser }
                    >
                        <Text style={ styles.buttonText }>Tudo bem</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default BeATeacher

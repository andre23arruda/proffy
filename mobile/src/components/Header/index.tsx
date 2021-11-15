import React from 'react'
import {
	View, Text,
    TouchableOpacity,
} from 'react-native'


// icons
import { Feather } from '@expo/vector-icons'

// images and styles
import styles from './styles'
import LogoImg from '../../assets/logo.svg'

// utils
import { goToPage } from '../../utils/navigation'
import { colors } from '../../stylesGlobal'
import { useNavigation } from '@react-navigation/native'


type HeaderProps = {
    children?: any,
	title: string,
}


function Header(props: HeaderProps) {
    const navigation = useNavigation()

    return (
        <View style={ styles.container }>
            <View style={ styles.backContainer }>
                <TouchableOpacity
                    onPress={ () => goToPage(navigation, 'Home') }
                >
                    <Feather name="chevron-left" size={ 30 } color={ colors.white }/>
                </TouchableOpacity>

                <LogoImg width={ 50 } height={ 10 } />
            </View>

            <Text style={ styles.title }>
                { props.title }
            </Text>

            { props.children }
        </View>

    )
}

export default Header

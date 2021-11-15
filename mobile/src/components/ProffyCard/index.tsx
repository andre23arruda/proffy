import React from 'react'
import {
    Image,
    Linking,
    Text,
    TouchableOpacity,
	View,
} from 'react-native'

import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons'


// images and styles
import styles from './styles'
import { colors } from '../../stylesGlobal'

// utils
import { addFavoriteProffy, removeFavoriteProffy } from '../../utils/utils'
import { postApi } from '../../services/api'


type ProffyCardProps = {
    teacher: {
        id: number,
        subject_name: string,
        teacher: number,
        teacher_name: string,
        teacher_email: string,
        teacher_whatsapp: string,
        teacher_bio: string,
        teacher_avatar: string,
        cost: number,
    },
    favorite?: boolean,
    setFavorites: () => void,
}

function ProffyCard({ teacher, favorite, setFavorites }: ProffyCardProps) {
    const message = `Olá ${ teacher.teacher_name }, gostaria de ter informações sobre sua aula de ${ teacher.subject_name }. Aguardo retorno.`

    async function sendMessage() {
		Linking.openURL(`whatsapp://send?phone=${ teacher.teacher_whatsapp }&text=${ message }`)
        await postApi('connections/', { teacher: teacher.teacher })
	}

        return (
            <View style={ styles.card }>
                <View style={ styles.cardHeader }>

                    <Image
                        style={ styles.avatar }
                        source={{ uri: teacher.teacher_avatar }}
                    />

                    <View style={ styles.nameContainer }>
                        <Text style={ styles.name }>
                            { teacher.teacher_name }
                        </Text>

                        <Text style={ styles.subject }>
                            { teacher.subject_name }
                        </Text>
                    </View>
                </View>

                <Text style={ styles.bio }>
                    { teacher.teacher_bio }
                </Text>

                <View style={ styles.cardFooter }>
                    <View style={ styles.priceContainer }>
                        <Text style={ styles.priceDescription }>Preço/hora</Text>
                        <Text style={ styles.price }>R$ { teacher.cost }</Text>
                    </View>

                    <View style={ styles.buttonsContainer }>
                        { favorite ? (
                            <TouchableOpacity
                                style={ [styles.button, styles.buttonSmall, styles.buttonRed] }
                                onPress={ () => removeFavoriteProffy(teacher.id, setFavorites) }
                            >
                                <View style={ styles.buttonIcon }>
                                    <Ionicons name="md-heart-dislike" size={ 22 } color={ colors.white } />
                                </View>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                style={ [styles.button, styles.buttonSmall, styles.buttonPurple] }
                                onPress={ () => addFavoriteProffy(teacher.id, setFavorites) }
                            >
                                <View style={ styles.buttonIcon }>
                                    <Feather name="heart" size={ 22 } color={ colors.white }/>
                                </View>
                            </TouchableOpacity>
                        )}

                        <TouchableOpacity
                            style={ [styles.button, styles.buttonFill, styles.buttonGreen] }
                            onPress={ sendMessage }
                        >
                            <View style={ styles.buttonIcon }>
                                <FontAwesome name="whatsapp" size={ 22 } color={ colors.white }/>
                            </View>

                            <Text style={ styles.buttonText }>Entrar em contato</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )

}

export default ProffyCard

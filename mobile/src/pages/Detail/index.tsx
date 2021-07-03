import React from 'react'
import {
	View, Text, Image,
	TouchableOpacity, TextInput, ImageBackground, Linking
} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/core'

import { Feather, FontAwesome } from '@expo/vector-icons'

import backgroundImg from '../../assets/home-background.png'
import * as MailComposer from 'expo-mail-composer'

import styles from './styles'


function Detail() {

    const navigation = useNavigation()
    const route: any = useRoute()

    const { item_list, image, name, email, whatsapp, city, uf } = route.params

    function navigateToHome() {
        navigation.goBack()
    }

    const message = `Olá ${ name }, gostaria de ter informações sobre o ponto de coleta. Aguardo retorno.`

    function sendEmail() {
		MailComposer.composeAsync({
			subject: `Informações sobre o ponto de coleta`,
			recipients: [email],
			body: message,
		})

	}

	function sendMessage() {
		Linking.openURL(`whatsapp://send?phone=55${ whatsapp }&text=${ message }`)
	}

  	return (
        <ImageBackground
            style={ styles.container }
            source={ backgroundImg }
            imageStyle={{ width: 274, height: 368 }}
            resizeMode="contain"
        >

            <View style={ styles.header }>
                <TouchableOpacity
                    style={ styles.headerButton }
                    onPress={ navigateToHome }
                >
                    <Feather name="chevron-left" size={ 28 } color="#34CB79"/>
                </TouchableOpacity>

                <View style={ styles.headerTitle } >
                    <Text style={ styles.headerTitleStrong }>
                        Vamos lá, entre em contato!
                    </Text>
                </View>
            </View>

            <View style={ styles.main }>

                <View style={ styles.detailContent }>

                    <Image
                        style={ styles.pointImage }
                        source={{ uri: image }}
                    />

                    <Text style={ styles.pointName }>
                        { name }
                    </Text>

                    <Text style={ styles.pointItems }>
                        { item_list.join(', ')}
                    </Text>

                    <View style={ styles.address } >
                        <Text style={ styles.addressTitle }>Endereço</Text>
                        <Text style={ styles.addressContent }>
                            {`${ city } - ${ uf }`}
                        </Text>

                        {/* <Text style={ styles.addressContent }>
                            Guilherme Gemballa, Jardim América
                        </Text>

                        <Text style={ styles.addressContent }>
                            Nº 260
                        </Text> */}

                    </View>

                </View>


                <View style={ styles.footer }>
                    <TouchableOpacity style={ styles.button } onPress={ sendMessage }>
                        <FontAwesome name="whatsapp" size={ 22 } color="#FFF"/>
                        <Text style={ styles.buttonText }>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={ styles.button } onPress={ sendEmail }>
                        <Feather name="mail" size={ 22 } color="#FFF"/>
                        <Text style={ styles.buttonText }>E-mail</Text>
                    </TouchableOpacity>
                </View>

            </View>


        </ImageBackground>
  	)
}

export default Detail

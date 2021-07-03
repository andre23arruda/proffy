import React, { useEffect, useState } from 'react'
import {
	View, Text, Image,
	TouchableOpacity,
    ImageBackground,
    ScrollView
} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/core'

import { Feather } from '@expo/vector-icons'

import { getApi, postApi } from '../../services/api'
import { showAlert } from '../../utils'

import styles from './styles'
import logoImg from '../../assets/logo.png'
import backgroundImg from '../../assets/home-background.png'
import { RectButton } from 'react-native-gesture-handler'

import MapView, { Marker } from 'react-native-maps'
import { SvgUri } from 'react-native-svg'


interface Item {
	id: number,
    image: string,
    name: string,
}

interface Place {
    id: number,
    item_list: string[],
    image: string,
    name: string,
    email: string,
    whatsapp: string,
    latitude: number,
    longitude: number,
    city: string,
    uf: string
}

interface InitialRegion {
    latitude: number,
    longitude: number,
    latitudeDelta: number,
    longitudeDelta: number,
}


function CollectPlaces() {

    const navigation = useNavigation()
    const route: any = useRoute()

    const [items, setItems] = useState<Item[]>([])
    const [selectedItems, setSelectedItems] = useState<string[]>([])

    const [places, setPlaces] = useState<Place[]>([])
    const [filteredPlaces, setFilteredPlaces] = useState<Place[]>([])

    const [initialRegion, setInitialRegion] = useState<InitialRegion>({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
    })
    const { uf, city } = route.params

    function navigateToHome() {
        navigation.goBack()
    }

    function handleNavigateToDetail(place: Place) {
        navigation.navigate('Detail', place)
    }

    async function loadItemsList() {
        const response = await getApi('items/')
        setItems(response)
    }

    async function loadCollectPlacesList() {
        const response = await getApi(`places/?uf=${ uf }&city=${ city }`)
		setPlaces(response)
        setFilteredPlaces(response)
        if (response.length > 0) {
            setInitialRegion({
                latitude: response[0].latitude,
                longitude: response[0].longitude,
                latitudeDelta: 0.014,
                longitudeDelta: 0.014,
            })
        }
	}

    function filterPlacesByItems() {
        if (selectedItems.length > 0) {
            setFilteredPlaces(places.filter( place => {
                return place.item_list.some(selectedItem => selectedItems.indexOf(selectedItem) >= 0)
            }))
        } else {
            setFilteredPlaces(places)
        }
    }

    function handleSelectedItems(item: Item) {
        var index = selectedItems.indexOf(item.name)
        if (index > -1) {
            selectedItems.splice(index, 1)
        } else {
            selectedItems.push(item.name)
        }
        setSelectedItems(selectedItems)
        filterPlacesByItems()
    }

    useEffect(() => {
        loadItemsList()
        loadCollectPlacesList()
    }, [])

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

                { places.length > 0 &&
                    <View style={ styles.headerTitle } >
                        <Text style={ styles.headerTitleStrong }>
                            😃 Bem vindo.
                        </Text>

                        <Text style={ styles.headerTitleText }>
                            Encontre no mapa um ponto de coleta.
                        </Text>

                    </View>
                }
            </View>

            { places.length > 0 ?
                <>
                <View style={ styles.mapContainer }>
                    <MapView
                        style={ styles.map }
                        initialRegion={ initialRegion }
                    >
                        { filteredPlaces.map(place => (
                            <Marker
                                key={ place.id }
                                onPress={ () => handleNavigateToDetail(place) }
                                style={ styles.mapMarker}
                                coordinate={{
                                    latitude: place.latitude,
                                    longitude: place.longitude,
                                }}
                            >
                                <View style={ styles.mapMarkerContainer }>
                                    <Image
                                        style={ styles.mapMarkerImage }
                                        source={{ uri: place.image }}
                                    />
                                    <View style={ styles.mapMarkerTitleContainer }>
                                        <Text style={ styles. mapMarkerTitle }>{ place.name }</Text>
                                    </View>

                                    <View style={ styles.mapMarkerArrow }></View>

                                </View>
                            </Marker>
                        ))}

                    </MapView>
                </View>

                <View style={ styles.itemsContainer }>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={ false }
                        contentContainerStyle={{ paddingHorizontal: 20 }}
                    >
                        { items.map(item => (
                            <TouchableOpacity
                                key={ item.id }
                                style={ selectedItems.indexOf(item.name) > -1 ?
                                    [styles.item, styles.selectedItem]
                                 :
                                    styles.item
                                }
                                onPress={ () => handleSelectedItems(item) }
                            >
                                <SvgUri width={ 42 } height={ 42 } uri={ item.image } />
                                <Text style={ styles.itemTitle }>{ item.name }</Text>
                            </TouchableOpacity>
                        ))}

                    </ScrollView>

                </View>
                </>
             :
                <Text style={ styles.noPlacesText }>
                    Desculpe. Não encontramos pontos de coleta cadastrados nessa região.
                </Text>

            }

        </ImageBackground>
  	)
}

export default CollectPlaces

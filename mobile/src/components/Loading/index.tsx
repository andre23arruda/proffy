import React from 'react'
import { ActivityIndicator, View, Text } from 'react-native'
import { colors } from '../../stylesGlobal'

// styles
import styles from './styles'


const Loading = () => (
    <View style={ styles.container }>
        <ActivityIndicator
            size="large"
            color={ colors.purple }
        />
    </View>
)


export default Loading
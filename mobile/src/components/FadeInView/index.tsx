import React, { useEffect, useRef } from 'react'
import { Animated, Easing } from 'react-native'

interface FadeInViewProps {
	children: any,
    expanded: boolean,
}


const FadeInView = ({ children, expanded }: FadeInViewProps) => {
    const fadeAnim = useRef(new Animated.Value(0)).current

    useEffect(() => {
        if (expanded) {
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 150,
                useNativeDriver: true,
                easing: Easing.linear
            }).start()
        } else {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 150,
                useNativeDriver: true,
                easing: Easing.linear
            }).start()
        }
    }, [expanded])

    return (
        <Animated.View style={{ transform: [{ scaleY: fadeAnim }] }}>
            { children }
        </Animated.View>
    )
}

export default FadeInView

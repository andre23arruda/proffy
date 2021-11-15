import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Feather } from '@expo/vector-icons';

// screens
import Home from './screens/Home'
import BeATeacher from './screens/BeATeacher'
import OnBoarding1 from './screens/OnBoarding1'
import OnBoarding2 from './screens/OnBoarding2'
import ProffysList from './screens/ProffysList'
import Favorites from './screens/Favorites'

// styles
import styles, { colors } from './stylesGlobal'

// utils
import { getFavorites } from './utils/utils'


const AppStack = createStackNavigator()
const TabStack = createBottomTabNavigator()

function ProffysTab() {
    const [favorites, setFavorites] = useState<Number[]>([])

    useEffect(() => {
        getFavorites(setFavorites)
    }, [])

    return (
        <TabStack.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: colors.darkPurple,
                tabBarInactiveTintColor: colors.gray,
                tabBarActiveBackgroundColor: colors.darkPurple,
                tabBarInactiveBackgroundColor: colors.white,
                tabBarStyle: {
                    height: 60,
                },
                tabBarIconStyle: {
                    width: '100%',
                    flex: 1,
                    marginTop: 2,
                },
            }}
        >
            <TabStack.Screen
                name="Proffys"
                children={ () => (
                    <ProffysList
                        favorites={ favorites }
                        setFavorites={ setFavorites }
                    />
                )}
                options={{
                    tabBarIcon: (
                        ({ focused }) => (
                            <View style={ focused ? [styles.tab, styles.tabFocused] : styles.tab }
                            >
                                <Feather name="users" size={ 22 } color={ focused ? colors.purple : colors.gray }/>
                                <Text style={ styles.tabLabel }>
                                    Proffys
                                </Text>
                            </View>
                        )
                    )
                }}
            />
            <TabStack.Screen
                name="Favoritos"
                children={ () => (
                    <Favorites
                        favorites={ favorites }
                        setFavorites={ setFavorites }
                    />
                )}
                options={{
                    tabBarIcon: (
                        ({ focused }) => (
                            <View style={ focused ? [styles.tab, styles.tabFocused] : styles.tab }
                            >
                                <Feather name="heart" size={ 22 } color={ focused ? colors.purple : colors.gray }/>
                                <Text style={ styles.tabLabel }>
                                    Favoritos
                                </Text>
                            </View>
                        )
                    )
                }}
            />
        </TabStack.Navigator>
    )
}


function AppScreens() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="onBoarding1" component={ OnBoarding1 } />

                <AppStack.Screen
                    name="onBoarding2"
                    component={ OnBoarding2 }
                    options={{ animationEnabled: false }}
                />

                <AppStack.Screen
                    name="Home"
                    component={ Home }
                />

                <AppStack.Screen name="BeATeacher" component={ BeATeacher } />
                <AppStack.Screen name="ProffysTab" component={ ProffysTab } />

            </AppStack.Navigator>



        </NavigationContainer>
    )
}

export default AppScreens
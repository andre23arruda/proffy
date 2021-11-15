import React, { useState } from 'react'
import {
	View, Text,
    TouchableOpacity,
    Animated,
} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

// icons
import { Feather } from '@expo/vector-icons'

// images and styles
import styles from './styles'

// utils
import { colors } from '../../stylesGlobal'
import { weekDays } from '../../utils/utils'

// custom components
import FadeInView from '../FadeInView'

type SubjectListProps = {
	id: number,
    name: string,
}

type FilterProps = {
    expandAux?: boolean,
    expandFilter: boolean,
    handleSetExpandFilter: () => void,
    subjectList: SubjectListProps[],
    selectedSubject: number,
    setSubject: (itemValue: number) => void,
    selectedWeekday: string,
    setWeekday: (itemValue: string) => void,
    selectedTime: string,
    setSelectedTime: (itemValue: string) => void,
}


function Filter(props: FilterProps) {
    const [isDatePickerVisible, setShowDatePicker] = useState(false)

    const handleConfirm = (date: Date) => {
        props.setSelectedTime(`${ String(date.getHours()).padStart(2, '0') }:${ String(date.getMinutes()).padStart(2, '0') }`)
        setShowDatePicker(false)
    }

    return (
        <View style={ styles.filterContainer }>
            <TouchableOpacity
                style={ styles.filterButton }
                activeOpacity={ 0.5 }
                onPress={ props.handleSetExpandFilter }
            >

                <Text style={ styles.filterText }>
                    <Feather name="filter" size={ 20 } color={ colors.green }/>
                    { '     Filtrar por dia, hora e matéria' }
                </Text>

                <Feather name="chevron-down" size={ 20 } color={ colors.lightPurple }/>
            </TouchableOpacity>

            { props.expandFilter && (
                <FadeInView expanded={ props.expandAux || false }>
                    <View style={ styles.pickerContainer }>
                        <Text style={ styles.pickerLabel }>Matéria</Text>

                        <View style={ styles.picker }>
                            <Picker
                                style={ styles.pickerInput }
                                selectedValue={ props.selectedSubject }
                                onValueChange={ (itemValue) => props.setSubject(itemValue) }
                            >
                                { props.subjectList.map( subject => (
                                    <Picker.Item
                                        key={ subject.id }
                                        label={ subject.name }
                                        value={ subject.id }
                                    />
                                ))}
                            </Picker>
                        </View>
                    </View>

                    <View style={ styles.twoColumns }>
                        <View style={ [styles.pickerContainer, styles.column1] }>
                            <Text style={ styles.pickerLabel }>Dia da semana</Text>

                            <View style={ styles.picker }>
                                <Picker
                                    style={ styles.pickerInput }
                                    selectedValue={ props.selectedWeekday }
                                    onValueChange={ (itemValue) => props.setWeekday(itemValue) }
                                >
                                    { weekDays.map( weekDay => (
                                        <Picker.Item
                                            key={ weekDay.value }
                                            label={ weekDay.label }
                                            value={ weekDay.value }
                                        />
                                    ))}
                                </Picker>
                            </View>
                        </View>

                        <View style={ [styles.pickerContainer, styles.column2] }>
                            <Text style={ styles.pickerLabel }>Horário</Text>

                            <View style={ styles.timePicker }>
                                <TouchableOpacity onPress={ () => setShowDatePicker(true) } >
                                    <Text style={ styles.time }>{ props.selectedTime }</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </FadeInView>
            )}

            <DateTimePickerModal
                isVisible={ isDatePickerVisible }
                mode="time"
                onConfirm={ handleConfirm }
                onCancel={ () => setShowDatePicker(false) }
            />

        </View>
    )
}

export default Filter

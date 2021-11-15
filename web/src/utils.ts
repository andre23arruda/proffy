function isValidTime(timeString: string) {
    const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/
    return timeRegex.test(timeString)
}


const weekDays = [
    { label: 'Segunda', value: '1' },
    { label: 'Terça',   value: '2' },
    { label: 'Quarta',  value: '3' },
    { label: 'Quinta',  value: '4' },
    { label: 'Sexta',   value: '5' },
    // { label: 'Sábado',  value: '6' },
    // { label: 'Domingo', value: '7' },
]


export { isValidTime, weekDays }

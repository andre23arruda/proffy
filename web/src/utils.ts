const mainTitle = 'Proffy'

function title(document: Document, pageTitle: string) {
    document.title = `${ mainTitle } | ${ pageTitle }`
}

function isValidTime(timeString: string) {
    const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/
    return timeRegex.test(timeString)
}

export { title, isValidTime }

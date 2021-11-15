import { useEffect } from 'react'

const mainTitle = 'Proffy'

function setTitle(document: Document, pageTitle: string) {
    document.title = `${ mainTitle } | ${ pageTitle }`
}

export default function useTitlePage(pageTitle: string) {
    useEffect(() => setTitle(document, pageTitle), [])
}
import { useEffect } from 'react'


export default function usePreventBack(navigation: any) {
    useEffect(() =>
        navigation.addListener('beforeRemove', (e: Event) => {
            e.preventDefault();
            return
        }),
        [navigation]
    )
}
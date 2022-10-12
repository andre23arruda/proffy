const API_URL = process.env.REACT_APP_API_URL
const baseUrl = `${ API_URL }/api/nlw2/`

export async function postJSONApi(route: string, formData: {}, auth='') {
    return fetch(
        baseUrl + route,
        {
            credentials: 'same-origin',
            method: 'POST',
            body: JSON.stringify(formData),
            headers: new Headers({
                'Authorization': auth,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            })
        }
    )
    .then(response => response.json())
}


export async function postFormDataApi(route: string, data: any, auth='') {
    const formData = new FormData()
    for (var prop in data) {
        formData.append(prop, data[prop])
    }

    return fetch(
        baseUrl + route,
        {
            credentials: 'same-origin',
            method: 'POST',
            body: formData,
            headers: new Headers({
                'Authorization': auth,
            })
        }
    )
    .then(response => response.json())
}


export async function getApi(route: string, auth='', base=true) {
    const url =  base ? baseUrl + route : route
    return fetch(url).then(response => response.json())
}


export async function deleteApi(route: string, auth='') {
    return fetch(
        baseUrl + route,
        {
            credentials: 'same-origin',
            method: 'DELETE',
            headers: new Headers({
                'Authorization': auth,
            })
        }
    )
    .then(response => response.json())
}


export async function putApi(route: string, formData: FormData, auth='') {
    return fetch(
        baseUrl + route,
        {
            credentials: 'same-origin',
            method: 'PUT',
            body: JSON.stringify(formData),
            headers: new Headers({
                'Authorization': auth,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            })
        }
    )
    .then(response => response.json())
}

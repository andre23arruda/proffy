const API_URL = `192.168.0.17:8000`

const baseUrl = `http://${ API_URL }/api/nlw2/`

async function postApi(route: string, formData: {}, auth='') {
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


async function getApi(route: string, auth='', base=true) {
    const url =  base ? baseUrl + route : route
    return fetch(
        url,
        {
            headers: new Headers({
                Authorization: auth,
            })
        }
    )
    .then(response => response.json())
}



export { getApi, postApi }
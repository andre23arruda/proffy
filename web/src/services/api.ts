const API_URL = `192.168.0.20:8000`

const baseUrl = `http://${ API_URL }/api/nlw2/`

// http://192.168.0.20:8000/api/nlw2/classes/?filter_classes&subject=5&week_day=2&time=10:00

async function postJSONApi(route: string, formData: FormData, auth='') {
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

async function postFormDataApi(route: string, data: any, auth='') {

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


async function getApi(route: string, auth='', base=true) {
    const url =  base ? baseUrl + route : route
    return fetch(url)
    .then(response => response.json())
}


async function deleteApi(route: string, auth='') {
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


async function putApi(route: string, formData: FormData, auth='') {
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

export { getApi, postJSONApi, postFormDataApi, deleteApi, putApi }
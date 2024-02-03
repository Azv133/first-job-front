import { API_SPONSOR_ROUTE } from "./globarVariables"

const path = 'sponsor'

export const getSponsors = async() => {
    
    const url = `${API_SPONSOR_ROUTE}/${path}`

    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json', 
        },
    };

    const resp = await fetch(url, requestOptions);

    const respJson = await resp.json();

    return respJson;
}

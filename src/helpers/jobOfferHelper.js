import { API_ROUTE } from "./globarVariables"

const path = 'jobOffer'

export const getJobOffers = async(profession, id_applicant) => {
    
    const url = `${API_ROUTE}/${path}/${profession}/${id_applicant}`

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

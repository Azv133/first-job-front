import { API_ROUTE } from "./globarVariables"

const path = 'applicant'

export const loginApplicant = async(email, password) => {
    
    const url = `${API_ROUTE}/${path}/login`

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify({
            email,
            password
        })
    };

    const resp = await fetch(url, requestOptions);

    const respJson = await resp.json();

    return respJson;
}

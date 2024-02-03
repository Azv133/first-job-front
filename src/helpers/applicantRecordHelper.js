import { API_ROUTE } from "./globarVariables"

const path = 'applicantRecord'

export const registerApplicantRecord = async(id_applicant, id_job) => {
    
    const url = `${API_ROUTE}/${path}`

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify({
            id_applicant,
            id_job
        })
    };

    const resp = await fetch(url, requestOptions);

    const respJson = await resp.json();

    return respJson;
}

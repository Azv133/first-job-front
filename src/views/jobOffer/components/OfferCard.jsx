import { useNavigate } from "react-router"

const getModalityClass = (modality) => {
    switch (modality){
        case 'Presencial': return 'presencial'
        case 'Virtual': return 'virtual'
        case 'Híbrido': return 'hibrido'
        case 'Patrocinado': return 'patrocinado'
    }
}

export const OfferCard = ({ id_job ,title, company, location, description, modality, logo, job_title, salary, start_date, end_date, profession, status, sponsor, link }) => {
  
    const navigate = useNavigate()

    const viewDetail = () => {
        navigate('/details', {
            state: {
                id_job,
                title,
                company,
                location,
                description,
                modality,
                logo,
                job_title,
                salary,
                start_date,
                end_date,
                profession,
                status
            }
        });
    };

    const openLink = () => {
        window.open(link, '_blank');
    }

    return (
        <div className={ sponsor ? `offer-card patrocinado-border` : `offer-card` }>
            <div className="offer-card-title justify-between">
                <div className="flex justify-center items-center gap-2">
                    <img src={ logo } alt="" className="logo" />
                    <div className="flex flex-col justify-center">
                        <h1>{ title }</h1>
                        <div className="flex gap-3 mt-1">
                            <h2>{ company }</h2>
                            <div className="flex gap-1 light-text">
                                <img src="public\svg\Map pin.svg" alt="" />
                                <p>{ location }</p>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    !sponsor &&
                    (
                        <div className="flex items-center">
                            <img src={ status === 0 ? 'public\\images\\check-gray.png' : 'public\\images\\check-green.png' } alt="" />
                        </div>
                    )
                }
        
            </div>

            <div className="offer-card-body">
                <p>{ description }</p>
            </div>

            <div className="flex justify-between w-full mt-4">
                <div className={`modality ${getModalityClass(modality)}`}>{ modality }</div>
                <div className="flex justify-center flex-grow">
                    <button className="info-button" onClick={ sponsor ? openLink : viewDetail }>
                        <img src="/public/images/Regular.png" alt="" />
                        Más información
                    </button>
                </div>
            </div>
        </div>
    )
}

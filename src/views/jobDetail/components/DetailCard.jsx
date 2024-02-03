import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { registerApplicantRecord } from "../../../helpers/applicantRecordHelper";
import { useUser } from "../../../context/UserContext";
import Swal from "sweetalert2";


export const DetailCard = ({ id_job ,title, company, location, description, modality, jobTitle, salary, dateStart, dateEnd, profession, logo, status }) => {

    const [file, setFile] = useState(null)

    useEffect(() => {
      if(status === 1){
        setFile('st1')
      }
    }, [])
    

    const { user } = useUser() 

    const navigate = useNavigate()

    const openInputFile = () => {
        let inputFile = document.getElementById('inputFile');
        inputFile.click();
    }

    const onInputChange = ({ target }) => {
        console.log(target.value)
        setFile(target.value)
    }

    const postular = async() => {
        const result = await registerApplicantRecord(user.id, id_job)
        if(result.status){
            Swal.fire({
                title: "Éxito!",
                text: result.message,
                icon: "success"
              }).then((res) => {
                navigate('/offers');
              });
        }else{
            Swal.fire({
                icon: "error",
                title: "Error",
                text: result.message,
            });
        }
    }

return (
    <div className="offer-card">
        <div className="offer-card-title mt-3">
            <img src={ logo } alt=""  className="logo" />
            <div className="flex flex-col">
                <h1>{ title }</h1>
                <div className="flex gap-3">
                    <h2>{ company }</h2>
                    <div className="flex gap-1 light-text">
                        <img src="public\svg\Map pin.svg" alt="" />
                        <p>{ location }</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="offer-card-body flex-col">
            <p>{ description }</p>

            <div className="offer-list mt-4">
                <p><b>Puesto: </b>{ jobTitle }</p>
                <p><b>Remuneración: </b>S/ { salary }</p>
                <p><b>Etapa de postulación: </b>{ `${dateStart} hasta ${dateEnd}` }</p>
                <p><b>Carrera: </b>{ profession }</p>
                <p><b>Modalidad: </b>{ modality }</p>
            </div>
        </div>

        <div className="flex justify-between w-full mt-4 mb-3">
            <button className="btn-blue" onClick={ () => navigate('/offers') }>
                <img src="public\svg\left.svg" alt="" />
            </button>
            <div className="flex justify-center flex-grow gap-5">
                <button className={ (file) ? 'info-button-blue' : 'info-button' } onClick={ openInputFile }>
                    <img src={file ? 'public\\svg\\Vector.png' : 'public\\svg\\upload.svg'} alt="" />
                    { file ? 'Modificar' : 'Adjuntar CV' }
                </button>
                <button className={ file ? 'info-button' : 'post-button' } disabled={!file} onClick={ postular }>
                    <img src="public\svg\send.svg" alt="" />
                    Postular
                </button> 
            </div>
        </div>

        <input 
            type="file"
            id="inputFile"
            value={ (file && file != 'st1') ? file : '' }
            onChange={ onInputChange }
            hidden
        />
    </div>
  )
}

import { useNavigate } from 'react-router';
import { useUser } from '../../../context/UserContext'
import { useForm } from '../../../hooks/useForm'
import { loginApplicant } from '../../../helpers/applicantHelper';
import Swal from 'sweetalert2';

export const LoginCard = () => {
    
    const { setUser } = useUser()
    const navigate = useNavigate()
    const formFields = { email: '', password: '' }
    const {onInputChange, email, password} = useForm(formFields)

    const login = async(email, password) => {
        const result = await loginApplicant(email, password)
        if(result.status){
            Swal.fire({
                title: "Éxito!",
                text: result.message,
                icon: "success"
              }).then((res) => {
                setUser(result.applicant);
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
    <>
        <div className="flex justify-center items-center he-90">
            <div className="login-card">
                <div className="titles">
                    <h2>Iniciar sesión en </h2>
                    <h1>FirstJob</h1>
                </div>

                <div className="flex flex-col gap-4 mt-9">
                    <div className="form-input">
                        <label>Correo electrónico</label>
                        <input 
                            type="text"
                            placeholder="Introduzca su correo electrónico"
                            value={ email }
                            name='email'
                            onChange={ onInputChange }
                        />
                        <img src="public\svg\user.svg" alt="" />
                    </div>
                    <div className="form-input">
                        <label>Contraseña</label>
                        <input 
                            type="password"
                            placeholder="Introduzca su contraseña"
                            value={ password }
                            name='password'
                            onChange={ onInputChange }
                        />
                        <img src="public\svg\Key.svg" alt="" />
                    </div>
                </div>

                <button 
                    className="btn-iniciar ms-auto me-auto mt-10"
                    onClick={ () => login(email, password) }
                >
                    <img src="public\images\ini.png" alt="" />
                    Iniciar Sesión
                </button>
            </div>
        </div>
    </>
  )
}

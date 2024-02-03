import { useNavigate } from 'react-router'
import { useUser } from '../context/UserContext'
import './styles.css'

export const SessionButtons = () => {

  const { user, setUser } = useUser()
  const navigate = useNavigate()

  const logOut = () => {
    setUser(null)
    navigate('/')
  }

  return (
    <div className="flex justify-end gap-4">
      <button className="btn dark">
        <img src="public\svg\user.svg" alt="" />
        { user && user.Names }
      </button>
      <button
        className="btn dark"
        onClick={ logOut }
      >
        <img src="public\svg\Out Right.svg" alt="" />
        <label>Cerrar Sesión</label>
      </button>
    </div>
  )
}

import { Footer } from '../../components/Footer'
import { LoginCard } from './components/LoginCard'
import './styles.css'



export const LoginView = () => {
  return (
    <>
      <div className='dark-bg'>
        <div className='content-container'>
            <div className='flex justify-between'>
                <img src="public\images\logo1.png" alt="" />
            </div>

            <div className='flex justify-center items-center mb-10'>
                <LoginCard />
            </div>

            <Footer />
        </div>
      </div>
    </>
  )
}

import { Banner } from '../../components/Banner'
import { ButtonsBar } from '../../components/ButtonsBar'
import { SessionButtons } from '../../components/SessionButtons'
import './styles.css'
import { Footer } from '../../components/Footer'
import './styles.css'
import { DetailCard } from './components/DetailCard'
import { useLocation } from 'react-router'

export const JobDetailView = () => {

  const { state } = useLocation();

  const { id_job ,title, company, location, description, modality, logo, job_title, salary, start_date, end_date, profession, status } = state

  return (
    <div className='content-container flex flex-col'>
      <div className='flex justify-between mb-6'>
        <ButtonsBar />
        <SessionButtons />
      </div>

      <Banner />

      <div className='content-card mt-6'>
        <div className='offer-container mb-5'>
          <DetailCard 
            title={ title } 
            company={ company }
            location={ location }
            description={ description }
            modality={ modality }
            id_job={ id_job }
            jobTitle={ job_title }
            salary={ salary }
            dateStart={ start_date }
            dateEnd={ end_date }
            profession={ profession }
            logo={ logo }
            status={ status }
          />
        </div>

        <Footer />
      </div>

    </div>
  )
}

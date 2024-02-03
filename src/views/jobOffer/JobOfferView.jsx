import { Banner } from '../../components/Banner'
import { ButtonsBar } from '../../components/ButtonsBar'
import { SessionButtons } from '../../components/SessionButtons'
import { OfferCard } from './components/OfferCard'
import './styles.css'
import { Footer } from '../../components/Footer'
import { useEffect, useState } from 'react'
import { getJobOffers } from '../../helpers/jobOfferHelper'
import { useUser } from '../../context/UserContext'
import { getSponsors } from '../../helpers/sponsorHelper'

export const JobOfferView = () => {

  const [jobOffers, setJobOffers] = useState([])
  const [sponsors, setSponsors] = useState([])
  const { user } = useUser()

  const getJO = async() => {
    const result = await getJobOffers(user.profession, user.id)
    if(result.status){
      setJobOffers(result.jobOffers)
    }else{
      console.log('Error al cargar las ofertas laborales');
    }
  }

  const getSp = async() => {
    const result = await getSponsors()
    if(result.status){
      setSponsors(result.sponsors)
    }else{
      console.log('Error al cargar los patrocinios');
    }
  }

  useEffect(() => {
    getSp()
    getJO()
  }, [])

  return (
    <div className='content-container flex flex-col'>
      <div className='flex justify-between mb-6'>
        <ButtonsBar />
        <SessionButtons />
      </div>

      <Banner />

      <div className='content-card mt-6'>
        <div className='offer-container mb-5'>
          {
            sponsors.map( (sp, index) => {
              return (
                <OfferCard
                  key={ index }
                  title={ sp.title } 
                  company={ sp.company }
                  location={ sp.location }
                  description={ sp.description }
                  modality={ sp.modality }
                  logo={ sp.logo }
                  status={ sp.status }
                  sponsor={ true }
                  link={ sp.link }
                />
              )
            })
          }
          {
            jobOffers.map( (jo, index) => {
              return (
                <OfferCard
                  key={ index }
                  id_job={ jo.id }
                  title={ jo.title } 
                  company={ jo.company }
                  location={ jo.location }
                  description={ jo.description }
                  modality={ jo.modality }
                  logo={ jo.logo }
                  status={ jo.status }
                  job_title={ jo.job_title }
                  salary={ jo.salary }
                  start_date={ jo.start_date }
                  end_date={ jo.end_date }
                  profession={ jo.profession }
                  sponsor={ false }
                />
              )
            })
          }
        </div>

        <Footer />
      </div>

    </div>
  )
}

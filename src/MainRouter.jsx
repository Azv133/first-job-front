import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginView } from './views/login/LoginView';
import { JobOfferView } from './views/jobOffer/JobOfferView';
import { JobDetailView } from './views/jobDetail/JobDetailView';

export const MainRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={ <LoginView /> } />
            <Route path='/offers' element={ <JobOfferView /> } />
            <Route path='/details' element={ <JobDetailView /> } />
        </Routes>
    </Router>
  )
}

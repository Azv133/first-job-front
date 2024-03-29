import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { UserProvider } from './context/UserContext'
import { MainRouter } from './MainRouter'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <MainRouter />
    </UserProvider>
  </React.StrictMode>,
)

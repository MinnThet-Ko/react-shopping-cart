import React, {createContext} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Routes from './components/Routes.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
)

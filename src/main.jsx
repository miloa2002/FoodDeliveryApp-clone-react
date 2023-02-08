import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import UserAuthContextProvider from './context/UserAuthContextProvider'

import RouteBienvenida from './router/RouteBienvenida'

//pages
import PantallaBienvenida from './pages/Bienvenida/PantallaBienvenida'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <RouteBienvenida>
        <PantallaBienvenida />
      </RouteBienvenida>
    </UserAuthContextProvider>
  </React.StrictMode>,
)

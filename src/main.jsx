import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import UserAuthContextProvider from './context/UserAuthContextProvider'
import RestaurantContextProvider from './context/RestaurantContextProvider'

import Router from './router/Router'
import Login from './pages/login/Login'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RestaurantContextProvider>
      <UserAuthContextProvider>
        <Router>
          <Login />
        </Router>
      </UserAuthContextProvider>
    </RestaurantContextProvider>

  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Offline, Online } from 'react-detect-offline'

import './styles/main.scss'

import ErrorIndicator from './components/ErrorComponents/ErrorIndicator/ErrorIndicator'
import ErrorMessages from './components/ErrorComponents/ErrorMessages/ErrorMessages'
import App from './components/App/App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Online>
      <App />
    </Online>
    <Offline>
      <ErrorIndicator message={ErrorMessages.NETWORK_ERROR} />
    </Offline>
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Offline, Online } from 'react-detect-offline'
import { Provider } from 'react-redux'

import './styles/main.scss'

import ErrorIndicator from './components/ErrorComponents/ErrorIndicator/ErrorIndicator'
import ErrorMessages from './components/ErrorComponents/ErrorMessages/ErrorMessages'
import App from './components/App/App'
import store from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Online>
      <Provider store={store}>
        <App />
      </Provider>
    </Online>
    <Offline>
      <ErrorIndicator message={ErrorMessages.NETWORK_ERROR} />
    </Offline>
  </React.StrictMode>
)

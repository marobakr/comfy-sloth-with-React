import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import './css/homePadge/index.css'
import './normalize.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import store from './redux/store'
AOS.init()
// Provider to connect redux with my application "root"
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

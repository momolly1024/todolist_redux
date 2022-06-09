// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import './index.css'
// import { Provider } from 'react-redux'
// import store from './redux/store'

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//     <Provider store={store}>
//         <App />
//     </Provider>
// )

// redux with toolkit

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './reduxWithToolkit/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)

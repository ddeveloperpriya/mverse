import React from 'react'
import ReactDOM  from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
// import {createTheme, ThemeProvider} from '@mui/material/styles'
import {Provider} from 'react-redux';
import store from './app/store'
import './index.css'
import App from './components/App.jsx'
import ToggleColorModeProvider from './utils/ToggleColorMode.jsx';

const root= ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}>
        <ToggleColorModeProvider >
            <BrowserRouter>
                <App/>
            </BrowserRouter>

        </ToggleColorModeProvider>
    </Provider>
,document.getElementById('root'));
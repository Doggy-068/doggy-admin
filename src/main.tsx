import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import lang from './lang'
import 'antd/dist/antd.css'
import App from './App'
import './main.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider locale={lang.antd}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
)

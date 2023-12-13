import React from 'react'
import ReactDOM from 'react-dom/client'
import PageTop from './PageTop'
import './index.css'
import './Base.css'
import HomePageContent from './HomePageContent'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PageTop />
    <HomePageContent/>
  </React.StrictMode>,
)

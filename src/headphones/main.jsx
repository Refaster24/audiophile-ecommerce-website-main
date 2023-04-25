import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import Header from '../header'
import Links from '../links'
import BestGear from '../best-gear'
import Footer from '../footer'

import Headphones from './headphones'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <Header currentFile='headphones'/>
    <main>
      <Headphones/>
      <Links/>
      <BestGear/>
    </main>
    <Footer currentFile='headphones'/>
  </React.StrictMode>,
)
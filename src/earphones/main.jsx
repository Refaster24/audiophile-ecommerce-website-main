import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import Header from '../header'
import Links from '../links'
import BestGear from '../best-gear'
import Footer from '../footer'

import Earphones from './earphones'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <Header currentFile='earphones'/>
    <main>
      <Earphones/>
      <Links/>
      <BestGear/>
    </main>
    <Footer currentFile='earphones'/>
  </React.StrictMode>,
)
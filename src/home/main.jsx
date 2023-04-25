import React from 'react'
import ReactDOM from 'react-dom/client'
import {NewProduct ,Content} from './home'
import Header from '../header'
import Links from '../links'
import BestGear from '../best-gear'
import Footer from '../footer'
import '../index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header currentFile='home'/>
    <main id='main'>
      <NewProduct/>
      <Links/>
      <Content/>
      <BestGear/>
    </main>
    <Footer currentFile='home'/>
  </React.StrictMode>,
)
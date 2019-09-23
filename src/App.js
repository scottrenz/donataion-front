import React from "react"
import Cards from './Cards'
// import {Style, H1Style} from './Cards'
import {Style} from './Cards'
import Logo from './Logo'
import axios from 'axios'
import Form from './Form'


function App() {

  return (
    <div className="container">
      <Style className='top' >
        <Logo />
      </Style>
      <Form />
    </div>
  )
}

export default App

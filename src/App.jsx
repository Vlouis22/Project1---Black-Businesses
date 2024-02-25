import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CardContainer } from './assets/components/CardContainer'

function App() {

  return (
    <>
    <div className='header'>
      <h1>Black Businesses in Delaware</h1>
      <img className='black--owned--image' src="https://static.vecteezy.com/system/resources/previews/019/787/057/non_2x/business-handshake-on-transparent-background-free-png.png"></img>
    </div>
    <CardContainer/>
    <footer>Copyright © 2024-2024 Louis Inc. Louis burst and related marks are registered trademarks of Louis.
    </footer>
    </>
  )
}

export default App

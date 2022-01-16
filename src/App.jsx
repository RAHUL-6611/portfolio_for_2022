import { useState } from 'react'
import {Header, Hero} from "./components"
import { GlobalStyle } from "./styles/global"
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
    <GlobalStyle />
      <Header />
      <Hero />
      
    </>
  )
}

export default App

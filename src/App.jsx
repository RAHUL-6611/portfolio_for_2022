import { useState } from 'react'
import {Header, Main} from "./components"
import { GlobalStyle } from "./styles/global"
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
    <GlobalStyle />
      <Header />
      <Main />
      
    </>
  )
}

export default App

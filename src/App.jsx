import { useState } from 'react'
import {Header, Main,Footer} from "./components"
import { GlobalStyle } from "./styles/global"
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
    <GlobalStyle />
      <Header />
      <Main />
      <Footer />
      
    </>
  )
}

export default App

import { useState } from 'react'
import Header from "./components/Header"
import { GlobalStyle } from "./styles/global"
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
    <GlobalStyle />
      <Header />
    </>
  )
}

export default App

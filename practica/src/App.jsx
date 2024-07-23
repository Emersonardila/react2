import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NameList from './components/NameList'
import Counter from './components/Counter'

function App() {
  
  return (
    <>
      <div>
      <NameList/>
      <Counter/>
      </div>
    </>
  )
}

export default App

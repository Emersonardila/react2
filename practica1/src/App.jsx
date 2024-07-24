import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import NoteApp from './components/NoteApp'
import NameList from './components/NameList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Counter/>
      <NoteApp/>
      <NameList/>
      
      </div>
    </>
  )
}


export default App

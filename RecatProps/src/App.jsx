import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-500 rounded-xl p-4 mb-4'>TailWind CSS</h1>
    <Card userName="LearnReact" btnText="Click Here"/>
    <Card userName="GaneshBabu"/>
    </>
  )
}

export default App

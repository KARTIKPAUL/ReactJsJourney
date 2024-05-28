import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function addValue(){
    if(count < 100) setCount(count+1);
  }
  function removeValue(){
    if(count > 0)setCount(count-1);
  }
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-3xl font-semibold mb-4 text-center text-blue-600">Counter App Using React</h1>
        <div className='text-center text-5xl font-bold'>{count}</div>
        <div className='flex items-center justify-around mt-10'>
          <button onClick={addValue} className='border px-5 py-2 bg-green-500 rounded text-xl'>Add Value</button>
          <button onClick={removeValue} className='border px-5 py-2 bg-green-500 rounded text-xl'>Remove value</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App

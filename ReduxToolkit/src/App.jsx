import './App.css'
import AddTodo from './Component/AddTodo'
import Todos from './Component/Todos'

function App() {
  
  return (
    <div className=''>
        <h1 className='text-center text-green-500 font-bold mt-5 text-5xl'>Learn About Redux Toolkit</h1>
        <AddTodo />
        <Todos />
    </div>
  )
}

export default App

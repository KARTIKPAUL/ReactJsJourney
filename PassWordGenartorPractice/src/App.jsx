import { useCallback, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const[numberAllow,setNumberAllow] = useState(false);
  const[charAllow,setCharAllow] = useState(false);
  const[password,setPassWord] = useState('');
  const passwordRef = useRef(null);

  const changePassword = useCallback(()=>{

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllow) str += "0123456789"
    if(charAllow) str += "!@#$%^&*()"

    for(let i = 1 ; i <= length ; i++){
      let charIdx = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(charIdx);
    }

    setPassWord(pass);


  },[length,numberAllow,charAllow])


  const copyPassword = () =>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }


  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center text-green-400">PassWord Generator</h1>

        <div className=''>
            <input 
            type="text"
            value={password}
            placeholder='Password'
            readOnly
            ref={passwordRef}
            className='bg-green-200 px-4 py-1 rounded'
            />
            <button onClick={copyPassword} className='border bg-blue-600 px-4 py-1 rounded hover:bg-blue-700 duration-200 text-white '>Copy</button>
        </div>
        
        <div className='my-5 ml-5'>
          <div className='flex flex-col'>
            <input 
            type="range" 
            min={8}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e)=> setLength(e.target.value)}
            />
            <label htmlFor="" className='text-xl font-sm'>Length : {length}</label>
          </div>

          <div className='my-3 flex gap-x-2'>
            <input 
            type="checkbox"
            defaultChecked={numberAllow}
            id='numberInput'
            onChange={() => {
              setNumberAllow((prev) => !prev)
            }
            }
             />
            <label htmlFor="" className='text-xl font-sm'>Number</label>
          </div>
          <div className='flex gap-x-2'>
            <input 
            type="checkbox"
            defaultChecked={charAllow}
            id='charInput'
            onChange={() =>{
              setCharAllow((prev) => !prev)
            }}
             />
            <label htmlFor="" className='text-xl font-sm'>Character</label>
          </div>

        </div>

        <div className='flex items-center justify-center'>
        <button onClick={changePassword} className='border px-4 py-1 rounded-full bg-green-400 text-center hover:bg-green-500 duration-200 text-white font-sm'>Create Password</button>
        </div>

      </div>
    </div>
    </>
  )
}

export default App

import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext';

function Login(){
    const[userName, setUserName] = useState();
    const[password, setpassword] = useState('');

    const {setUser} = useContext(UserContext);

    const handledSubmit = (e) =>{
        e.preventDefault();
        setUser({userName,password});
    }
    return(
        <>
        <div className='flex flex-col justify-center items-center text-xl my-5'>
            <h1 className='text-green-600 font-serif font-semibold text-xl mb-5'>Login</h1>
            <input 
            type="text"
            placeholder='UserName'
            className='border px-3 py-1 rounded'
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
             />
            <input 
            type="password"
            placeholder='Password'
            className='border px-3 py-1 my-2 rounded'
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
            />
            <button onClick={handledSubmit} className='border bg-green-400 text-white font-semibold px-3 py-1 rounded hover:bg-green-500 duration-300'>Submit</button>
        </div>
        </>
    )
}

export default Login;

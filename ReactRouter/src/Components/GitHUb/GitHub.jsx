import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function GitHub(){
    const data = useLoaderData();
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //         fetch('https://api.github.com/users/kartikpaul')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setData(data);
    //         })
    // },[])
    return(
        <>
         <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
            GitHub Follwers : {data.followers} 

            <img src={data.avatar_url} alt="Git_Picture"  width={300}/>
         </div>
        </>
    )
}

export default GitHub;

export const gitHubInfoLoader = async() =>{
    const responce = await fetch('https://api.github.com/users/kartikpaul')
    return responce.json();
}

import React from "react";
import { useParams } from "react-router-dom";

export default function User(){
    const {userId} = useParams()
    return(
        <>
            <div className="text-center my-5 text-green-400 bg-gray-600 p-4 text-4xl font-semibold">User : {userId}</div>
        </>
    )
}


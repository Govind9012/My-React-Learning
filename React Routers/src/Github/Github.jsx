import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github(){
    const data = useLoaderData()
    // const [data, setData] = useState({})
    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/govind9012`)
    // .then((res) => res.json())
    // .then((res) => setData(res))
    // },[])

    return (
        <>
        <div className='text-center text-black bg-gray-500 p-4'>
            Github Followers :{data.followers}
        </div>

        </>
    )
}

export default Github;

export const githubInfoLoader =async ()=>{
    const res = await fetch(`https://api.github.com/users/govind9012`)
    return res.json()
}
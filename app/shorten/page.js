"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setGenerated] = useState("")

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                seturl("")   
                setshorturl("")
                console.log(result)
                alert(result.message)
            
            })
            .catch((error) => console.error(error));
    }


      return (
 
      <div className="mx-auto max-w-lg bg-purple-300 flex flex-col justify-center p-4 my-14">
        <h1 className='px-3 text-xl'>Genarate your short URLs </h1>
        <input type="text" onChange={(e) => {seturl(e.target.value)}} className='text-lg p-1 rounded-lg focus:outline-purple-500 bg-white m-3' value={url}  placeholder='Enter the URL' id="" />
        <input type="text" onChange={(e) => {setshorturl(e.target.value)}} className='text-lg p-1 rounded-lg focus:outline-purple-500 bg-white m-3' value={shorturl}   placeholder='The Shortner' id="" />
      <button onClick={generate} className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold mx-4 text-white'>Generate</button>
      
        {generated && <> <span className='font-bold text-lg'>Your Link </span><code><Link target="_blank" href={generated}>{generated}</Link> 
                </code></>}
     </div>
  )
}

export default Shorten
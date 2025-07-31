'use client'
import {useState} from 'react';

import Link from 'next/link';


export default function Home() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")

  return (
    <>
        <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="name"/>
        <br/>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email"/>
        <button

        >
        <Link href={`/login?name=${name}&email=${email}`}>Go to Login Page</Link>
        </button>
      </>
  );
}


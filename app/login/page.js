'use client'
import {useSearchParams} from 'next/navigation'
export default function Login(){
    const params=useSearchParams();
    const name=params.get('name');
    const email=params.get('email');

    return(
        <>

        <p>I am login component {name} {email}</p>

        </>
    )
}
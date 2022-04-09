import { signIn } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const Login = () => {
    return (
        <div className="grid place-items-center ">
            <Image src="https://links.papareact.com/t4i" height={400} width={400} objectFit="contain" />
            <h1 onClick={signIn} className="bg-blue-500 rounded-full text-white text-center p-5 cursor-pointer select-none">Login with FaceBook Account</h1>
        </div>
    )
}

export default Login
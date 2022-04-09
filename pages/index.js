//.import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Login from '../components/Login/';
import { getSession } from 'next-auth/react';

export default function Home({ session }) {
  if (!session) {
    return <Login />
  }
  return (<div><Head>
    <title>FaceBook</title></Head>
    {/* header */}
    <Header />
    {/* mainApp
          - Sidebar 
          - feed 
          -widgets
    */}
  </div>
  )
}
// context is the actual request that coemes to the user when he requests the page
export async function getServerSideProps(context) {
  // gettin the user
  const session = await getSession(context)
  // rendering the session object as a prop to the component 
  return {
    props: {
      session
    }
  }
}
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Profile from '../components/Profile'

const Home: NextPage = () => {
  return (
    <section className="">
      <Head>
        <title>Lebo Mini Profile | the Next JS Rockstar</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Profile/>

      
    </section>
  )
}

export default Home

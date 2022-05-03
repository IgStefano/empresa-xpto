import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Home from '../components/Home'

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>XPTO Company</title>
        <meta name="description" content="A consultoria que você mais precisa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

       <Navbar />

      <main>
       <Home />
      </main>
    </>
  )
}

export default Index

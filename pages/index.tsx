import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className='flex justify-between items-center bg-[#bddff0] max-h-100 py-20'>
        <div className='px-24 space-y-6'>
          <h1 className="font-sans text-5xl font-bold">
            Share reviewers online with ease in the cloud.
          </h1>
          <h2>iReviewer is a plotform where students can freely share their reviewers online with ease.</h2>
        </div>

      
          <img 
            className='hidden md:inline-flex h-80 px-52'
            src='/Banner Logo.png'
            alt=''
          />
      </div>
    </div>
  )
}

export default Home

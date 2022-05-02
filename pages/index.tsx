import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import SiginInModal from '../components/SiginInModal'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>iReviewer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout/>
      {/* <SiginInModal/>        */}
    </div>
  )
}

export default Home

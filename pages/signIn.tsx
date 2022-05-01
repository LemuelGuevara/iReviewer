import React from 'react'
import SignInScreen from '../components/Auth'
import Head from 'next/head'

function signIn() {
  return (
    <div className="">
      <Head>
        <title>iReviewer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignInScreen/>      
    </div>
  )
}

export default signIn
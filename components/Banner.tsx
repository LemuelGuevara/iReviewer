import React from 'react'

function Banner() {
  return (
    <div className='flex justify-between items-center bg-[#bddff0] max-h-100 py-20'>
        <div className='px-24 space-y-6'>
          <h1 className="font-sans text-5xl font-bold">
            Share reviewers online with ease in the cloud. 
          </h1>
          <p>iReviewer is a platform where students can freely share their reviewers online with ease.</p>
        </div>
          <img 
            className='hidden md:inline-flex h-80 px-52'
            src='/Banner Logo.png'
            alt=''
          />
    </div>
  )
}

export default Banner
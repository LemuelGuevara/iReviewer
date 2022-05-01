import React from 'react'
import Link from 'next/link'
import Upload from './Upload'

function SubNavBar() {
  return (
    <div className='flex md:flex-wrap items-center justify-center py-10 px-24 font-normal'>
        <Upload/>
        <div className='items-center justify-center'>
            <Link href="/signIn">
                <button className='sub-navbar-btn'>
                    All
                </button>
            </Link>
            <Link href="/">
                <button className='sub-navbar-btn'>
                    Math
                </button>
            </Link>
            <Link href="/">
                <button className='sub-navbar-btn'>
                    Science
                </button>
            </Link>
            <Link href="/">
                <button className='sub-navbar-btn'>
                    English
                </button>
            </Link>
            <Link href="/">
                <button className='sub-navbar-btn'>
                    Technology
                </button>
            </Link>
            <Link href="/">
                <button className='sub-navbar-btn'>
                    Research
                </button>
            </Link>
            <Link href="/">
                <button className='sub-navbar-btn'>
                    Physical Education
                </button>
            </Link>
            <Link href="/">
                <button className='sub-navbar-btn'>
                    Social Sciences
                </button>
            </Link>
        </div>
    </div>
  )
}

export default SubNavBar
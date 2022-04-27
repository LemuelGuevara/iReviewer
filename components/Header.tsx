import Link from 'next/link'
import Image from 'next/image'

function Header() {
  return (
    <header className="flex justify-between mx-6 p-6 max-h-20 font-normal text-sm">
      <div className="flex items-center space-x-6">
        <div className='h-24 w-44 object-contain relative'>
          <Link href="/">
            <Image 
            className='cursor-pointer'
            src="/iReviewer-Logo.png"  
            layout='fill'/>
          </Link>
        </div>
        
        <div className="hidden md:inline-flex items-center space-x-6 text-[#8bb6b6]">
          <h3>Explore</h3>
          <h3>Trending</h3>
          <h3>Rewards</h3>
        </div>
      </div>
      
      <div className="flex items-center space-x-5 text-[#A1C9C9]">
        <h3 className="">Sign In</h3>
        <h3 className="rounded-lg bg-[#DC9488] px-4 py-1 text-white">
          Sign Up
        </h3>
      </div>
    </header>
  )
}

export default Header


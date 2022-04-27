import Link from 'next/link'
import Image from 'next/image'
import iReviewer from '../public/iReviewer.png'

function Header() {
  return (
    <header className="flex h-20 justify-between bg-[#F6F7F1] p-6 font-poppins font-semibold text-base">
      <div className="flex items-center cursor-pointer">
        <Link href="/">
          <h1>Test</h1>
        </Link>
        <div className="pl-20 hidden items-center space-x-5 text-base text-[#34A0A3] md:inline-flex">
          <h3>Explore</h3>
          <h3>Trending</h3>
          <h3>Rewards</h3>
        </div>
      </div>


      <div className="flex items-center space-x-4 text-[#A1C9C9]">
        <h3 className="">Sign In</h3>
        <h3 className="rounded-lg bg-[#DC9488] px-4 py-1 text-white">
          Sign Up
        </h3>
      </div>
    </header>
  )
}

export default Header

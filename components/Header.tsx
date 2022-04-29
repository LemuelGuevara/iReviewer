import Link from 'next/link'
import Image from 'next/image'

function Header() {
  return (
    <header className="mx-6 flex max-h-20 justify-between p-6 text-base font-semibold">
      <div className="flex items-center space-x-6">
        <Link href="/">
          <img
            className="w-44 cursor-pointer object-contain"
            src="/iReviewer-Logo.png"
            alt=""
          />
        </Link>
        <div className="hidden items-center space-x-6 text-[#767676] md:inline-flex">
          <h3>Explore</h3>
          <h3>Trending</h3>
          <h3>Rewards</h3>
        </div>
      </div>

      <div className="flex items-center space-x-5 text-[#9f9f9f] font-bold">
        <button className="">Sign In</button>
        <button className="rounded-lg bg-[#9C84C4] px-4 py-1 text-white transtion ease-in-out delay-75  hover:bg-indigo-500 duration-300">
          Sign Up
        </button>
      </div>
    </header>
  )
}

export default Header
  
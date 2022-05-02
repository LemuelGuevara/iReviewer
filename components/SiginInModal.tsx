import React, { useState } from 'react'
import Link from 'next/link'

function SiginInModal() {
  const [modalOpen, setModaOpen] = useState(false)

  const close = () => setModaOpen(false)
  const open = () => setModaOpen(true)

  return (
    <button
      className="transtion rounded-xl bg-[#9C84C4] px-4 py-1 text-white delay-75 duration-300  ease-in-out hover:bg-indigo-500"
      onClick={() => (modalOpen ? close() : open())}
      > 
      Get started
    </button>
  )
}

export default SiginInModal

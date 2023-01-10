import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="w-fit z-10 ml-6 md:ml-28">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className=" flex flex-col gap-[40px]">
          <Image alt="eve_logo" src="logo_eve.svg" height={100} width={80} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
